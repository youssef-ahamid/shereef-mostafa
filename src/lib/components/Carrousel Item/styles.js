import { resolve } from '$lib/helpers'

export let carrouselItemWrapper = options => {
  return [
    {
      classes:
        'absolute inset-x-0 flex py-12 pt-20 md:pt-12 flex-wrap sm:flex-nowrap items-start justify-center transition duration-500 ease-out w-full mx-2',
    },
    {
      on: [options.previewed, true],
      classes: 'opacity-100 scale-100 delay-300',
    },
    {
      on: [options.previewed, false],
      classes: 'opacity-0 scale-75',
    },
  ]
}

export let infoContainer = options => {
  return [
    {
      classes:
        'transition duration-500 z-50 ease-out min-w-[100%] pl-3',
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
        'min-w-[50px] md:max-w-[200px] min-h-[10px] max-w-[150px] mb-1 -mt-3',
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
