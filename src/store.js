import { writable } from 'svelte/store';

export const items = writable([
    {
        id: 1,
        title: "todo",
        enable: true
    },
    {
        id: 2,
        title: "todo2",
        enable: true
    } 
]);
