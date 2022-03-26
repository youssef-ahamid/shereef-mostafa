import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        'flex flex-nowrap w-full max-w-6xl mx-auto my-12 md:my-28 lg:my-44',
    },
    {
      on: [options.reverse, true],
      classes:
        'flex-col items-end md:items-start md:flex-row-reverse',
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
      classes: 'w-full md:w-1/2 flex ',
    },
    {
      on: [options.reverse, true],
      classes: 'justify-end items-end md:justify-end',
    },
    {
      on: [options.reverse, false],
      classes: 'justify-start md:justify-start',
    },
  ]
}

export let right = options => {
  return [
    {
      classes: 'w-full md:w-1/2 p-6 md:px-20 flex flex-col',
    },
  ]
}

export let image = options => {
  return [
    {
      classes: 'h-6 w-auto mr-3',
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
