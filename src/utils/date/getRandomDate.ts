export function getRandomDate() {
  const inicio = new Date(2021, 0, 1);
  const fin = new Date(2050, 11, 31);

  const fechaRandom = new Date(
    inicio.getTime() + Math.random() * (fin.getTime() - inicio.getTime())
  );

  const dia = String(fechaRandom.getDate()).padStart(2, '0');
  const mes = String(fechaRandom.getMonth() + 1).padStart(2, '0');
  const anio = String(fechaRandom.getFullYear()).slice(-2);

  return `${dia}-${mes}-20${anio}`;
}
