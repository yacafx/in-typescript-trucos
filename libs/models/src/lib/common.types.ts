import { Name } from './user.interfaces';

export type DirectionType = 'up' | 'down' | 'left' | 'right';

export type SimpleNameType = Omit<Name, 'title'>;
