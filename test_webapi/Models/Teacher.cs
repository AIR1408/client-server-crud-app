using System.ComponentModel.DataAnnotations;

namespace test_webapi.Models
{
    public class Teacher
    {
        public long Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public long SubjectId {get; set;}
        public List<Grade>? Grades {get; set;}
    }
}
