import { Action, createReducer, on } from "@ngrx/store";
import { decrementar, incrementar } from "./contador.actions";

export const initialState =20;

//SEGUN LA DOCUMENTACIOND DE NGRX
export const contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
);
