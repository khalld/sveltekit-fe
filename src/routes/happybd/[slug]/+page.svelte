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
            "id": 4,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": 4
        },
        {
            "id": 5,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": 5
        },
        {
            "id": 6,
            "question": "What is 2 + 2?",
            "options": ["3", "vera", "5", "6"],
            "correctAnswer": "vera",
            "nextAnswer": base + "/happybd/present/"
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
    let progressivo = 1;

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            // Navigate to another page
            if (currentQuestion.id === 6) {
                window.location.href = '/happybd/present'; // Replace with actual route
            } else {
                currentQuestionIndex = currentQuestion.nextAnswer - 1; // Adjust for zero-based index
                result = 'Correct! Next question.';
            }
            window.location.href = {base} +'/happybd/' + currentQuestionIndex; // Replace with actual route
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