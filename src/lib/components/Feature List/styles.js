import { resolve } from '$lib/helpers'

export let list = options => {
  return [
    {
      classes: 'w-full py-8',
    },
    {
      on: [options.grid, true],
      classes: 'lg:grid lg:grid-cols-2 lg:place-items-center'
    }
  ]
}

export let feature = options => {
  return [
    {
      classes: 'overflow-visible',
    },
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
