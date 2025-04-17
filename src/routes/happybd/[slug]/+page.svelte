<script>
    import { page } from '$app/stores';
    import { base } from "$app/paths";

    let slug;
    let result = null;
    let answerisright = null;
    let status = 'danger';
    let idx = 0;
    let btncolors = ["secondary", "light", "info", "warning"]
    let questions = [
        {
            "id": 1,
            "question": "Cosa sta facendo il personaggio inquadrato in fotografia?",
            "options": ["Dormendo", "Riposa gli occhi", "E' arrabbiata col fidanzato", "E' attenta al film che sta guardando"],
            "correctAnswer": "Riposa gli occhi",
            "nextAnswer": 2,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/2.jpg"
        },
        {
            "id": 2,
            "question": "Qual è la location della fotografia? Secondo te, cosa sta facendo il personaggio inquadrato?",
            "options": ["Amsterdam, è troppo sballata per posare", 
                "Adrano, alla villa delle papere. Il personaggio è schifiato perché ha sentito qualche zanno parlare", 
                "Barcellona, il personaggio sembra infastidio da un commento stupido del fotografo", "Non lo so"],
            "correctAnswer": "Barcellona, il personaggio sembra infastidio da un commento stupido del fotografo",
            "nextAnswer": 3,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/3.jpg"
        },
        {
            "id": 3,
            "question": "Quale emozione esprime il personaggio inquadrato?",
            "options": ["Buna è a pusiziuni", "Felicità", "Tristezza", "Le foto di prima sono venute male e dobbiamo cercare di farne uscire una decente"],
            "correctAnswer": "Le foto di prima sono venute male e dobbiamo cercare di farne uscire una decente",
            "nextAnswer": 4,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/5.jpg"
        },
        {
            "id": 4,
            "question": "Perché la protagonista delle foto sembra infastidita?",
            "options": ["Non lo è", "Si è appena accorta di essere entrata in macchina con le scarpe fatte di m*rda", "Probabilmente il fidanzato ha espresso un consiglio sulle manovre da effettuare (?)", "Non lo ricordo"],
            "correctAnswer": "Probabilmente il fidanzato ha espresso un consiglio sulle manovre da effettuare (?)",
            "nextAnswer": 5,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/9.jpg"
        },
        {
            "id": 5,
            "question": "Cosa è successo il giorno della foto?",
            "options": ["Due gemelle hanno festeggiato insieme i loro 52 anni", "Una normale festa di compleanno", "Tutti ubriachi e divertiti. I fidanzati ricordano bene la serata", "Una festa di laurea"],
            "correctAnswer": "Tutti ubriachi e divertiti. I fidanzati ricordano bene la serata",
            "nextAnswer": 6,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/12.jpg"
        },
        {
            "id": 6,
            "question": "Quanti anni ci sono tra la foto precedente e quest'ultima?",
            "options": ["5", "3", "1", "Differenze? Ma sembrano più giovani!"],
            "correctAnswer": "Differenze? Ma sembrano più giovani!",
            "nextAnswer": 7,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/18.jpg"
        },

        {
            "id": 7,
            "question": "Che fine ha fatto quella borsa?",
            "options": ["Conservata", "Ma AMOOO ERA DIFETTOSAA!!", "Mai ricevuta", "Foto creata dall'IA, non esiste"],
            "correctAnswer": "Ma AMOOO ERA DIFETTOSAA!!",
            "nextAnswer": 8,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/11.jpg"
        },

        {
            "id": 8,
            "question": "Qui nessuna domanda, era per dirti che sento uscire l'audio dalla foto.",
            "options": ["Avanti"],
            "correctAnswer": "Avanti",
            "nextAnswer": 9,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/20.jpg"
        },
        {
            "id": 9,
            "question": "Ma chi stavi pinzannu?",
            "options": ["Nan c'è nenti 'nda vita", "Nautru supricchiu", "Cu appi pani mureu cu appi fucu campau", "MEEE AMOOOO"],
            "correctAnswer": "MEEE AMOOOO",
            "nextAnswer": null,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/19.jpg"
        },
    ]
    // gestione idx/routing delle domande
    $: slug = $page.params.slug; 
    $: idx = slug - 1;
    
    function checkAnswer(selectedOption) {
        const currentQuestion = questions[idx];
        console.log("selectedOption", selectedOption);
        console.log("currentQuestion", currentQuestion.correctAnswer);
        if (selectedOption === currentQuestion.correctAnswer) {
            // Navigate to another page
            if (currentQuestion.id === 5) {
                window.location.href = '/sveltekit-fe/happybd/present'; // Replace with actual route
            } else {
                status = 'success';
                result = 'Corretto! Vai alla domanda successiva.';
                answerisright = true;
                // window.location.href = '/sveltekit-fe/happybd/' + (questions[slug].id); // Replace with actual route
            }
        } else {
            result = 'Avaiaaa, sbagghiasti! Vuoi provare un altra risposta? (siamo stati buoni perché è il tuo compleanno, altrimenti ti avremmo fatto reiniziare da capo!!)';
            answerisright = false;
            status = 'danger';
        }
    }

    // enable this for debugging
    // $: console.log('Page slug:', slug);
    // $: console.log('pageparams:', $page.params);
    // $: console.log('page:', $page);
    // $: console.log(questions[slug]);

</script>

<div class="container">
    <div class="card mt-2" style="">
        {#if questions[idx]}
            <img src={questions[idx].image} class="card-img-top img-fluid" alt="img question">
            <div class="card-body">
                <h5 class="card-title">Domanda: {slug}</h5>
                <p class="card-text">{questions[idx].question}</p>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item row">
                        {#each questions[idx].options as option, i}
                            <button class="col col-12 btn btn-{btncolors[i]} border mb-2" on:click={() => checkAnswer(option)}>{option}</button>
                        {/each}
                    </li>
                    {#if result}
                        <div class="alert alert-{status} d-flex align-items-center mx-2 mt-2" role="alert">
                            <div>{result}</div>
                            {#if answerisright}
                                <!-- <div class="w-100"></div> -->
                                <button type="button" class="btn btn-sm bt-warning border border-dark border-2" on:click={() => window.location.href = '/sveltekit-fe/happybd/' + (questions[idx].nextAnswer)}>Vai alla domanda successiva</button>
                            {/if}
                        </div>
                    {/if}
                    <!-- <li class="list-group-item">An item</li> -->
                    <!-- <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li> -->
                </ul>
            </div>
            <!-- <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> -->
        {:else}
            <div class="card-body">No question founded.</div>
        {/if}
    </div>
</div>



<style>
    .heart {
        position: fixed;
        top: -50px;
        font-size: 2rem;
        color: red;
        animation-name: fall;
        animation-timing-function: linear;
    }

    @keyframes fall {
        to {
            transform: translateY(100vh);
        }
    }
</style>