import { writable } from 'svelte/store'

export const number = writable(0)
export const scroll = writable(true)
export const user = writable({})

export const navlinks = writable([])
