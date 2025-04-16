<script>
	import Slider from './Slider.svelte'
	import { status, isPlaying, audioPlayer, index, trackList } from './stores.js'
	import { format } from './utilities.js'
	import PlayButtonBirthday from './PlayButtonBirthday.svelte'
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

	function playTrack() {
		$isPlaying = true;
		requestAnimationFrame(whilePlaying);
		$audioPlayer.play()
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
	on:ended="{() => {$isPlaying = true; currentTime = 0}}"
	src={src}
/>

<div class='box'>
	<PlayButtonBirthday controls/>
</div>

<style>
	audio {
		display: none
	}
	
	div {
		display: grid;
		grid-auto-flow: row;
	}
	
	.box {
		margin: 0;
		padding: 1rem;
		padding-top: 1.5rem;
		background: #eee;
		grid-auto-flow: row;
		row-gap: 1rem;
		align-items: center;
		border: 1px solid #bbb;
		border-radius: 10px;
	}
	
/* 	.debugger {
		padding: 1rem;
		place-items: center;
		column-gap: 1rem;
		border: 1px solid #bbb;
		border-radius: 8px;
		background: #ddd;
		grid-template-columns: 4rem 1fr 4rem 1fr;
		justify-items: start;
		align-items: center;
		row-gap: 0.5rem;
	} */
</style>