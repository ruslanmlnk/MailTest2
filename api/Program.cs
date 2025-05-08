using StarvanlinesApi.Models.Configurations;
using StarvanlinesApi.Services;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddLogging((options) =>
{
    options.AddConfiguration(builder.Configuration.GetSection("Logging"));
    options.AddConsole();
    options.AddDebug();
    options.AddEventSourceLogger();
});

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("https://starvanlinesmovers.com", "https://www.starvanlinesmovers.com", "http://localhost:3000")
                .WithHeaders("Content-Type", "Authorization", "Accept")
                .WithMethods("POST", "GET", "OPTIONS", "DELETE", "PATCH")
                .AllowCredentials();
        }
    );
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "Star Van Lines API", Version = "v1" });
});

builder.Services.AddHttpContextAccessor();

// UTM tags options
builder.Services.Configure<TicketsOptions>(builder.Configuration.GetSection("TicketsOptions")!);

// Mail service setup
builder.Services.Configure<MailSettings>(builder.Configuration.GetSection("MailSettings"));
builder.Services.AddTransient<IMailService, MailService>();

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Star Van Lines API V1");
    });
}

app.MapControllers();

app.Run();
