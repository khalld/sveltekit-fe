<script>
	import { status, isPlaying, audioPlayer, index, trackList, addTrack } from './stores.js'
	import PlayIcon from './play-icon.svelte'
	import PauseIcon from './pause-icon.svelte'
	import LoadingIcon from './loading-icon.svelte'
  import { onMount } from 'svelte';
	
	export let controls = false;
	export let track = false;

	onMount(() => {
		if (track) {
			$audioPlayer.src = track.file;
			$audioPlayer.load();
		}
		playTrack();
	});
	
	function playTrack() {
		$audioPlayer.play()
		$isPlaying = true;
	}
	
	function pauseTrack() {
		$audioPlayer.pause()
		$isPlaying = false;
	}

</script>

{#if controls}

	{#if $isPlaying === false}
		<button class='play-button controls' on:click={playTrack}>
			<PlayIcon/>
		</button>
	{:else if
		$isPlaying === true &&
		(
			$status === 'waiting' ||
			$status === 'loading' ||
			$status === 'can play some' ||
			$status === 'can play all'
		)
	}
		<button
			class='play-button controls'
			on:click={pauseTrack}
		>
			<LoadingIcon/>
		</button>
	{:else if $isPlaying === true}
		<button
			class='play-button controls'
			on:click={pauseTrack}
		>
			<PauseIcon/>
		</button>
	{/if}

{:else if track}
		<button
			class='play-button track playing'
			on:click={playTrack}
		>
			<PlayIcon size={2.5}/>
		</button>

{/if}

<style>
	.play-button {
		margin: 0;
		padding: 0;
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 4rem;
		border: 1px solid #bbb;
		background: #fcfcfc;
	}
	
	.controls {
		width: 4rem;
		height: 4rem;
		border: 1px solid #000;
	}
	
	.track {
		width: 4rem;
		height: 4rem;
	}
	
	.playing {
		border: 1px solid #000;
	}
</style>