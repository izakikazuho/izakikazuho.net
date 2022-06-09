<script>
import Card from "../molecules/Card.svelte";

  export let items=[]
</script>
<ul class="grid grid-cols-3 gap-6 w-full">
  {#each items as item}
    <li class="h-full">
      <Card data={item}></Card>
    </li>
  {/each}
</ul>
