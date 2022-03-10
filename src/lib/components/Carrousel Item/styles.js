import { resolve } from '$lib/helpers'

export let carrouselItemWrapper = options => {
  return [
    {
      classes:
        'inline-flex py-12 flex-wrap sm:flex-nowrap items-start scale-75 justify-center transition duration-500 ease-out w-80 md:w-[500px] mx-2',
    },
    {
      on: [options.previewed, true],
      classes: 'opacity-100 z-50',
    },
    {
      on: [options.previewed, false],
      classes: 'opacity-50 z-0',
    },
  ]
}

export let infoContainer = options => {
  return [
    {
      classes:
        'transition duration-500 z-50 ease-out min-w-[100%] md:translate-y-32 md:-translate-x-32 pl-3',
    },
    {
      on: [options.previewed, true],
      classes: 'opacity-100',
    },
    {
      on: [options.previewed, false],
      classes: 'opacity-0',
    },
  ]
}

export let logo = options => {
  return [
    {
      classes:
        'min-w-[50px] md:max-w-[200px] min-h-[10px] max-w-[150px] brightness-[5000%] mb-1 -mt-3',
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
  }
}
