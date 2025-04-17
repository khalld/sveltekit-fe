<script>
    import Heart from '../../../lib/Heart.svelte';
    import Controls from '../../../lib/player/Controls.svelte';

    let innerWidth = 1000;
    let innerHeight = 500;

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


<!-- <svelte:window bind:innerWidth bind:innerHeight /> -->

<div class="container">

    {#each hearts as { id, topPos, leftPos }}
        <Heart {topPos} {leftPos} />
    {/each}
    <div class="card mt-2" style="">
        <img src="https://khalld.github.io/sveltekit-fe/imgshbday/14.jpg" class="card-img-top img-fluid" alt="happyyys">
        <div class="card-body">
            <h5 class="card-title">Buon compleanno!</h5>
            
            <ul class="list-group list-group-flush">
                <li class="list-group-item row "><Controls/></li>
                <li class="list-group-item row ">

<!-- 
                    <button class="col col-12 btn btn-{btncolors[i]} border mb-2" on:click={() => checkAnswer(option)}>{option}</button> -->


                    <button class="col col-12 btn btn-lg btn-outline-success" on:click={() => window.location.href = '/sveltekit-fe/happybd/present/secret' }>Vai al premio!</button>
                </li>
                <!-- <li class="list-group-item">A second item</li>
                <li class="list-group-item">A third item</li> -->
            </ul>
        </div>
    </div>
</div>

