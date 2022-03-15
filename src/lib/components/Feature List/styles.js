import { resolve } from '$lib/helpers'

export let list = options => {
  return [
    {
      classes: ''
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
