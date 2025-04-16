<script>
    import { page } from '$app/stores';
    import { base } from "$app/paths";

    let slug;
    let result = null;
    let answerisright = null;
    let status = 'danger';

    let questions = [
        {
            "id": 1,
            "question": "What is the capital of France?",
            "options": ["Paris-q", "London", "Berlin", "Madrid"],
            "correctAnswer": "Paris-q",
            "nextAnswer": 2
        },
        {
            "id": 2,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": 3
        },
        {
            "id": 3,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": 4
        },
        {
            "id": 4,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": 5
        },
        {
            "id": 5,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": base + "/happybd/present/"
        },
    ]
    
    $: slug = $page.params.slug;
    $: console.log('Page slug:', slug);
    $: console.log('pageparams:', $page.params);
    $: console.log('page:', $page);

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[slug];
        if (selectedOption === currentQuestion.correctAnswer) {
            // Navigate to another page
            if (currentQuestion.id === 5) {
                window.location.href = '/sveltekit-fe/happybd/present'; // Replace with actual route
            } else {
                status = 'success';
                result = 'Correct! Next question.';
                answerisright = true;
                // window.location.href = '/sveltekit-fe/happybd/' + (questions[slug].id); // Replace with actual route
            }
        } else {
            result = 'Incorrect. Would you like to try again?';
            answerisright = false;
            status = 'danger';
        }
    }

    $: console.log(questions[slug]);
</script>


<div class="container">
    <h1>Domanda: {slug}</h1>

    <img src="https://via.placeholder.com/150" alt="Placeholder Image" class="img-fluid" />

    {#if questions[slug]}
    <div class="row">
        <p>
        {questions[slug].question}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci tempore facere et nobis beatae consectetur impedit fuga at suscipit delectus. Magnam tempora sed praesentium quam beatae velit possimus sit.
        </p>
        </div>
    <div class="row">
        {#each questions[slug].options as option}
            <button class="col col-12 btn btn-primary mx-2 my-2" on:click={() => checkAnswer(option)}>{option}</button>
        {/each}
        {#if result}
            <div class="alert alert-{status} d-flex align-items-center mx-2" role="alert">
                <div>{result}</div>
                {#if answerisright}
                <div class="w-100"></div>
                    <button type="button" class="btn btn-lg bt-success" on:click={() => window.location.href = '/sveltekit-fe/happybd/' + (questions[slug].id)}>Vai alla domanda successiva</button>
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