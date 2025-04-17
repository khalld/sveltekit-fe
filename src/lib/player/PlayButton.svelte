<script>
	import { status, isPlaying, audioPlayer } from './stores.js'
	
	function playTrack() {
		$audioPlayer.play()
		$isPlaying = true;
	}
	
	function pauseTrack() {
		$audioPlayer.pause()
		$isPlaying = false;
	}
	
</script>


{#if $isPlaying === false}
	<button type="button" class="btn btn-primary btn-lg" on:click={playTrack}><i class="fa-solid fa-play fa-lg"></i></button>
{:else if
	$isPlaying === true &&
	(
		$status === 'waiting' ||
		$status === 'loading' ||
		$status === 'can play some' ||
		$status === 'can play all'
	)
}
	<button type="button" class="btn btn-primary btn-lg" on:click={pauseTrack}>
		<div class="spinner-border" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</button>
{:else if $isPlaying === true}
	<button type="button" class="btn btn-primary btn-lg" on:click={pauseTrack}>
		<i class="fa-solid fa-pause"></i>
	</button>
{/if}
