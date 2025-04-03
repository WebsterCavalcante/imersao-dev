function conversor() {
  const um_won = 0.0040;
  let won = Number(window.document.querySelector('input#won').value);
  alert(`R$${won * um_won}`);
}
function conversor_dolar() {
  const um_dolar = 5.76;
  let won = Number(window.document.querySelector('input#dolar').value);
  alert(`R$${won * um_dolar}`);
}
function conversor_euro() {
  const um_euro = 6.21;
  let won = Number(window.document.querySelector('input#euro').value);
  alert(`R$${won * um_euro}`);
}