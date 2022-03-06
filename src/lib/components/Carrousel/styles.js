import { resolve } from '$lib/helpers'

export let carrouselWrapper = () => {
  return [
    {
      classes: '',
    },
  ]
}

export let carrousel = () => {
  return [
    {
      classes: 'flex flex-nowrap items-center overflow-x-scroll',
    },
  ]
}

export let carrouselItem = () => {
  return [
    {
      classes: '',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    carrouselWrapper: resolve(carrouselWrapper()),
    carrousel: resolve(carrousel()),
    carrouselItem: resolve(carrouselItem()),
  }
}
