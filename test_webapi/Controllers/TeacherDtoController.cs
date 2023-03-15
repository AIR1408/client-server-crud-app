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
    public class TeacherDtoController : ControllerBase
    {
        private IRepository<Teacher> _trepos;
        private IRepository<Subject> _srepos;


        public TeacherDtoController(IRepository<Teacher> trepos, IRepository<Subject> srepos)
        {
            _trepos = trepos;
            _srepos = srepos;

        }

        // GET: api/TeacherDto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TeacherDto>>> GetTeacherDto()
        {
           
            // var teachers = await _context.Teacher.Include("Subject").Select(t => 
            //     new TeacherDto()
            //     {
            //         Id = t.Id,
            //         FirstName = t.FirstName,
            //         LastName = t.LastName,
            //         SubjectName = t
            //     }
            // ).ToListAsync();

            var teachers = _trepos.GetAll().Join(_srepos.GetAll(), 
                t => t.SubjectId, s => s.Id, (t, s) => new
                TeacherDto{
                    Id = t.Id,
                    FirstName = t.FirstName,
                    LastName = t.LastName,
                    SubjectName = s.Name
                }
            );
                

            
            return Ok(teachers);
        }

        // GET: api/TeacherDto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TeacherDto>> GetTeacherDto(long id)
        {
            
            var teacher = _trepos.Get(id);
            
            if (teacher == null)
            {
                return NotFound();
            }

            var teacherDto = new TeacherDto()
            {
                Id = teacher.Id,
                FirstName = teacher.FirstName,
                LastName = teacher.LastName,
                SubjectName = _srepos.Get(teacher.SubjectId).Name
            };

            
            return teacherDto;
        }

        // PUT: api/TeacherDto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTeacherDto(long id, TeacherDto teacherDto)
        {
            if (id != teacherDto.Id)
            {
                return BadRequest();
            }
            var teacher = _trepos.Get(id);

            if (teacher == null)
            {
                return NotFound();
            }
            teacher.FirstName = teacherDto.FirstName;
            teacher.LastName = teacherDto.LastName;
                
            _trepos.Update(teacher);

            return NoContent();
        }

        // DELETE: api/TeacherDto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTeacherDto(long id)
        {
            var teacher = _trepos.Get(id);
            if (teacher == null)
            {
                return NotFound();
            }

            _trepos.Delete(id);
            return NoContent();
        }

    }
}
