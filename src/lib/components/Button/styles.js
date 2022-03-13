import { resolve } from '$lib/helpers'

export let button = options => {
  return [
    {
      classes:
        'transition duration-300 ease-out flex justify-center items-center'
    },
    {
      on: [options.type, 'primary'],
      classes: 'text-accent border-accent decoration-transparent bg-secondary hover:decoration-accent hover:bg-accent hover:text-secondary',
    },
    {
      on: [options.type, 'secondary'],
      classes: 'text-secondary border-secondary decoration-transparent bg-accent hover:decoration-secondary hover:bg-secondary hover:text-accent hover:border-accent',
    },
    {
      on: [options.shape, 'default'],
      classes: ' border-[3px] px-5 py-3 rounded-xl ',
    },
    {
      on: [options.shape, 'ghost'],
      classes: 'bg-transparent hover:bg-transparent hover:text-accent underline underline-offset-4 px-5 py-3',
    },
    {
      on: [options.shape, 'round'],
      classes: 'border-[3px] px-5 py-3 clip-rounded bg-clip-padding',
    },
  ]
}

export let label = options => {
  return [
    {
      classes:
        'leading-5 font-bold capitalize font-mono',
    },
    {
      on: [options.shape, 'round'],
      classes: '',
    }
  ]
}

export let icon = options => {
  return [
    {
      classes:
        'w-7 ml-3',
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
