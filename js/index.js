function solicitarDatos() {
  let loanAmount, interestRate, loanTerm;
  let validInput = false;

  while (!validInput) {
    loanAmount = parseFloat(prompt("Ingrese el monto del préstamo (USD):"));
    interestRate = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));
    loanTerm = parseInt(prompt("Ingrese el plazo del préstamo (años):"));

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
      alert("Por favor, ingrese valores numéricos válidos.");
    } else {
      validInput = true;
    }
  }

  return { loanAmount, interestRate, loanTerm };
}

function calcularPagoMensual(datos) {
  let { loanAmount, interestRate, loanTerm } = datos;

  // Convertir tasa de interés anual a mensual
  let monthlyInterestRate = (interestRate / 100) / 12;
  // Convertir plazo del préstamo a meses
  let numberOfPayments = loanTerm * 12;

  // Calcular pago mensual usando bucles y funciones
  let numerator = monthlyInterestRate * Math.pow((1 + monthlyInterestRate), numberOfPayments);
  let denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;
  let monthlyPayment = loanAmount * (numerator / denominator);

  return monthlyPayment;
}

function mostrarResultado(monthlyPayment) {
  alert("Pago Mensual: $" + monthlyPayment.toFixed(2));
}

function simuladorDePagos() {
  let datos = solicitarDatos();
  if (datos !== null) {
    let monthlyPayment = calcularPagoMensual(datos);
    mostrarResultado(monthlyPayment);
  }
}

// Ejecutar el simulador
simuladorDePagos(); 