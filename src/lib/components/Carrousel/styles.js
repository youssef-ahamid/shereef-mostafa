import { resolve } from '$lib/helpers'

export let carrouselWrapper = () => {
  return [
    {
      classes: 'pt-[10%] h-[90%] flex flex-col justify-center items-end',
    },
  ]
}

export let carrousel = () => {
  return [
    {
      classes: 'flex flex-nowrap items-center odd:-translate-y-12 even:translate-y-12 -space-x-24 transition duration-300 ease-out',
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

export let controls = () => {
  return [
    {
      classes: 'max-w-[80%] md:max-w-md flex flex-col items-end pt-12',
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
    controls: resolve(controls()),
  }
}
