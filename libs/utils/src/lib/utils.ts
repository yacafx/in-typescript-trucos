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
  name: string;
  lastName: string;

  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person = new Person();
person.name = 'Sergio';
person.lastName = 'Brito';
person.getFullName();
