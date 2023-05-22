<script lang="ts" context="module">
  export const SCREENS = {
    LOGIN: 0,
    AUTH_CODE: 1,
    ERROR: 2,
  };
</script>

<script lang="ts">
  export let screen = 0;
</script>

<select bind:value={screen}>
  {#each Object.keys(SCREENS) as screenName}
    <option value={SCREENS[screenName]}>{screenName}</option>
  {/each}
</select>
