namespace StarvanlinesApi.Models.Configurations;

#pragma warning disable CS8618

public class MailSettings
{
	public string Mail { get; set; }
	public string DisplayName { get; set; }
	public string Username { get; set; }
	public string Password { get; set; }
	public string Host { get; set; }
	public int Port { get; set; }
	public string[] AdminEmail { get; set; }
}