<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import { base } from "$app/paths";

    let slug;

    $: slug = $page.params.slug;
    $: console.log('Page slug:', slug);

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
    
    let currentQuestionIndex = 0;
    let result = '';
    let showRetry = false;

    function checkAnswer(selectedOption) {
        console.log(selectedOption)
        const currentQuestion = questions[slug];
        console.log(questions[slug])
        console.log(currentQuestion);
        if (selectedOption === currentQuestion.correctAnswer) {
            // Navigate to another page
            if (currentQuestion.id === 5) {
                window.location.href = '/sveltekit-fe/happybd/present'; // Replace with actual route
            } else {
                result = 'Correct! Next question.';
                window.location.href = '/sveltekit-fe//happybd/' + (questions[slug].id); // Replace with actual route
            }
        } else {
            result = 'Incorrect. Would you like to try again?';
            showRetry = true;
        }
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        result = '';
        showRetry = false;
    }

    $: console.log(questions[slug]);

</script>

<h1>Slug: {slug}</h1>

{#if questions[slug]}
    <h2>{questions[slug].question}</h2>
    <ul>
        {#each questions[slug].options as option}
            <button type="button" on:click={() => checkAnswer(option)}>{option}</button>
        {/each}
    </ul>
{:else}
    <p>Question not found.</p>
{/if}