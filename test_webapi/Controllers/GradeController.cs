using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using test_webapi.Models;
using test_webapi.Data;

namespace test_webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradeController : ControllerBase
    {
        // private readonly TodoContext _context;
        private IRepository<Grade> _repos;


        public GradeController(IRepository<Grade> repos)
        {
            _repos = repos;
        }

        // GET: api/Grade
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Grade>>> GetGrade()
        {
            return _repos.GetAll().ToList();
        }

        // GET: api/Grade/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Grade>> GetGrade(long id)
        {
            
            var grade = _repos.Get(id);

            if (grade == null)
            {
                return NotFound();
            }

            return grade;
        }

        // PUT: api/Grade/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrade(long id, Grade grade)
        {
            
            if (id != grade.Id)
            {
                return BadRequest();
            }

            _repos.Update(grade);
            
            return NoContent();
        }

        // POST: api/Grade
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Grade>> PostGrade(Grade grade)
        {
            _repos.Create(grade);
            return CreatedAtAction("GetGrade", new { id = grade.Id }, grade);
        }

        // DELETE: api/Grade/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrade(long id)
        {
            var grade = _repos.Get(id);
            if (grade == null)
            {
                return NotFound();
            }

            _repos.Delete(id);
            return NoContent();
        }

    }
}
