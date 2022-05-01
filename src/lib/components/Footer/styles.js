export let footer = 'w-full py-12 pb-24 relative'
export let list = 'w-[60%] px-8 pt-5 md:float-right flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-start md:-mt-32'
export let links = 'w-full'
export let socials = 'w-[90%] md:w-[95%] mx-auto flex justify-center md:justify-start items-center pt-12'
export let socialLink = 'w-10 h-auto mr-2 block text-primary hover:text-current'
export let link = 'px-2 px-20'
export let logo = 'block w-32 overflow-visible ml-[5%] py-4 md:w-44 group text-primary hover:text-accent origin-center'
export let logoInner = 'group-hover:scale-95 group-active:scale-90 origin-center'
export let logoOuter = 'group-hover:scale-105 origin-center group-active:scale-110'
export let copyright =
  'absolute right-[2%] max-w-[70%] bottom-0 font-extralight'

export const config = () => {
  return {
    footer,
    list,
    links,
    link,
    copyright,
    socials,
    socialLink,
    logo,
    logoInner,
    logoOuter,
  }
}
