<script>
    import { onMount } from "svelte";
    export let userToken;

    onMount(async () => {
      fetch("http://192.168.50.29:9003/userTopTracks/"+ userToken)
      .then(response => response.json())
      .then(data => {
            console.log(data);
      }).catch(error => {
        console.log(error);
        console.log(userToken);
        return [];
      });
    });
    </script>

    