function convert() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("result");

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitResult.textContent = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        fahrenheitResult.textContent = "Please enter a valid number.";
    }
}
