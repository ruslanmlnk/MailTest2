#pragma warning disable CS8618

using StarvanlinesApi.Models.Configurations;
using System.Net.Mail;
using System.Net;
using System.Text;
using Microsoft.Extensions.Options;

namespace StarvanlinesApi.Services;

public class MailService : IMailService
{
	private readonly MailSettings _mailSettings;
	private readonly SmtpClient _client;

	public MailService(IOptions<MailSettings> options)
	{
		_mailSettings = options.Value;
		_client = new(_mailSettings.Host, _mailSettings.Port)
		{
			Credentials = new NetworkCredential(_mailSettings.Username, _mailSettings.Password),
			EnableSsl = true
		};
	}

	public void SendMail(string subject, string content, params string[] recipients) =>
		SendMail(subject, content, MailPriority.Normal, null, recipients);

	public void SendMail(string subject, string content, IEnumerable<Attachment> attachments, params string[] recipients) =>
		SendMail(subject, content, MailPriority.Normal, attachments, recipients);

	public void SendMail(string subject, string content, MailPriority priority, params string[] recipients) =>
		SendMail(subject, content, MailPriority.Normal, null, recipients);

	public void SendMail(string subject, string content, MailPriority priority, IEnumerable<Attachment>? attachments, params string[] recipients)
	{
		MailMessage message = new()
		{
			BodyEncoding = Encoding.UTF8,
			SubjectEncoding = Encoding.UTF8,
			Priority = priority,
			From = new MailAddress(_mailSettings.Mail, _mailSettings.DisplayName),
			Subject = subject,
			IsBodyHtml = true,
			Body = content,
		};

		if (attachments is not null)
			foreach (Attachment attachment in attachments)
				message.Attachments.Add(attachment);

		foreach (string i in recipients)
			message.To.Add(i);

		_client.Send(message);
	}
}