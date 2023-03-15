using Microsoft.EntityFrameworkCore;
using test_webapi.Models;

namespace test_webapi.Data
{


    public class PupilRepository : IRepository<Pupil>
    {
        private TodoContext _context;
        public PupilRepository(TodoContext context)
        {
            _context = context;
        }

        public  void Create(Pupil entity)
        {
            
            _context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var item = Get(id);
            if(item != null)    
                _context.Pupil.Remove(item);
            _context.SaveChanges();

        }

        public Pupil Get(long id)
        {
            return _context.Pupil.Find(id);
        }

        public IEnumerable<Pupil> GetAll()
        {
            return _context.Pupil.ToList();
        }

        public void Update(Pupil entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}