import { getRandomDate } from '@/utils/date/getRandomDate';

describe('getRandomDate', () => {
  it('debe devolver un string con formato dd-mm-yyyy', () => {
    const dateStr = getRandomDate();
    expect(dateStr).toMatch(/^\d{2}-\d{2}-\d{4}$/);
  });

  it('la fecha generada debe estar dentro del rango 2021-01-01 a 2050-12-31', () => {
    const dateStr = getRandomDate();
    const [day, month, year] = dateStr.split('-').map(Number);
    const fecha = new Date(year, month - 1, day);

    const inicio = new Date(2021, 0, 1);
    const fin = new Date(2050, 11, 31);

    expect(fecha.getTime()).toBeGreaterThanOrEqual(inicio.getTime());
    expect(fecha.getTime()).toBeLessThanOrEqual(fin.getTime());
  });

  it('debe generar fechas diferentes en llamadas sucesivas', () => {
    const fechas = new Set();
    for (let i = 0; i < 10; i++) {
      fechas.add(getRandomDate());
    }
    expect(fechas.size).toBeGreaterThan(1);
  });
});
