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
    public class TeacherController : ControllerBase
    {
        // private readonly TodoContext _context;
        private IRepository<Teacher> _repos;

        public TeacherController(IRepository<Teacher> repos)
        {
            _repos = repos;
        }

        // GET: api/Teacher
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Teacher>>> GetTeacher()
        {
            return _repos.GetAll().ToList();
        }

        // GET: api/Teacher/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Teacher>> GetTeacher(long id)
        {
            var teacher = _repos.Get(id);

            if (teacher == null)
            {
                return NotFound();
            }

            return teacher;
        }

        // PUT: api/Teacher/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeacher(long id, Teacher teacher)
        {
            if (id != teacher.Id)
            {
                return BadRequest();
            }

            _repos.Update(teacher);
            
            return NoContent();
        }

        // POST: api/Teacher
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Teacher>> PostTeacher(Teacher teacher)
        {
            
            _repos.Create(teacher);
            return CreatedAtAction("GetTeacher", new { id = teacher.Id }, teacher);
        }

        // DELETE: api/Teacher/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacher(long id)
        {
            var teacher = _repos.Get(id);
            if (teacher == null)
            {
                return NotFound();
            }

            _repos.Delete(id);
            return NoContent();
        }
    }
}
