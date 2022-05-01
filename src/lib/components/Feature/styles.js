import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        'flex flex-nowrap w-full max-w-6xl mx-auto my-6 lg:my-12 relative lg:bg-gradient-to-t lg:from-secondary overflow-visible',
    },
    {
      on: [options.reverse, true],
      classes:
        'flex-col items-end lg:items-start lg:flex-row-reverse',
    },
    {
      on: [options.reverse, false],
      classes: 'flex-col items-start lg:flex-row',
    },
  ]
}

export let content = options => {
  return [
    {
      classes: 'lg:w-[450px] flex flex-col items-start'
    },
    {
      on: [options.reverse, true],
      classes:
        'lg:absolute lg:bottom-4 lg:right-8 z-50',
    },
    {
      on: [options.reverse, false],
      classes: 'lg:absolute lg:bottom-4 lg:left-4 z-50',
    },
  ]
}

export let left = options => {
  return [
    {
      classes: 'w-full lg:w-1/2 flex overflow-visible',
    },
    {
      on: [options.reverse, true],
      classes: 'justify-end items-end lg:justify-end',
    },
    {
      on: [options.reverse, false],
      classes: 'justify-start lg:justify-start',
    },
  ]
}

export let right = options => {
  return [
    {
      classes: 'w-full lg:min-w-[50%] lg:max-w-[60%] mx-auto p-6 flex flex-col',
    },
  ]
}

export let image = options => {
  return [
    {
      classes: 'h-10 inline-block w-auto mr-3',
    },
  ]
}

let options
export const config = props => {
  options = props
  return {
    feature: resolve(feature(options)),
    left: resolve(left(options)),
    right: resolve(right(options)),
    image: resolve(image(options)),
    content: resolve(content(options)),
  }
}
