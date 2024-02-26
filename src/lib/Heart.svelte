<script>
    export let topPos;
    export let leftPos;
</script>

<span class="heart" style="top: {topPos}px; left: {leftPos}px; ">❤️</span>

<style>
.heart {
    position: fixed;
    color: red;
    font-size: 24px;
    animation: fall 2s linear infinite;
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
