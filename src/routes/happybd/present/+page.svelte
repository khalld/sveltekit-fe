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

<div class="container">
    <h1>happy present!</h1>
    <div class="row">
        <div class="col-12 text-center">
            <img src="https://media.tenor.com/FJonHWl-xVsAAAAM/ketelaere-de-ketelaere.gif" alt="Happy Birthday">
        </div>
        <p>
            Ciao Marta! (?) <br> 
            Siamo una software house locale il cui obbiettivo è fare tanti tanti molti soldi ma siamo stati ingaggiati da un anonimo benefattore per regalarti un messaggio di auguri digitale per il tuo compleanno!<br>
            L'anonimo benefattore voleva comprarti dei fiori, ma visto che la sua vita è molto impegnata e non avendo modo di andarli comprare (in realtà si riserva il diritto di comprarli per la prossima laurea, altrimenti poi sembra tutto uguale) e visto che non è periodo, almeno 'sto bigliettino lo puoi vedere per sempre!
            <br>
            Ovviamente, come ben sai senza il sudore non si può andare avanti, dunque prima di scoprire il messaggio segreto, dovrai risolvere un piccolo indovinello!<br>
            Sei pronta?
        </p>
    </div>
</div>

<div class="container w-50 mt-3 mb-4">
    <Controls/>
</div>
