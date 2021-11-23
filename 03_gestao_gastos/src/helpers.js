export const revisarOrcamento = (orcamento, restante) => {
  let clase;

  if (orcamento / 4 > restante) {
    clase = "alert alert-danger";
  } else if (orcamento / 2 > restante) {
    clase = "alert alert-warning";
  } else {
    clase = "alert alert-success";
  }

  return clase;
};
