using Microsoft.EntityFrameworkCore;
using test_webapi.Models;

namespace test_webapi.Data
{


    public class TeacherRepository : IRepository<Teacher>
    {
        private TodoContext _context;
        public TeacherRepository(TodoContext context)
        {
            _context = context;
        }

        public  void Create(Teacher entity)
        {
            
            _context.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(long id)
        {
            var item = Get(id);
            if(item != null)    
                _context.Teacher.Remove(item);
            _context.SaveChanges();

        }

        public Teacher Get(long id)
        {
            return _context.Teacher.Find(id);
        }

        public IEnumerable<Teacher> GetAll()
        {
            return _context.Teacher.ToList();
        }

        public void Update(Teacher entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}