<script>
    import { onMount } from "svelte";
    import {lyricData, artistList} from '../stores/lyrics';
    export let userToken;

    onMount(async () => {
      fetch("http://192.168.50.29:9003/userTopTracks/"+ userToken)
      .then(response => response.json())
      .then(data => {
            lyricData.set(data)
            console.log($lyricData);
      }).catch(error => {
        console.log(error);
        console.log(userToken);
        return [];
      });
    });
</script>

<main>
	<h1>User's Top Tracks:</h1>
	<ul>
	{#each $lyricData as {artist, title, lines}}
		<li>{artist}: {title}</li>
    {#each lines as lyricLine}
		<p>{lyricLine.words}</p>
	  {/each}
	{/each}
	</ul>
</main>
