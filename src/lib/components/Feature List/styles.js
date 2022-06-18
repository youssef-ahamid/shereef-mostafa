import { resolve } from '$lib/helpers'

export let list = options => {
  return [
    {
      classes: 'w-full py-8',
    },
    {
      on: [options.grid, true],
      classes: 'grid grid-cols-2 lg:grid-cols-3 place-items-center'
    }
  ]
}

export let feature = options => {
  return [
    {
      classes: 'overflow-visible',
    },
    {
      on: [options.grid, true],
      classes: 'md:scale-[60%]'
    }
  ]
}

let options
export const config = props => {
  options = props
  return {
    list: resolve(list(options)),
    feature: resolve(feature(options)),
  }
}
