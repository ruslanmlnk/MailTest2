using System.Net.Mail;

namespace StarvanlinesApi.Services;

public interface IMailService
{
	void SendMail(string subject, string content, params string[] recipients);
	void SendMail(string subject, string content, IEnumerable<Attachment> attachments, params string[] recipients);
	void SendMail(string subject, string content, MailPriority priority, params string[] recipients);
	void SendMail(string subject, string content, MailPriority priority, IEnumerable<Attachment> attachments, params string[] recipients);
}