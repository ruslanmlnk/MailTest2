#pragma warning disable CS8618

namespace StarvanlinesApi.Models;

public class RawData
{
    public dynamic q { get; set; }
    public dynamic a { get; set; }
}

public class Answer
{
    public string q { get; set; }
    public List<string> a { get; set; }
}

public class Result
{
    public long id { get; set; }
    public string name { get; set; }
    public int cost { get; set; }
    public int count { get; set; }
    public int discount { get; set; }
    public string currency { get; set; }
}

public class Social
{
    public string vkontakte { get; set; }
}

public class Utm
{
    public string utm_source { get; set; }
    public string utm_campaign { get; set; }
    public string utm_term { get; set; }
    public string utm_content { get; set; }
    public string utm_medium { get; set; }
    public string utm_referrer { get; set; }
}

public class Extras
{
    public string referer { get; set; }
    public string open { get; set; }
    public Utm? utm { get; set; }
}

public class Extra
{
    public string referer { get; set; }
}

public class Contacts
{
    public string phone { get; set; }
    public string mail { get; set; }
    public string name { get; set; }
    public Social social { get; set; }
}

public class Cookies
{
    public long roistat_visit { get; set; }
    public string _ga { get; set; }
}

public class QuizModel
{
    public string service { get; set; }
    public RawData[] raw { get; set; }
    public Answer[] answers { get; set; }
    public dynamic results { get; set; }
    public Contacts contacts { get; set; }
    public dynamic cookies { get; set; }
    public Extra extra { get; set; }
    public Extras extras { get; set; }
    public long created { get; set; }
}
