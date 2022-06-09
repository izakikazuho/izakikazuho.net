<script>
  export let data;
</script>


<a href="{data.url}" class="h-full">
  <article class="border border-current hover:bg-purple-50 h-full">
    <figure>
      <img class="aspect-[3/2]" src={data.thumbnail} alt="">
    </figure>
    <h1 class="px-4 py-3 text-md italic font-semibold">
      {data.title}
    </h1>
  </article>
</a>
