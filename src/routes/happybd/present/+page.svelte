<script>
    import Heart from '../../../lib/Heart.svelte';
    import Controls from '../../../lib/player/Controls.svelte';

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

<div class="container-fluid">
    <h1>Buon compleanno amore mio!!</h1>
    <div class="row">
        <div class="col-12 text-center">
            <img class="img-fluid" src="https://khalld.github.io/sveltekit-fe/imgshbday/14.jpg" alt="Happy Birthday">
        </div>
        <p>
            Ecco il mazzo di fiori che ti avrei voluto regalare! 
        </p>
    </div>
</div>

<div class="container w-50 mt-3 mb-4">
    <Controls/>
</div>
