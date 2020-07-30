import {
  Company,
  Location,
  Name,
  Picture,
  SimpleNameType,
  User,
} from '@trucos/models';
const fetch = require('node-fetch');

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

//***  Bloqueo de propiedades de objetos
const directions = {
  UP: 'Up',
  DOWN: 'Down',
  LEFT: 'Left',
  RIGHT: 'Right',
  console: {
    name: 'Commodore',
    bits: '64',
  },
} as const;

// const console = 'Amstrad';

// console = ''

// directions.UP = 'arriba'; // ?
// directions.console.name = ' Amstrad'; // ?

//*** Arreglos de solo lectura
// const consoles: readonly [string, string, string, number] = [
//   'Commodore',
//   'Amstrad',
//   'ZX Spectrum',
//   20
// ];

const consoles: ReadonlyArray<string> = ['Commodore', 'Amstrad', 'ZX Spectrum'];
const consolesA: readonly string[] = ['Commodore', 'Amstrad', 'ZX Spectrum'];

consoles[0] = 'SX-64';
consolesA[0] = 'SX-64';

//*** Identificación de tipos de datos

const status: any = true;

let controlStatus = <boolean>status;

controlStatus = 'hola';

const fullName = <Name>{};

fullName.first = 'Sergio';
fullName.last = 'Brito';
fullName.title = 'Sr.';

export async function getRemoteData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const body = await response.json();
  return body.results;
}

async function manageClients() {
  const clients = await getRemoteData<User[]>(
    'https://randomuser.me/api?results=5'
  );

  clients[0].name; // ?
}

manageClients();

//*** Números legibles en TypeScript
let quantity = 1_000_000_000;

quantity; // ?

// setInterval(() => {
//   quantity++; // ?
// }, 3_000);

//*** Tipos de datos genéricos

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let pair1: KeyPair<number, string> = { key: 1, value: 'Up' };
let pair2: KeyPair<number, boolean> = { key: 2, value: false };
