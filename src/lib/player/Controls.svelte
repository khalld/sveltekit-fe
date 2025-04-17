<script>
	import { status, isPlaying, audioPlayer, index, trackList } from './stores.js'
	import { format } from './utilities.js'
	import PlayButton from './PlayButton.svelte'
	import { onMount } from 'svelte'
	
	let duration = 0;
	let currentTime = 0;
	let formattedTime = format(currentTime);
	let paused = true;
	let volume = 0.5;
	
	let slider;
	let rAF = null;

	let title = $trackList[$index].title; 
	let artist = $trackList[$index].artist;
	let src = $trackList[$index].file;
	
	function whilePlaying() {
		slider.value = audio.currentTime;
		currentTime = slider.value;
		rAF = requestAnimationFrame(whilePlaying);
	};
	
	onMount(() => {
		$audioPlayer.load();
	});
	
// 	on:progress="{() => $status = 'loading'}"
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<audio
	bind:this={$audioPlayer}
	bind:duration={duration}
	bind:currentTime={currentTime}
	bind:paused={paused}
	bind:volume={volume}
	on:canplay="{() => $status = 'can play some'}"
	on:canplaythrough="{() => $status = 'can play all'}"
	on:waiting="{() => $status = 'waiting'}"
	on:timeupdate="{() => $status = 'playing'}"
	on:seeking="{() => $status = 'seeking'}"
	on:ended="{() => {$isPlaying = false; currentTime = 0}}"
	src={src}
/>

<PlayButton controls/>