export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

export function calculcarMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeu":
      incremento = 1.3;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    case "americano":
      incremento = 1.15;
      break;
    default:
      break;
  }

  return incremento;
}

//calculca o tipo de seguro

export function obterPlan(plan) {
  return plan(plan === "basico") ? 1.2 : 1.5;
}
