using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using StarVanlines.Models;
using StarvanlinesApi.Services;

namespace StarVanlines.Controllers;

[ApiController, Route("[controller]")]
public class ChecklistController: Controller
{
    private readonly IMailService _mailService;
    private readonly ILogger<ChecklistController> _logger;

    public ChecklistController(ILogger<ChecklistController> logger, IMailService mailService)
    {
        _mailService = mailService;
        _logger = logger;
    }

    [HttpPost("Send")]
    public IActionResult SendChecklist([FromBody]ChecklistRequest contacts)
    {
        _logger.LogInformation("Checklist request received");

        try
        {
            // TODO: Add message content
            _mailService.SendMail("Subject", "Content", new[] { new Attachment("Assets/Checklist.pdf") }, contacts.EmailAddress);

            _logger.LogInformation("Email successfully sent");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, $"Failed to send email to '{contacts.EmailAddress}'");
            return StatusCode(StatusCodes.Status500InternalServerError);
        }

        return Ok();
    }
}