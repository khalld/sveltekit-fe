<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let slug;

    $: slug = $page.params.slug;
    $: console.log('Page slug:', slug);

    let questions = [
        {
            "id": 1,
            "question": "What is the capital of France?",
            "options": ["Paris", "London", "Berlin", "Madrid"],
            "correctAnswer": "Paris"
        },
        {
            "id": 2,
            "question": "What is 2 + 2?",
            "options": ["3", "4", "5", "6"],
            "correctAnswer": "4"
        },
        // {
        //     "id": 3,
        //     "question": "Which planet is known as the Red Planet?",
        //     "options": ["Earth", "Mars", "Jupiter", "Venus"],
        //     "correctAnswer": "Mars"
        // }
    ]
    
    let currentQuestionIndex = 0;
    let result = '';
    let showRetry = false;

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            // Navigate to another page
            window.location.href = '/happybd/present'; // Replace with actual route
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

<div>
    <h2>{questions[currentQuestionIndex].question}</h2>
    <ul>
        {#each questions[currentQuestionIndex].options as option}
            <li on:click={() => checkAnswer(option)}>{option}</li>
        {/each}
    </ul>
    <p>{result}</p>
    {#if showRetry}
        <button on:click={restartQuiz}>Start Again</button>
    {/if}
</div>

{#if questions[slug]}
    <h2>{questions[slug].question}</h2>
    <ul>
        {#each questions[slug].options as option}
            <li>{option}</li>
        {/each}
    </ul>
{:else}
    <p>Question not found.</p>
{/if}