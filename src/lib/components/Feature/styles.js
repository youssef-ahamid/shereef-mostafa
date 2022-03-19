import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes: 'flex flex-wrap md:flex-nowrap justify-between w-full flex-col'
    },
    {
      on: [options.reverse, true],
      classes: 'items-end md:items-start md:flex-row-reverse',
    },
    {
      on: [options.reverse, false],
      classes: 'items-start md:flex-row',
    },
  ]
}

export let left = options => {
  return [
    {
      classes: 'w-1/2 flex justify-center'
    },
  ]
}

export let right = options => {
    return [
      {
        classes: 'w-1/2 px-6'
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
