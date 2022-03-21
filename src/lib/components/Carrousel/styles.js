import { resolve } from '$lib/helpers'

export let carrouselWrapper = () => {
  return [
    {
      classes: 'h-full',
    },
  ]
}

export let carrousel = () => {
  return [
    {
      classes:
        'flex flex-nowrap transition duration-300 ease-out pb-12 overflow-x-auto no-scrollbar snap-x snap-mandatory',
    },
  ]
}

export let carrouselItem = () => {
  return [
    {
      classes:
        'cursor-pointer mx-0 snap-center snap-always',
    },
  ]
}

export let controls = () => {
  return [
    {
      classes: 'pt-12 pr-4 fixed top-[10%] right-8 flex flex-col items-end',
    },
  ]
}

export let buttons = () => {
  return [
    {
      classes: 'flex w-full justify-end items-center',
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
