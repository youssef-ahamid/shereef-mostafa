import { resolve } from '$lib/helpers'

export let section = options => {
  return [
    {
      classes: 'py-4 md:py-8',
    },
  ]
}

export let content = options => {
  return [
    {
      on: [options.noContain, false],
      classes: 'md:max-w-[90%] lg:max-w-[80%] mx-auto overflow-visible',
    },
  ]
}

export let ctaContainer = options => {
  return [
    {
      classes: 'w-full flex justify-center',
    },
  ]
}

export const config = props => {
  return {
    section: resolve(section(props)),
    content: resolve(content(props)),
    ctaContainer: resolve(ctaContainer(props)),
  }
}
