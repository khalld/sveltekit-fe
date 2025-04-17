import { writable, get } from 'svelte/store'

export const audioPlayer = writable();
export const status = writable('default');
export const isPlaying = writable(false);
export const index = writable(0);

export const trackList = writable([
	{
		title: 'Buon compleanno!',
		artist: 'Il tuo fidanzato',
		file: 'https://khalld.github.io/sveltekit-fe/sound/gigi_bday.mp3'
		// file: 'https://khalld.github.io/fe-assets/assets/music/sound.mp3'
	}
]);

