<script lang="ts">
    import { getResponse } from '$lib';
    let input: string = '';

    let promise: Promise<any>;

    async function handleSubmit() {
        promise = getResponse(input);
    }
</script>

<main class="flex flex-col items-center text-center">
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">ColorNamer</h1>
    <h2 class="mt-6 text-lg">Welcome to ColorNamer, your go-to tool for identifying color names effortlessly!</h2>
    <p class="my-10 text-lg md:text-base text-center text-gray-700 max-w-2xl mx-auto">
        Just enter a HEX or RGB color code and instantly discover its closest name. Ideal for designers, developers, and anyone curious about the colors around them. Start exploring and name that color!
    </p>
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

    {#if promise}
        {#await promise}
            <p>Loading...</p>
        {:then data}
            <div class="flex flex-col items-center">
                <h3 class="text-lg font-semibold mt-4">Closest color name:</h3>
                <p class="text-2xl font-bold mt-2">{data}</p>
            </div>
        {:catch error}
            <p class="text-red-500">Something went wrong: {error.message}</p>
        {/await}
    {/if}
</main>