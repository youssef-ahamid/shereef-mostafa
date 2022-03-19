import { resolve } from '$lib/helpers'

export let label = options => {
  return [
    {
      classes:
        ' py-1 ',
    }
  ]
}

export let input = options => {
  return [
    {
      classes:
        'outline-none appearance-none px-1 py-2 transition duration-300 ease-out border-b-4 bg-primary bg-opacity-5 focus:bg-opacity-25 text-primary focus:text-accent rounded min-w-[160px] w-full',
    },
    {
      on: [options.clean, false],
      classes: 'border-error bg-opacity-[15%]'
    },
    {
      on: [options.clean, true],
      classes: 'border-primary focus:border-accent'
    },
    {
      on: [options.type, 'text area'],
      classes: 'h-24  min-w-[160px] resize-none'
    }
  ]
}

export let name = options => {
  return [
    {
      classes:
        'text-primary capitalize py-0.5',
    },
  ]
}

export let error = options => {
  return [
    {
      classes:
        'text-error font-bold',
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
