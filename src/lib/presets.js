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



import TextInput from '$lib/components/Text Input/index.svelte'

export const contact = {
  inputs: [
    {
      component: TextInput,
      data: {
        label: 'name',
        value: '',
        validations: [
          { type: 'required', error: 'required field' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'email',
        value: '',
        validations: [
          { type: 'required', error: 'required field' },
          { type: 'email', error: 'must be a valid email' },
        ],
      },
    },
    {
      component: TextInput,
      data: {
        label: 'phone',
        value: '',
        validations: [
          { type: 'required', error: 'required field' },
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
          { type: 'required', error: 'required field' },
        ],
        type: 'text area',
      },
    },
  ],
  button: { label: 'send message', shape: 'full' },
}

export const profile = {
  phone: '+201005584543',
  email: 'am8594@nyu.edu',
}
