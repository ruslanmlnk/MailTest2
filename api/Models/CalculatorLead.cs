#pragma warning disable CS8618

namespace StarvanlinesApi.Models;

public class IInventoryItem
{
	public int id { get; init; }
	public string itemName { get; init; }
	public int cubicFeet { get; init; }
}

public class IClientInventory
{
	public IInventoryItem item { get; init; }
	public int quantity { get; init; }
	public int cubicFeet { get; init; }
}

public class CalculatorLead
{
	public string firstname { get; set; }
	public string email { get; set; }
	public string phone1 { get; set; }
	public int fromzip { get; set; }
	public int tozip { get; set; }
	public string movedate { get; set; }
	public string movetime { get; set; }
	public int movesize { get; set; }
	public double distance { get; set; }
	public string extras { get; set; }
	public IClientInventory[] clientInventory { get; set; }
}