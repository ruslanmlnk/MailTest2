#pragma warning disable CS8618

namespace StarvanlinesApi.Models;

public class MovingRequest
{
	public string? ClientName { get; set; }
	public required string PhoneNumber { get; set; }
	public string? EmailAddress { get; set; }
	public string? ZipFrom { get; set; }
	public string? ZipTo { get; set; }
}
