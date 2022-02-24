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
  import Thumbnail from '$lib/components/Thumbnail/index.svelte'
import Soundcloud from '$lib/icons/social/soundcloud.svelte';
  let submission
  const submit = e => (submission = e.detail)
  const error = e => (submission = e.detail)
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

<Thumbnail
  src="https://github.githubassets.com/images/modules/signup/gc_banner_light.png"
  alt="hello"
  cursor={Soundcloud}
  className="shadow-inner shadow-secondary"
/>
