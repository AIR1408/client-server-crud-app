using System.Collections.Generic;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using test_webapi.Controllers;
using test_webapi.Data;
using test_webapi.Models;

namespace Tests;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void NotNullTest()
    {
        // Arrange
        var mock = new Mock<IRepository<Subject>>();
        mock.Setup(repo => repo.GetAll()).Returns(GetListOfSubjects());
        SubjectController controller = new SubjectController(mock.Object);

        // Act
        var result = controller.GetSubject();

        // Assert
        Assert.IsNotNull(result);
    }

    [TestMethod]
    public void TypeTest()
    {
        // Arrange
        var mock = new Mock<IRepository<Subject>>();
        mock.Setup(repo => repo.GetAll()).Returns(GetListOfSubjects());
        SubjectController controller = new SubjectController(mock.Object);

        // Act
        var result = controller.GetSubject();

        // Assert
        Assert.IsInstanceOfType(result.Value, typeof(IEnumerable<Subject>));
        // Assert.AreEqual(GetListOfSubjects().Count, result.Count());
    }

    [TestMethod]
    public void CountTest()
    {
        // Arrange
        var mock = new Mock<IRepository<Subject>>();
        mock.Setup(repo => repo.GetAll()).Returns(GetListOfSubjects());
        SubjectController controller = new SubjectController(mock.Object);

        // Act
        var result = controller.GetSubject();

        // Assert
        Assert.AreEqual(GetListOfSubjects().Count(), result.Value.ToList().Count());
    }

    [TestMethod]
    public void EqualTest()
    {
        // Arrange
        var mock = new Mock<IRepository<Subject>>();
        mock.Setup(repo => repo.Get(0)).Returns(GetListOfSubjects()[0]);
        SubjectController controller = new SubjectController(mock.Object);

        // Act
        var result = controller.GetSubject(0);

        // Assert
        Assert.AreEqual(GetListOfSubjects()[0].Id, result.Result.Value.Id);
        Assert.AreEqual(GetListOfSubjects()[0].Name, result.Result.Value.Name);
    }

    private List<Subject> GetListOfSubjects()
    {
        var subjects = new List<Subject>
        {
            new Subject {Id = 1, Name = "Abc"},
            new Subject {Id = 2, Name = "Boo"},
            new Subject {Id = 3, Name = "Auu"},
        };
        return subjects;
    }
}