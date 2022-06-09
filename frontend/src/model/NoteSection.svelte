<script>
  import {XMLParser, XMLBuilder} from 'fast-xml-parser'
  import {onMount} from 'svelte'
  import CardList from '../components/organisms/CardList.svelte';

  const noteUrl = 'https://us-central1-izakikazuho-net.cloudfunctions.net/api/all'
  let articles = [];

  const fetchData = async () => {
    return await fetch(noteUrl)
      .then(res => res.text())
  }

  onMount(async () => {
    // fetch note rss
    const xml = await fetchData()

    // parse xml data
    const parser = new XMLParser();
    const parsedData = parser.parse(xml)
    articles = parsedData.rss.channel.item

    articles = articles.map(article => {
      return {
        thumbnail: article['media:thumbnail'],
        title: article['title'],
        url: article['link']
      }
    })
  })
</script>

<section>
  <h1 class="text-3xl font-medium section-heading">blog</h1>
  <div class="mt-4">
    <CardList items={articles}></CardList>
  </div>
</section>

<style lang="scss">
  .section-heading {
    display: flex;
    align-items: center;
    @apply gap-4;
    &::after {
      content: '';
      height: 1px;
      flex: 1;
      background-color: currentColor;
    }
  }
</style>
