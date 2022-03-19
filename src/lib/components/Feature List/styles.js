import { resolve } from '$lib/helpers'

export let list = options => {
  return [
    {
      classes: 'w-full py-12'
    },
  ]
}

export let feature = options => {
    return [
      {
        classes: ''
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
