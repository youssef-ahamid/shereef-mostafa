<script>
  import Button from '$lib/components/Button/index.svelte'
  import TextInput from '$lib/components/Text Input/index.svelte'
  import Arrow from '$lib/icons/arrow.svelte'

  let value = ''
  let value2 = ''
</script>

<div
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
</div>
