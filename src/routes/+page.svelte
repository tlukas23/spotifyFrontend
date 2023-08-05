<script>
    import LogoutButton from '../lib/components/LogoutButton.svelte'
    import SpotifyLyrics from '../lib/components/SpotifyLyrics.svelte'
    export let data
    
</script>

{#if data.accessToken == null}
<a class="btn" href="/login">Login</a>
{:else}
<div><SpotifyLyrics userToken={data.accessToken}/></div>
<div><LogoutButton /></div>
{/if}