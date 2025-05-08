#pragma warning disable CS8618

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net.Mail;
using System.Net.Http;
using System.Text.Json;
using System.Text;

using StarvanlinesApi.Services;
using StarvanlinesApi.Models;
using StarvanlinesApi.Models.Configurations;
using System.Net;

namespace StarvanlinesApi.Controllers;

/// <summary>
/// 	Mailing controller
/// </summary>
[ApiController]
[Route("[controller]")]
public class sendController : Controller
{
	private readonly string[] _adminEmail;
	private readonly IMailService _mailService;
	private readonly IWebHostEnvironment _env;
	private readonly TicketsOptions _ticketsOptions;
	private readonly IHttpContextAccessor _context;
	private readonly ILogger<sendController> _logger;
	private static readonly HttpClient client = new HttpClient();

	public sendController(ILogger<sendController> logger, IOptions<MailSettings> mailSettings, IMailService mailService, IOptions<TicketsOptions> ticketsOptions, IHttpContextAccessor context, IWebHostEnvironment env)
	{
		_adminEmail = mailSettings.Value.AdminEmail;
		_mailService = mailService;
		_env = env;
		_ticketsOptions = ticketsOptions.Value;
		_context = context;
		_logger = logger;
	}

	/// <summary>
	/// 	Sends the user's moving request data to the administrators' email
	/// </summary>
	[HttpPost("movingRequest")]
	[ProducesResponseType(StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status500InternalServerError)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public IActionResult movingRequest(MovingRequest movingRequest)
	{
		_logger.LogInformation("Moving request received");
		string content = MovingRequestPopulateBody(movingRequest.ClientName, movingRequest.PhoneNumber, movingRequest.EmailAddress, movingRequest.ZipFrom, movingRequest.ZipTo, GetUtmCookies());

		_logger.LogInformation($"Sending email to admins: {string.Join("; ", _adminEmail)}");
		_mailService.SendMail("New Moving Request", content, MailPriority.High, _adminEmail);
		_logger.LogInformation($"Email sucessfully sent");

		return Ok();
	}

	/// <summary>
	/// 	Sends the user's quote data to the administrators' email
	/// </summary>
	[HttpPost("newQuote")]
	[ProducesResponseType(StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status500InternalServerError)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public IActionResult newQuote(NewQuote newQuote)
	{
		_logger.LogInformation("New quote request received");
		string content = NewQuotePopulateBody(newQuote.ClientName, newQuote.PhoneNumber, newQuote.EmailAddress, GetUtmCookies());

		_logger.LogInformation($"Sending email to admins: {string.Join("; ", _adminEmail)}");
		_mailService.SendMail("New Moving Request", content, MailPriority.High, _adminEmail);
		_logger.LogInformation($"Email sucessfully sent");

		return Ok();
	}

	/// <summary>
	/// 	Sends the user's calculator lead with all data to the administrators' email
	/// </summary>
	[HttpPost("calculatorLead")]
	[ProducesResponseType(StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status500InternalServerError)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public IActionResult calculatorLead(CalculatorLead calculatorLead)
	{
		_logger.LogInformation("Calculator lead request received");
		string content = CalculatorLeadPopulateBody(
			calculatorLead.firstname,
			calculatorLead.email,
			calculatorLead.phone1,
			calculatorLead.fromzip,
			calculatorLead.tozip,
			calculatorLead.movedate,
			calculatorLead.movetime,
			calculatorLead.movesize,
			calculatorLead.distance,
			calculatorLead.extras,
			calculatorLead.clientInventory,
			GetUtmCookies()
		);

		_logger.LogInformation($"Sending email to admins: {string.Join("; ", _adminEmail)}");
		_mailService.SendMail("New Calculator Lead", content, MailPriority.High, _adminEmail);
		_logger.LogInformation($"Email sucessfully sent");

		return Ok();
	}

	/// <summary>
	/// 	Sends the user's request data from Contact page to the administrators' email
	/// </summary>
	[HttpPost("contactRequest")]
	[ProducesResponseType(StatusCodes.Status200OK)]
	[ProducesResponseType(StatusCodes.Status500InternalServerError)]
	[ProducesResponseType(StatusCodes.Status400BadRequest)]
	public IActionResult contactRequest(ContactRequest contactRequest)
	{
		_logger.LogInformation("Contact request received");
		string content = ContactRequestPopulateBody(contactRequest.ClientName, contactRequest.PhoneNumber, contactRequest.EmailAddress, contactRequest.Comment, GetUtmCookies());

		_logger.LogInformation($"Sending email to admins: {string.Join("; ", _adminEmail)}");
		_mailService.SendMail("New Contact Request", content, MailPriority.High, _adminEmail);
		_logger.LogInformation($"Email sucessfully sent");

		return Ok();
	}

	private string PrettifyAnswers(Answer[] answers)
	{
		string result = "";

		for (int i = 0; i < answers.Length; i++)
		{
			result += $"\n{i + 1}. {answers[i].q}\n";
			answers[i].a.ForEach(a => result += $"{a}; ");
			result += "\n";
		}

		result += "\n";

		return result;
	}


	private List<string> GetUtmCookies()
	{
		var context = _context.HttpContext;
		List<string> utmCookies = new List<string>() { };

		foreach (var item in _ticketsOptions.UtmTags)
		{
			if (context.Request.Cookies[item] != null)
			{
				utmCookies.Add($"<b>{item}:</b> {context.Request.Cookies[item]}");
			}
		}

		return utmCookies;
	}

	private string MovingRequestPopulateBody(string? clientName, string phoneNumber, string? email, string? zipFrom, string? zipTo, List<string> utmCookies)
	{
		var parameters = new Dictionary<string, string> { { "Phone number", phoneNumber } };

		if (clientName is not null)
			parameters.Add("Full name", clientName);
		if (email is not null)
			parameters.Add("Email", email);
		if (zipFrom is not null)
			parameters.Add("Landing address", zipFrom);
		if (zipTo is not null)
			parameters.Add("Destination address", zipTo);

		var messageBody = GetMovingRequest(parameters, utmCookies);
		return messageBody;
	}

	private string NewQuotePopulateBody(string clientName, string phoneNumber, string email, List<string> utmCookies)
	{
		string messageBody = ReadFileContents("newQuote.htm");

		messageBody = messageBody.Replace("{clientName}", clientName);
		messageBody = messageBody.Replace("{phoneNumber}", phoneNumber);
		messageBody = messageBody.Replace("{email}", email);
		messageBody = messageBody.Replace("{utmCookies}", string.Join("<br/>", utmCookies));

		return messageBody;
	}

	private string CalculatorLeadPopulateBody(
		string firstname,
		string email,
		string phone1,
		int fromzip,
		int tozip,
		string movedate,
		string movetime,
		int movesize,
		double distance,
		string extras,
		IClientInventory[] clientInventory,
		List<string> utmCookies
	)
	{
		string messageBody = ReadFileContents("calculatorLead.htm");

		string[] inventoryStringArray = clientInventory.Select((i, index) =>
$"""
<h3>- {i.item.itemName}*</h3>
<b>Quantity:</b> {i.quantity}<br/>
<b>Cubic Feet:</b> {i.cubicFeet * i.quantity}<br/>
""").ToArray();

		messageBody = messageBody.Replace("{firstname}", firstname);
		messageBody = messageBody.Replace("{email}", email);
		messageBody = messageBody.Replace("{phone1}", phone1);
		messageBody = messageBody.Replace("{fromzip}", fromzip.ToString());
		messageBody = messageBody.Replace("{tozip}", tozip.ToString());
		messageBody = messageBody.Replace("{movedate}", movedate);
		messageBody = messageBody.Replace("{movetime}", movetime);
		messageBody = messageBody.Replace("{movesize}", movesize.ToString());
		messageBody = messageBody.Replace("{distance}", distance.ToString());
		messageBody = messageBody.Replace("{firstname}", firstname);
		messageBody = messageBody.Replace("{extras}", extras);
		messageBody = messageBody.Replace("{inventoryStringArray}", string.Join("\n\n", inventoryStringArray));
		messageBody = messageBody.Replace("{utmCookies}", string.Join("<br/>", utmCookies));

		return messageBody;
	}

	private string ContactRequestPopulateBody(string clientName, string phoneNumber, string email, string comment, List<string> utmCookies)
	{
		string messageBody = ReadFileContents("contactRequest.htm");

		messageBody = messageBody.Replace("{clientName}", clientName);
		messageBody = messageBody.Replace("{phoneNumber}", phoneNumber);
		messageBody = messageBody.Replace("{email}", email);
		messageBody = messageBody.Replace("{comment}", comment);
		messageBody = messageBody.Replace("{utmCookies}", string.Join("<br/>", utmCookies));

		return messageBody;
	}

	private string ReadFileContents(string fileName)
	{
		string filePath = Path.Combine(_env.WebRootPath, fileName);

		using (StreamReader reader = new StreamReader(filePath))
		{
			return reader.ReadToEnd();
		}
	}

	private string GetMovingRequest(Dictionary<string, string> parameters, List<string> utmCookies)
	{
		var body = "<h3>" + Environment.NewLine;
		body += string.Join(" <br />" + Environment.NewLine, parameters.Select(p => "\t" + p.Key + ": " + p.Value));
		if (utmCookies.Any())
		{
			body += Environment.NewLine + "\t<br />" + Environment.NewLine;
			string.Join(" <br />" + Environment.NewLine, utmCookies.Select(c => "\t" + c));
		}
		body += Environment.NewLine + "</h3>";
		return body;
	}
}

