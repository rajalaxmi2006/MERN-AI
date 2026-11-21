const display = document.getElementById("display");

// Add nums and operators
function append(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Clear
function clearDisplay() {
  display.value = "0";
}

// Delete
function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

// Calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}


