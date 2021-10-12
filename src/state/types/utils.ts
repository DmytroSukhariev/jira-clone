import { Id } from "types";

export type EntitiesState<T> = { entities: Record<Id, T> };

export type LoadingState = { loading: boolean };

export type LoadingEntitiesState<T> = LoadingState & EntitiesState<T>;
