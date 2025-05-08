/// <summary>
/// 	Sends quiz info to CRM
/// </summary>
// [HttpPost("quiz")]
// [ProducesResponseType(StatusCodes.Status200OK)]
// [ProducesResponseType(StatusCodes.Status500InternalServerError)]
// [ProducesResponseType(StatusCodes.Status400BadRequest)]
// public async Task<IActionResult> quiz()
// {
// 	string apiEndpoint = "https://api.smartmoving.com/api/leads/from-provider/v2?providerKey=7e746f27-3dfd-481b-a142-b08500289ac5";
// 	var payload = await new StreamReader(HttpContext.Request.Body).ReadToEndAsync();

// 	bool isExtras = false;

// 	if (payload.Contains("extras")) isExtras = true;

// 	QuizModel quizData = JsonSerializer.Deserialize<QuizModel>(payload);

// 	SmartmovingLead smartmovingLead = new SmartmovingLead
// 	{
// 		FullName = quizData.contacts.name != null ? quizData.contacts.name : "",
// 		Email = quizData.contacts.mail != null ? quizData.contacts.mail : "",
// 		PhoneNumber = quizData.contacts.phone != null ? quizData.contacts.phone : "",
// 		QuizExtras = isExtras ? JsonSerializer.Serialize(quizData.extras, new JsonSerializerOptions { WriteIndented = true }) : JsonSerializer.Serialize(quizData.extra, new JsonSerializerOptions { WriteIndented = true }),
// 		QuizName = quizData.service,
// 		Answers = PrettifyAnswers(quizData.answers),
// 		ReferralSource = "Matomba Quiz"
// 	};

// 	string content = JsonSerializer.Serialize(smartmovingLead);
// 	var contentString = new StringContent(content, Encoding.UTF8, "application/json");
// 	HttpResponseMessage response = await client.PostAsync(apiEndpoint, contentString);
// 	response.EnsureSuccessStatusCode();

// 	return Ok();
// }