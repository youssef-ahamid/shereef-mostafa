import { resolve } from '$lib/helpers'

export let button = options => {
  return [
    {
      classes:
        'transition duration-300 ease-out flex justify-center items-center group active:scale-95',
    },
    {
      on: [options.type, 'primary'],
      classes:
        'text-accent border-accent decoration-transparent active:text-accent active:border-accent active:decoration-transparent bg-secondary active:bg-secondary hover:decoration-accent hover:bg-accent hover:text-secondary',
    },
    {
      on: [options.type, 'secondary'],
      classes:
        'text-secondary border-secondary decoration-transparent bg-accent active:text-secondary active:border-secondary active:decoration-transparent active:bg-accent hover:decoration-secondary hover:bg-secondary hover:text-accent hover:border-accent',
    },
    {
      on: [options.shape, 'default'],
      classes: 'hover:scale-105 border-[3px] px-5 py-3 rounded-xl hover:border-accent',
    },
    {
      on: [options.shape, 'ghost'],
      classes:
        'bg-transparent hover:bg-transparent hover:translate-x-1 hover:text-accent py-3',
    },
    {
      on: [options.shape, 'round'],
      classes: 'hover:scale-105 border-[3px] px-5 py-3 clip-rounded bg-clip-padding',
    },
  ]
}

export let label = options => {
  return [
    {
      classes: 'leading-5',
    },
    {
      on: [options.shape, 'round'],
      classes: '',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes:
        'w-4 md:w-7 ml-3 group-hover:translate-x-2 group-active:translate-x-0 group-active:scale-[85%] transition duration-500 ease-out',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    button: resolve(button(options)),
    label: resolve(label(options)),
    icon: resolve(icon(options)),
  }
}
