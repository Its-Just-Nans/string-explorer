import { writable } from "svelte/store";

export const myString = writable("é");
export const history = writable<string[]>([]);
