document.addEventListener("DOMContentLoaded", function () {
  const oneUnit = document.getElementById("oneUnit");
  const twoUnits = document.getElementById("twoUnits");
  const threeUnits = document.getElementById("threeUnits");
  const totalPrice = document.getElementById("totalPrice");
  const oneUnitsOptions = document.getElementById("oneUnitsOptions");
  const twoUnitsOptions = document.getElementById("twoUnitsOptions");
  const threeUnitsOptions = document.getElementById("threeUnitsOptions");

  // Update the total price based on selection
  // oneunit selected then it will show  the size & price of one unit;

  document.getElementById("pricingForm")
    document.addEventListener("change", function () {
      if (oneUnit.checked) {
        totalPrice.textContent = "$10.00 USD";
        oneUnitsOptions.style.display = "block";
      } else if (twoUnits.checked) {
        totalPrice.textContent = "$18.00 USD";
        oneUnitsOptions.style.display = "none";
      } else if (threeUnits.checked) {
        totalPrice.textContent = "$24.00 USD";
        oneUnitsOptions.style.display = "none";
      }
      
    });
    // twounit selected then it will show  the size & price of two unit;
    document.getElementById("pricingForm")
    document.addEventListener("change", function () {
      if (oneUnit.checked) {
        totalPrice.textContent = "$10.00 USD";
        twoUnitsOptions.style.display = "none";
      } else if (twoUnits.checked) {
        totalPrice.textContent = "$18.00 USD";
        twoUnitsOptions.style.display = "block";
      } else if (threeUnits.checked) {
        totalPrice.textContent = "$24.00 USD";
        twoUnitsOptions.style.display = "none";
      }
      
    });
    // threeunit selected then it will show  the size & price of three unit;
    document.getElementById("pricingForm")
    document.addEventListener("change", function () {
      if (oneUnit.checked) {
        totalPrice.textContent = "$10.00 USD";
        threeUnitsOptions.style.display = "none";
      } else if (twoUnits.checked) {
        totalPrice.textContent = "$18.00 USD";
        threeUnitsOptions.style.display = "none";
      } else if (threeUnits.checked) {
        totalPrice.textContent = "$24.00 USD";
        threeUnitsOptions.style.display = "block";
      }
      
    });
});
