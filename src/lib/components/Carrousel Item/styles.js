import { resolve } from '$lib/helpers'

export let carrouselItemWrapper = options => {
  return [
    {
      classes:
        'flex flex-wrap sm:flex-nowrap items-start scale-75 justify-center transition duration-500 ease-out',
    },
    {
      on: [options.previewed, true],
      classes: 'opacity-100',
    },
    {
        on: [options.previewed, false],
        classes: 'opacity-50',
     },
  ]
}

export let infoContainer = options => {
    return [
      {
        classes:
          'sm:-ml-20 sm:translate-y-40 z-50 min-w-[300px] md:min-w-[500px] lg:min-w-[700px] max-w-[300px] md:max-w-[500px] lg:max-w-[700px]',
      }
    ]
  }

  export let logo = options => {
    return [
      {
        classes:
          'min-w-[50px] md:max-w-[200px] min-h-[10px] max-w-[150px] brightness-[5000%] mb-1 -mt-3',
      }
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
