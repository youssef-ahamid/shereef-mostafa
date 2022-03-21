import { resolve } from '$lib/helpers'

export let carrouselWrapper = () => {
  return [
    {
      classes: 'h-full w-full overflow-x-hidden',
    },
  ]
}

export let carrousel = () => {
  return [
    {
      classes:
        'flex flex-nowrap transition duration-300 ease-out pb-12 justify-center items-center',
    },
  ]
}

export let carrouselItem = () => {
  return [
    {
      classes:
        'mx-auto',
    },
  ]
}

export let controls = () => {
  return [
    {
      classes: 'pt-12 px-8 fixed bottom-[5%] md:top-[10%] md:bottom-auto left-0 right-0 md:right-8 flex flex-col md:items-end md:justify-end items-center center',
    },
  ]
}

export let buttons = () => {
  return [
    {
      classes: 'flex w-full justify-between md:justify-end items-center',
    },
  ]
}

export let stepper = () => {
  return [
    {
      classes: 'w-full min-w-[300px] mx-auto flex justify-center md:justify-end',
    },
  ]
}

export const config = props => {
  return {
    carrouselWrapper: resolve(carrouselWrapper()),
    carrousel: resolve(carrousel()),
    carrouselItem: resolve(carrouselItem()),
    controls: resolve(controls()),
    buttons: resolve(buttons()),
    stepper: resolve(stepper()),
  }
}
