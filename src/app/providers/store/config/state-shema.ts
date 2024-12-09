import { CounterSchema } from 'entities/counter';
import { NotesSchema } from 'entities/notes';

export interface StateSchema {
  counter: CounterSchema;
  notes: NotesSchema;
}

export interface ThunkConfig<T = string> {
  rejectValue: T;
  state: StateSchema;
}
