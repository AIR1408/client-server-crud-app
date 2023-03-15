using System.ComponentModel.DataAnnotations;

namespace test_webapi.Models
{
    public class TeacherDto
    {
        public long Id { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public string? SubjectName {get; set;}
    }
}
