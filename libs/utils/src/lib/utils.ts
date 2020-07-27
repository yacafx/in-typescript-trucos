import { Location, Picture } from '@trucos/models';

export function utils(): string {
  return 'utils';
}

/**
 * Método para saludar al usuario.
 * @param name nombre del usuario
 */
export function greet(name: string): string {
  return `Hola ${name}`;
}

export class Person {
  readonly name: string;
  lastName: string;
  age: number | undefined | null;
  location: Partial<Location>;

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person();
// person.name = 'Sergio';
person.lastName = 'Brito';
person.age = null;

person.location = {
  state: 'Tabasco',
  country: 'México',
};

person.getFullName();

const userPhoto: Readonly<Picture> = {
  large: 'https://via.placeholder.com/300.png',
  medium: 'https://via.placeholder.com/150.png',
  thumbnail: 'https://via.placeholder.com/50.png',
};

// userPhoto.thumbnail = 'https://via.placeholder.com/500.png';
