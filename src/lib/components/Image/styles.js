export const imgWrapper = props => {
  return [
    {
      classes:
        'relative group w-fit hover:scale-105 transition duration-300 ease-out',
      on: true,
    },
    { classes: '', styles: '', on: props.type == 'custom' },
    {
      classes: 'h-[600px]',
      styles: '',
      on: props.type == 'custom' && props.size == 'lg',
    },
    {
      classes: 'h-[420px]',
      styles: '',
      on: props.type == 'custom' && props.size == 'md',
    },
    {
      classes: 'w-full max-w-lg',
      styles: '',
      on: props.type == 'card',
    },
    {
      classes: 'w-full max-w-lg',
      styles: '',
      on: props.type == 'overlay',
    },
  ]
}

export const imgOverlay = props => {
  return [
    {
      classes: 'transition ease-out duration-300 overflow-clip',
      on: true,
    },
    { classes: 'scale-75 max-w-[95%]', on: props.type == 'custom' },
    {
      classes:
        'w-[340px] -translate-y-24 z-50 group-hover:-translate-y-40 translate-x-24 group-hover:translate-x-40',
      on: props.type == 'custom' && props.size == 'lg',
    },
    {
      classes:
        'w-68 -translate-y-12 group-hover:-translate-y-20 translate-x-12 group-hover:translate-x-20',
      on: props.type == 'custom' && props.size == 'md',
    },
    {
      classes:
        'absolute inset-0 rotate-[-12deg] transform group-hover:rotate-[-6deg] z-[-1] max-w-[95%]',
      styles: `background-image: url(${props.src})`,
      on: props.type == 'card',
    },
    {
      classes:
        'absolute inset-0 scale-105 z-50 bg-gradient-to-b from-secondary via-transparent to-secondary',
      on: props.type == 'overlay',
    },
  ]
}

export const img = props => {
  return [
    {
      classes: 'h-full object-cover inline-block',
      styles: `clip-path: url('#window-${props.size}');`,
      on: props.type == 'custom',
    },
    {
      classes: 'w-full max-w-[520px]',
      styles: '',
      on: props.size == 'lg' && props.type == 'custom',
    },
    {
      classes: 'w-[90%] max-w-[320px]',
      styles: '',
      on: props.size == 'md' && props.type == 'custom',
    },
    {
      classes: 'max-w-[90%] mx-auto md:max-w-lg z-10',
      styles: '',
      on: props.type == 'card',
    },
    {
      classes: 'mx-auto md:max-w-lg',
      styles: '',
      on: props.type == 'overlay',
    },
  ]
}
