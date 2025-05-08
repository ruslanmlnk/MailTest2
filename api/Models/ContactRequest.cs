#pragma warning disable CS8618

namespace StarvanlinesApi.Models;

public class ContactRequest
{
	public string ClientName { get; set; }
	public string PhoneNumber { get; set; }
	public string EmailAddress { get; set; }
	public string Comment { get; set; }
}