import { resolve } from '$lib/helpers'

export let label = options => {
  return [
    {
      classes: 'font-montserrat py-1 ',
    },
  ]
}

export let input = options => {
  return [
    {
      classes:
        'outline-none appearance-none p-4 pb-1 transition duration-300 ease-out border-b-4 bg-primary bg-opacity-5 focus:bg-opacity-25 text-primary focus:text-accent rounded w-full',
    },
    {
      on: [options.clean, false],
      classes: 'border-error bg-opacity-[15%] animate-wiggle',
    },
    {
      on: [options.clean, true],
      classes: 'border-primary focus:border-accent',
    },
    {
      on: [options.type, 'text area'],
      classes: 'resize-none h-28 md:h-40 w-full min-w-[100%] block',
    },
  ]
}

export let name = options => {
  return [
    {
      classes: 'text-primary capitalize py-0.5',
    },
  ]
}

export let error = options => {
  return [
    {
      classes: 'text-error font-bold',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    label: resolve(label(options)),
    input: resolve(input(options)),
    name: resolve(name(options)),
    error: resolve(error(options)),
  }
}
