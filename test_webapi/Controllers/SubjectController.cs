using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test_webapi.Data;
using test_webapi.Models;

namespace test_webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        // private readonly TodoContext _context;
        private IRepository<Subject> _repos;

        public SubjectController(IRepository<Subject> repos)
        {
            _repos = repos;
        }

        // GET: api/Subject
        [HttpGet]
        public ActionResult<IEnumerable<Subject>> GetSubject()
        {
            return _repos.GetAll().ToList();
        }

        // GET: api/Subject/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Subject>> GetSubject(long id)
        {
            var subject = _repos.Get(id);

            if (subject == null)
            {
                return NotFound();
            }

            return subject;
        }

        // PUT: api/Subject/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubject(long id, Subject subject)
        {
            if (id != subject.Id)
            {
                return BadRequest();
            }

            _repos.Update(subject);
            
            return NoContent();
        }

        // POST: api/Subject
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Subject>> PostSubject(Subject subject)
        {
            _repos.Create(subject);
            return CreatedAtAction("GetSubject", new { id = subject.Id }, subject);
        }

        // DELETE: api/Subject/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSubject(long id)
        {

            var subject = _repos.Get(id);
            if (subject == null)
            {
                return NotFound();
            }

            _repos.Delete(id);
            return NoContent();
        }

    }
}
