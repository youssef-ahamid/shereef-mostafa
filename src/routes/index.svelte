<script>
  // import Stepper from '$lib/components/Stepper/index.svelte'
  import Title from '$lib/components/Title/index.svelte'
  import Image from '$lib/components/Image/index.svelte'
  // import TextInput from '$lib/components/Text Input/index.svelte'
  // import Arrow from '$lib/icons/arrow.svelte'

  // let value = ''
  // let value2 = ''


</script>

<!-- <Stepper steps={5} direction="horizontal" /> -->
<div class="py-20 w-full">
  <Title>bio</Title>
  <Image 
    type="custom" 
    alt="hello from the alt world" 
    src="https://i.ndtvimg.com/i/2015-09/grapes_625x350_61443376353.jpg" 
    clip
  />
</div>



<!-- <div
  class="flex justify-around items-center flex-wrap w-screen h-screen"
>
  <h5>Ajgjrmrfk rjjrgg</h5>
  <h3>Ta3alaaneekak</h3>
  <h4>YabnelmarayaFager</h4>
  <Button label="walnuts arfeafe great" shape="round" />
  <Button
    label="walnuts arfeafe great"
    shape="round"
    type="secondary"
    icon={Arrow}
  />
  <Button label="walnuts arfeafe great" shape="ghost" />

  <Button label="walnuts arfeafe great" />
  <Button label="walnuts arfeafe great" type="secondary" />

  <TextInput
    label="hamada"
    type="text area"
    bind:value
    validations={[{ type: 'required', error: 'required field' }]}
  />

  <TextInput
    label="hamada"
    type="text"
    bind:value2
    validations={[{ type: 'required', error: 'required field' }]}
  />
</div> -->
