export let footer = 'w-full py-12 pb-56 mb-20 md:mb-6 relative max-h-[100px]'
export let list = 'w-[70%] flex flex-wrap justify-between items-start'
export let links = 'w-full'
export let socials = 'w-[90%] md:w-[95%] mx-auto flex justify-center md:justify-start items-center pt-8 md:pt-32'
export let socialLink = 'w-10 h-auto mr-2 block text-primary hover:text-current'
export let link = ''
export let copyright =
  'absolute right-[2%] max-w-[70%] pb-4 top-full translate-y-full font-extralight'

export const config = () => {
  return {
    footer,
    list,
    links,
    link,
    copyright,
    socials,
    socialLink,
  }
}
