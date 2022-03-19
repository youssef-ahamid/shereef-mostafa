import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes: 'flex flex-wrap md:flex-nowrap justify-between w-full'
    },
    {
      on: [options.reverse, true],
      classes: 'flex-col items-end md:items-start md:flex-row-reverse',
    },
    {
      on: [options.reverse, false],
      classes: 'flex-col items-start md:flex-row',
    },
  ]
}

export let left = options => {
  return [
    {
      classes: 'w-full md:w-1/2 flex md:justify-center'
    },
    {
      on: [options.reverse, true],
      classes: 'justify-end',
    },
    {
      on: [options.reverse, false],
      classes: 'justify-start',
    },
  ]
}

export let right = options => {
    return [
      {
        classes: 'w-full md:w-1/2 px-6'
      },
    ]
  }

export let image = options => {
  return [
    {
      classes:
        'h-6 w-auto mr-3',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    feature: resolve(feature(options)),
    left: resolve(left(options)),
    right: resolve(right(options)),
    image: resolve(image(options)),
  }
}
