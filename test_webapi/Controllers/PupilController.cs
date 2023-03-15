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
    public class PupilController : ControllerBase
    {
        // private readonly TodoContext _context;
        private IRepository<Pupil> _repos;

        public PupilController(IRepository<Pupil> repos)
        {
            _repos = repos;
        }

        // GET: api/Pupil
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pupil>>> GetPupil()
        {
            return _repos.GetAll().ToList();
        }

        // GET: api/Pupil/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pupil>> GetPupil(long id)
        {
            var pupil = _repos.Get(id);

            if (pupil == null)
            {
                return NotFound();
            }

            return pupil;
        }

        // PUT: api/Pupil/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPupil(long id, Pupil pupil)
        {
            if (id != pupil.Id)
            {
                return BadRequest();
            }

            _repos.Update(pupil);
            
            return NoContent();
        }

        // POST: api/Pupil
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pupil>> PostPupil(Pupil pupil)
        {
            _repos.Create(pupil);
            return CreatedAtAction("GetPupil", new { id = pupil.Id }, pupil);
        }

        // DELETE: api/Pupil/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePupil(long id)
        {
            var pupil = _repos.Get(id);
            if (pupil == null)
            {
                return NotFound();
            }

            _repos.Delete(id);
            return NoContent();
        }

    }
}
