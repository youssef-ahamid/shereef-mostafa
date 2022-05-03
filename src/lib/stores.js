import { writable } from 'svelte/store'

import soundcloud from '$lib/icons/social/soundcloud.svelte'
import spotify from '$lib/icons/social/spotify.svelte'
import anghami from '$lib/icons/social/anghami.svelte'
import facebook from '$lib/icons/social/facebook.svelte'
import instagram from '$lib/icons/social/instagram.svelte'
import linkedin from '$lib/icons/social/linkedin.svelte'
import twitter from '$lib/icons/social/twitter.svelte'

export const number = writable(0)
export const scroll = writable(true)

export const user = writable({
  name: '',
  email: '',
  phone: '',
  company: '',
  timeout: -1,
})

export const contactConfig = writable({
  phone: '+201200525233',
  location: 'https://goo.gl/maps/A2YC5MZU65mLVm58A',
  soundcloud: '',
  spotify: '',
  anghami: '',
  twitter: '',
  instagram: '',
  facebook: '',
  linkedin: '',
  siteOwner: 'Shereef Mostafa',
  siteName: 'shereefmostafa.com',
  siteEmail: 'shereefmostafa@gmail.com',
  thankYou: true,
  copyright: 'copyright forever by samurai software house',
})

export const featuredProjects = writable([])

export const socialLinks = writable([
  {
    name: 'soundcloud',
    to: '',
    component: soundcloud,
    redirect: true,
  },
  {
    name: 'spotify',
    to: '',
    component: spotify,
    redirect: true,
  },
  {
    name: 'anghami',
    to: '',
    component: anghami,
    redirect: true,
  },
  {
    name: 'instagram',
    to: '',
    component: instagram,
    redirect: true,
  },
  {
    name: 'facebook',
    to: '',
    component: facebook,
    redirect: true,
  },
  {
    name: 'linkedin',
    to: '',
    component: linkedin,
    redirect: true,
  },
  {
    name: 'twitter',
    to: '',
    component: twitter,
    redirect: true,
  },
])

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


