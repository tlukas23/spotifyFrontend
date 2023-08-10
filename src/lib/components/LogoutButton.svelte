<script lang="ts">
	import { invalidateAll } from '$app/navigation';
</script>
<form
	method="POST"
	on:submit|preventDefault={async () => {
		const response = await fetch('/logout', {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		});
        if (response.ok) {
			invalidateAll();
		}
	}}
>
	<button type="submit" class ="glitch" data-text="Logout">Logout</button>
</form>

<style lang="scss">

@mixin glitchCopy {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch {
  position: relative;
  color: #fff;
  font-size: 4em;
  letter-spacing: 0.5em;
  animation: glitch-skew 1s infinite linear alternate-reverse;

  &:hover:before {
	@include glitchCopy;
    left: 2px;
    text-shadow: -2px 0 #1db954;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim 5s infinite linear alternate-reverse;
  }

  &:hover:after {
	@include glitchCopy;
    left: -2px;
    text-shadow: -2px 0 #1db954, 2px 2px #1db954;
    clip: rect(44px, 450px, 56px, 0);
    animation: glitch-anim2 5s infinite linear alternate-reverse;
  }
}
	@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*calc(1 / $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew(calc(random(100) / 100) + deg);
    }
  }
}

@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 to $steps {
    #{percentage($i*calc(1 / $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
      transform: skew(calc(random(100) / 100) + deg);
    }
  }
}
</style>