<script>
    import Heart from '../../../lib/Heart.svelte';

    let innerWidth = 2000;
    let innerHeight = 1000;

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

</script>


<svelte:window bind:innerWidth bind:innerHeight />

{#each hearts as { id, topPos, leftPos }}
    <Heart {topPos} {leftPos} />
{/each}

<div class="container">
    <h1>happy present!</h1>
    <div class="row">
        <div class="col-12 text-center">
            <img src="https://media.tenor.com/FJonHWl-xVsAAAAM/ketelaere-de-ketelaere.gif" alt="Happy Birthday">
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, voluptatum dignissimos, error totam sunt iste ea non architecto omnis sapiente atque placeat eveniet aliquam, cupiditate saepe ipsam! Rerum, aliquam labore!</p>
    </div>
</div>