import {
  Company,
  Location,
  Picture,
  SimpleNameType,
  User,
} from '@trucos/models';

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
  lastName = '';
  age: number | undefined | null;
  location!: Partial<Location>;

  constructor() {
    this.name = 'yacafx';
  }

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

const user: Required<User> = {
  gender: '',
  name: {},
  location: {
    street: {
      name: 'Periférico',
      number: 30,
    },
  },
  email: '',
  login: {},
  dob: {},
  registered: {},
  phone: '',
  cell: '',
  id: {},
  picture: {},
  nat: '',
};

const name: SimpleNameType = {
  first: 'Sergio',
  last: 'Brito',
};

const userPhoto: Readonly<Picture> = {
  large: 'https://via.placeholder.com/300.png',
  medium: 'https://via.placeholder.com/150.png',
  thumbnail: 'https://via.placeholder.com/50.png',
};

// userPhoto.thumbnail = 'https://via.placeholder.com/500.png';

function getStreetNumber(client: User | Company): number | string {
  if (
    client.location?.street?.number &&
    typeof client.location?.street?.number === 'number' &&
    'location' in client
  ) {
    return client.location?.street?.number;
  } else {
    return 'Sin número';
  }
}

getStreetNumber(user); // ?

// tslint:disable: prefer-const
// tslint:disable: no-unused-expression

let value: unknown;

let value2: any = 'true';

let flag: boolean = value;

typeof flag; // ?

// *** Type Guards *** //
// *** Tipos primitivos (typeof): number, string, boolean y symbol
// *** Por instancia (instanceof): variable creada a través de un constructor
// *** Por tipo de propiedad (in)

function notify(persona: Person) {
  if (persona instanceof Person) {
  }
}
