document.getElementById('convert').addEventListener('click', function() {
  const celsius = parseFloat(document.getElementById('celsius').value);
  if (!isNaN(celsius)) {
    const fahrenheit = celsius * 9/5 + 32;
    document.getElementById('result').textContent = `${celsius}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    document.getElementById('result').textContent = 'Please enter a valid temperature in Celsius.';
  }
});
