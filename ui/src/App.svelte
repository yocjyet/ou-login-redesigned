<script lang="ts">
  import { onMount } from 'svelte';
  import PageSwitch from './lib/PageSwitch.svelte';
  import Main from './lib/Main.svelte';

  let screen = 0;

  function displayForm(screen) {
    for (let i = 0; i < document.forms.length; i++) {
      document.forms[i].style.display = i === screen ? 'contents' : 'none';
    }
  }

  onMount(() => {
    displayForm(screen);
  });

  $: displayForm(screen);

  $: if (screen === 2) {
    document.body.classList.add('error');
  } else {
    document.body.classList.remove('error');
  }
</script>

<PageSwitch bind:screen />

<Main />
