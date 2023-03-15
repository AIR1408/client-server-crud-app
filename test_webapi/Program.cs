using Microsoft.EntityFrameworkCore;
using test_webapi.Data;
using test_webapi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddControllers();
builder.Services.AddDbContext<TodoContext>(options => options.UseNpgsql(connectionString));

builder.Services.AddScoped<IRepository<Subject>, SubjectRepository>();
builder.Services.AddScoped<IRepository<Teacher>, TeacherRepository>();
builder.Services.AddScoped<IRepository<Grade>, GradeRepository>();
builder.Services.AddScoped<IRepository<Pupil>, PupilRepository>();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        builder =>
        {

          //you can configure your custom policy
            builder.AllowAnyOrigin()
                                .AllowAnyHeader()
                                .AllowAnyMethod();
        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    // app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors();

//app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
