<script>
    import Heart from '../../lib/Heart.svelte';
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	let counter = 0;
    let innerWidth = 2000;
    let innerHeight = 1000;

    beforeUpdate(() => {
        console.log('the component is going to be updated');	
    });
    afterUpdate(() => {
        console.log('the component has been updated');	
    });
	onMount(() => {
		const interval = setInterval(() => {
			counter = counter + 1;
		}, 1000);
		return () => clearInterval(interval);
	});

    let hearts = [];

    function generateHearts() {
        for (let i = 0; i < 100; i++) {
        hearts.push({
            id: i,
            topPos: Math.random() * innerHeight,
            leftPos: Math.random() * innerWidth
        });
        }
    }
    generateHearts();

    // $: console.log("window width " + window.innerWidth + " height " + window.innerHeight)
    
    // $: console.log("native width " + innerWidth + " height " + innerHeight)

</script>



<h1 class="text-center">Al mio amore grandissimo</h1>

<div class="container-sm text-center">
    <img
        src="https://media.licdn.com/dms/image/C5603AQEiFCckTAh1CA/profile-displayphoto-shrink_800_800/0/1628185441619?e=1714608000&v=beta&t=iQFSSuqVq_Harynd5XsvUoM239U_0BdGI_LjKYR7KZU"
        class="img-fluid"
        alt="amore mio"
    >
</div>

<svelte:window bind:innerWidth bind:innerHeight />


{#each hearts as { id, topPos, leftPos }}
    <Heart {topPos} {leftPos} />
{/each}

<style>
:global(body) {
    margin: 0;
    overflow: hidden;
}
</style>
