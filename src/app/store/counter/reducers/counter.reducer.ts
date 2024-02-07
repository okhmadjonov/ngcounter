import { createReducer, on } from '@ngrx/store';
import { initialstate } from '../state/counter.state';
import { decrement, increment, reset } from '../actions/counter.actions';

export const counterReducer = createReducer(
  initialstate,
  on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
  on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
  on(reset, (state) => ({ ...state, counter: 0 }))
);
