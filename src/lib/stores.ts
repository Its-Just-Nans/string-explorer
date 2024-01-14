import { writable } from "svelte/store";

export const myString = writable("");
export const history = writable<string[]>([]);
