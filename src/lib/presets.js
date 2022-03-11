import facebook from '$lib/icons/social/facebook.svelte'
import linkedin from '$lib/icons/social/linkedin.svelte'

export const socialLinks = [
  {
    link: 'https://www.facebook.com/ahmed.mitry',
    icon: facebook,
  },
  {
    link: 'https://eg.linkedin.com/in/ahmed-mitry-56b219143',
    icon: linkedin,
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
