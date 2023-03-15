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
    public class PupilDtoController : ControllerBase
    {
        // private readonly TodoContext _context;
        private IRepository<Grade> _grepos;
        private IRepository<Pupil> _prepos;

        public PupilDtoController(IRepository<Grade> grepos, IRepository<Pupil> prepos)
        {
            _grepos = grepos;
            _prepos = prepos;
        }

        // GET: api/PupilDto
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PupilDto>>> GetPupilDto()
        {
            if (_prepos.GetAll() == null)
            {
                return NotFound();
            }

            var pupils = _prepos.GetAll().Join(_grepos.GetAll(), 
                t => t.GradeId, s => s.Id, (t, s) => new
                PupilDto{
                    Id = t.Id,
                    FirstName = t.FirstName,
                    LastName = t.LastName,
                    GradeName = s.Name
                }
            );
                

            
            return Ok(pupils);
        }

        // GET: api/PupilDto/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PupilDto>> GetPupilDto(long id)
        {
            if (_prepos.GetAll() == null)
            {
                return NotFound();
            }
            var pupil = _prepos.Get(id);
            
            if (pupil == null)
            {
                return NotFound();
            }

            var PupilDto = new PupilDto()
            {
                Id = pupil.Id,
                FirstName = pupil.FirstName,
                LastName = pupil.LastName,
                GradeName = _grepos.Get(pupil.GradeId).Name
            };

            
            return PupilDto;
        }

        // PUT: api/PupilDto/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPupilDto(long id, PupilDto PupilDto)
        {
            if (id != PupilDto.Id)
            {
                return BadRequest();
            }
            var pupil = _prepos.Get(id);

            if (pupil == null)
            {
                return NotFound();
            }
            pupil.FirstName = PupilDto.FirstName;
            pupil.LastName = PupilDto.LastName;
                
            _prepos.Update(pupil);
            return NoContent();
        }

        // DELETE: api/PupilDto/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePupilDto(long id)
        {
            if (_prepos.GetAll() == null)
            {
                return NotFound();
            }
            var PupilDto = _prepos.Get(id);
            if (PupilDto == null)
            {
                return NotFound();
            }

            _prepos.Delete(id);
            return NoContent();
        }
    }
}
