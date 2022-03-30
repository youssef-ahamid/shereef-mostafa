import { resolve } from '$lib/helpers'

export let carrouselItemWrapper = options => {
  return [
    {
      classes:
        'absolute overflow-hidden inset-0 flex flex-wrap md:flex-nowrap items-center justify-center transition duration-500 ease-out w-full',
    },
    {
      on: [options.previewed, true],
      classes: 'opacity-100 delay-1000',
    },
    {
      on: [options.previewed, false],
      classes: 'opacity-0',
    },
  ]
}

export let infoContainer = options => {
  return [
    {
      classes:
        'overflow-hidden -mt-80 md:mt-0 transition origin-bottom-left space-y-2 delay-200 duration-400 z-50 ease-out flex flex-col w-[80%] md:pl-[10%] justify-center md:w-1/2 pl-3',
    },
    {
      on: [options.previewed, true],
      classes: 'transform-none',
    },
    {
      on: [options.previewed, false],
      classes: 'translate-y-4 md:translate-y-1 md:translate-x-12',
    },
  ]
}

export let thumbnail = options => {
  return [
    {
      classes:
        'w-full md:w-1/3 transition duration-300 z-50 ease-out',
    },
    {
      on: [options.previewed, true],
      classes: 'transform-none',
    },
    {
      on: [options.previewed, false],
      classes: '-translate-y-4 md:translate-y-1 md:-translate-x-12',
    },
  ]
}

export let logo = options => {
  return [
    {
      classes: 'h-10 w-auto block mr-3',
    },
  ]
}

export let logos = options => {
  return [
    {
      classes: 'flex items-center',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    carrouselItemWrapper: resolve(carrouselItemWrapper(options)),
    infoContainer: resolve(infoContainer(options)),
    logo: resolve(logo(options)),
    logos: resolve(logos(options)),
    thumbnail: resolve(thumbnail(options)),
  }
}
