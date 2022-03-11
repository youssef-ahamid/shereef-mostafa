import spotify from '$lib/icons/social/spotify.svelte'
import soundcloud from '$lib/icons/social/soundcloud.svelte'
import anghami from '$lib/icons/social/anghami.svelte'

export const socialLinks = [
  {
    link: '/hamada1',
    icon: spotify,
  },
  {
    link: '/hamada2',
    icon: soundcloud,
  },
  {
    link: '/hamada3',
    icon: anghami,
  },
]

import Thumbnail from '$lib/components/Thumbnail/index.svelte'
export const bio = [
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
]

export const production = [
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
]

export const design = [
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    title: 'cairo olympics',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
  {
    thumbnail: {
      component: Thumbnail,
      data: {
        alt: 'hello',
        src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
      },
    },
    text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
    image:
      'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
  },
]

import TextInput from '$lib/components/Text Input/index.svelte'

export const contact = {
  inputs: [
    {
      component: TextInput,
      data: {
        label: 'name',
        value: '',
        validations: [
          { type: 'required', error: 'required field :(' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'email',
        value: '',
        validations: [
          { type: 'required', error: 'required field :(' },
          { type: 'email', error: 'must be a valid email 🧐' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'phone',
        value: '',
        validations: [
          { type: 'required', error: 'required field :(' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'company',
        value: '',
      },
    },
    {
      component: TextInput,
      data: {
        label: 'message',
        value: '',
        validations: [
          { type: 'required', error: 'required field :(' },
        ],
        type: 'text area',
      },
    },
  ],
  button: { label: 'send message', shape: 'full' },
}

export const profile = {
  phone: '+201200525233',
  email: 'youssef@tutoruu.com',
}
