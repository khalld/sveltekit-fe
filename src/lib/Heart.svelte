<script>
    export let topPos;
    export let leftPos;

    // Adjust these positions as needed
    let positions = [
        { top: topPos, left: leftPos },
        { top: topPos + 50, left: leftPos + 50 },
        { top: topPos + 100, left: leftPos + 100 },
        { top: topPos + 150, left: leftPos + 150 },
        { top: topPos + 200, left: leftPos + 200 },
        { top: topPos + 250, left: leftPos + 250 }
    ];

    let emojis = ["❤️", "🎉", "🥳", "💖", "💞", "💛"];
</script>

{#each positions as { top, left }, index}
    <span class="heart" style="position: absolute; top: {top}px; left: {left}px;">
        {emojis[index]}
    </span>
{/each}

<style>
.heart {
    position: fixed;
    color: red;
    font-size: 24px;
    animation: fall 2s linear infinite;
    z-index: 1;
}

@keyframes fall {
    0% {
    transform: translateY(-100vh) rotate(0deg);
    }
    100% {
    transform: translateY(100vh) rotate(360deg);
    }
}
</style>
