<script>
    import { page } from '$app/stores';
    import { base } from "$app/paths";

    let slug;
    let result = null;
    let answerisright = null;
    let status = 'danger';
    let idx = 0;
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
            "question": "Cosa sarà successo quel giorno?",
            "options": ["Due gemelle hanno festeggiato insieme i loro 52 anni", "Una normale festa di compleanno", "Tutti ubriachi e divertiti. I fidanzati ricordano bene la serata", "Una festa di laurea"],
            "correctAnswer": "Tutti ubriachi e divertiti. I fidanzati ricordano bene la serata",
            "nextAnswer": null,
            "image": "https://khalld.github.io/sveltekit-fe/imgshbday/12.jpg"
        },
    ]
    
    $: slug = $page.params.slug;
    $: idx = slug - 1;
    $: console.log('Page slug:', slug);
    $: console.log('pageparams:', $page.params);
    $: console.log('page:', $page);
    $: console.log(questions[slug]);

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

</script>


<div class="container">
    <h1>Domanda: {slug}</h1>

    {#if questions[idx]}
        <img class="img-fluid" src={questions[idx].image} alt="ciaoo" />
        <div class="row">
            <p>
            {questions[idx].question}
            </p>
            </div>
        <div class="row">
            {#each questions[idx].options as option}
                <button class="col col-12 btn btn-primary mx-2 my-2" on:click={() => checkAnswer(option)}>{option}</button>
            {/each}
            {#if result}
                <div class="alert alert-{status} d-flex align-items-center mx-2" role="alert">
                    <div>{result}</div>
                    {#if answerisright}
                        <div class="w-100"></div>
                        <button type="button" class="btn btn-sm bt-warning" on:click={() => window.location.href = '/sveltekit-fe/happybd/' + (questions[idx].nextAnswer)}>Vai alla domanda successiva</button>
                    {/if}
                </div>
            {/if}
        </div>
    {:else}
        <p>Question not found.</p>
    {/if}
    
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