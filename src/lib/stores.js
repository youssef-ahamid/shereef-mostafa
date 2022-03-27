import { writable } from 'svelte/store'

export const number = writable(0)
export const scroll = writable(true)

export const contactConfig = writable({
  phone: '+201200525233',
  location: 'https://goo.gl/maps/A2YC5MZU65mLVm58A',
  soundcloud: '',
  spotify: '',
  anghami: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  siteOwner: 'Youssef Abdelhami', 
  siteName: 'shereefmostafa.site', 
  siteEmail: 'youssef@getbrewsy.com',
  thankYou: true,
  copyright: 'forever by samurai software house'
})
export const featuredProjects = writable([])

export const navlinks = writable([
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/projects',
    text: 'projects',
  },
  {
    to: '/contact',
    text: 'contact',
  },
])
