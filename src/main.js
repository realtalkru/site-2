$("#calorie-calculator").submit((e) => {
  e.preventDefault();
  calcDailyCals();
});

$("#macro-calculator").submit((e) => {
  e.preventDefault();
  calcCalsFromMacros();
});

$('button[type="reset"]').click(() => {
  $("#results").fadeOut("fast", function () {
    $(this).html("");
  });
});

function calcCalsFromMacros() {
  const carbs = parseInt($("#carbs").val()) * 4;
  const protein = parseInt($("#protein").val()) * 4;
  const fat = parseInt($("#fat").val()) * 9;
  const result = carbs + protein + fat;

  $("#m-results").fadeOut("fast", function () {
    $(this).html(`<h3>Estimated Daily Calories: ${result}</h3>`).fadeIn("fast");
  });
}

function calcDailyCals() {
  const age = parseInt($("#age").val());
  const sex = $('input[name="sex"]:checked').val();
  const weight = parseFloat($("#weight").val()) * 0.453592;
  const height = parseFloat($("#inches").val()) * 2.54;
  const activity = parseFloat($("#activity_level").val());
  const goal = parseInt($("#gain_loss_amount").val());

  let result;

  if (sex === "male") {
    result = (88.362 + 13.397 * weight + 4.799 * height - 5.677 * age) * activity;
  } else {
    result = (447.593 + 9.247 * weight + 3.098 * height - 4.33 * age) * activity;
  }

  result = Math.round(result + goal);

  calcDailyMacros(result);

  $("#results").fadeOut("fast", function () {
    $(this).html(`<h3>Estimated Daily Calories: ${result}</h3>`).fadeIn("fast");
  });

  function calcDailyMacros(result) {
    const carbs = (result * 0.4) / 4;
    const protein = (result * 0.3) / 4;
    const fat = (result * 0.3) / 9;

    $("#carbs").val(Math.round(carbs));
    $("#protein").val(Math.round(protein));
    $("#fat").val(Math.round(fat));
  }
}
