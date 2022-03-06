<script>
  // import TextInput from '$lib/components/Text Input/index.svelte'
  // import Form from '$lib/components/Form/index.svelte'
  // let inputs = [

  //     {
  //         component: TextInput,
  //         data: {
  //             type: 'text',
  //             label: 'hamad yeksab',
  //             validations: [
  //                 { type: 'required', error: 'required field' },
  //             ],
  //             value: ''
  //         }
  //     },
  //     {
  //         component: TextInput,
  //         data: {
  //             type: 'text',
  //             label: 'hamad yeksab',
  //             value: ''
  //         }
  //     },
  //     {
  //         component: TextInput,
  //         data: {
  //             type: 'text',
  //             label: 'hamad yel3ab',
  //             trim: true,
  //             long: true,
  //             validations: [
  //                 { type: 'required', error: 'required field' },
  //                 { type: 'email', error: 'must be an email' },
  //             ],
  //             value: ''
  //         }
  //     },
  //     {
  //         component: TextInput,
  //         data: {
  //             type: 'text area',
  //             label: 'hamad yel3ab',
  //             trim: true,
  //             long: true,
  //             value: ''
  //         }
  //     },
  // ]
  import Carrousel from '$lib/components/Carrousel/index.svelte'
  import Thumbnail from '$lib/components/Thumbnail/index.svelte'
  import Soundcloud from '$lib/icons/social/soundcloud.svelte'
  let thumbnail = {
    component: Thumbnail,
    data: {
      alt: 'hello',
      cursor: Soundcloud,
      src: 'https://github.githubassets.com/images/modules/signup/gc_banner_light.png',
    },
  }
  let items = [
    {
      thumbnail,
      text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
      title: 'cairo olympics',
      image:
        'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
    },
    {
      thumbnail,
      text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
      title: 'cairo olympics',
      image:
        'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
    },
    {
      thumbnail,
      text: 'Ahmed Mitry is an Egyptian musician, producer, and sound designer. Born in 1998, Mitry started with learning both instruments guitar & piano at the age of 7 until he decided to take his skill to the next level by taking courses in Music Production & Sound Engineering.',
      title: 'cairo olympics',
      image:
        'https://logos-download.com/wp-content/uploads/2016/05/Allianz_logo_logotype.png',
    },
  ]
  console.log(items)
</script>

<!-- <Form 
    {inputs}
    button={{
        label: 'submit',
        shape: 'full',
        type: 'secondary'
    }}
    on:submit={submit}
    on:error={error}
/> -->

<!-- <Thumbnail
  src="https://github.githubassets.com/images/modules/signup/gc_banner_light.png"
  alt="hello"
  cursor={Soundcloud}
  className="shadow-inner shadow-secondary"
/> -->
<Carrousel {items} />
