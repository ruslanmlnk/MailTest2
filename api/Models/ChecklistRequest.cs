using System.ComponentModel.DataAnnotations;

namespace StarVanlines.Models;

public record ChecklistRequest(
    [Phone]
    string PhoneNumber,
    [EmailAddress]
    string EmailAddress
);