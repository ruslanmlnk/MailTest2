#pragma warning disable CS8618

using StarvanlinesApi.Models;
namespace StarvanlinesApi.Models;

public class SmartmovingLead
{
    public string FullName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string QuizExtras { get; set; }
    public string QuizName { get; set; }
    public string Answers { get; set; }
    public string ReferralSource { get; set; }
}