import { resolve } from '$lib/helpers'

export let list = options => {
  return [
    {
      classes:
        'flex flex-wrap justify-between w-[240px] ml-6 md:ml-10 md:w-80',
    },
    {
      on: [options.flex, true],
      classes: "w-80 md:w-[700px]",
    }
  ]
}

export let link = options => {
  return [
    {
      classes:
        "my-2 md:my-4 md:pl-10 pl-6 before:text-5xl relative leading-0 before:w-12 before:-ml-6 before:origin-center md:before:-ml-10 before:block before:absolute before:top-1/2 before:-translate-y-1/2 md:before:text-7xl before:content-['•_'] transition duration-300 ease-out before:transition before:duration-200 before:ease-out",
    },
    {
      classes: 'text-primary before:text-primary before:scale-100',
      on: [options.active, true],
    },
    {
      classes:
        'text-white before:text-transparent before:scale-0 hover:text-primary hover:before:text-primary hover:before:scale-100',
      on: [options.active, false],
    },
  ]
}

export let sublink = options => {
  return [
    {
      classes:
        'w-72 md:w-80 pb-1 underline truncate decoration-2 underline-offset-4 hover:text-primary hover:decoration-primary transition duration-300 ease-out',
    },
  ]
}

export let activeSub = options => {
  return [
    {
      classes: 'text-primary decoration-primary',
    },
  ]
}

export let inactiveSub = options => {
  return [
    {
      classes: 'text-white decoration-transparent',
    },
  ]
}

export const config = props => {
  return {
    list: resolve(list(props)),
    link: resolve(link(props)),
    sublink: resolve(sublink(props)),
    activeSub: resolve(activeSub(props)),
    inactiveSub: resolve(inactiveSub(props)),
  }
}
