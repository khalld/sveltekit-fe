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
        src="https://scontent-fco2-1.xx.fbcdn.net/v/t1.18169-9/18882030_1914030195476894_179049056442037752_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=LqHoCcTR8joQ7kNvgFtHJPH&_nc_ht=scontent-fco2-1.xx&oh=00_AYCrr4IhsnQAIrfAKaN2WhO6HUN6zv58Jm4Ts-ShcJTh2w&oe=666A8A00"
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
