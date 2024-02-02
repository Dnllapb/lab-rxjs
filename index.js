import { Observable, of } from 'rxjs/esm';

const numbers = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

const oddNumbers = numbers
  .pipe(
    // Filtra la secuencia según la condición de que el número sea impar
    filter((number) => number % 2 === 1),
    // Convierte los números a cadenas
    map((number) => `${number}`)
  );

oddNumbers.subscribe((number) => console.log(number));