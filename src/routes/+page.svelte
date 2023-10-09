<script lang="ts">
    let input: string = '';

    function handleSubmit() {
        console.log(input);
    }
</script>

<main class="flex flex-col items-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold my-10">ColorNamer</h1>
    <form
        class="flex flex-col items-center"
        on:submit|preventDefault={handleSubmit}>
        <input
            class="w-64 md:w-80 lg:w-96 p-2 text-lg bg-white border border-indigo-300 rounded-md focus:border-indigo-500 focus:outline-none"
            id="color-input"
            type="text"
            placeholder="Enter a color"
            required
            bind:value={input}
        >
        <button
            class="w-64 md:w-24 lg:w-30 p-2 text-lg font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500 active:bg-indigo-700 focus:outline-none focus:border-indigo-300 focus:ring focus:border-indigo-200 my-8"
            type="submit">
            Submit
        </button>
    </form>
</main>