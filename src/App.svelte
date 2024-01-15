<script lang="ts">
    import { myString, history } from "./lib/stores";

    import Converter from "./lib/Converter.svelte";
    import EditorChoice from "./lib/EditorChoice.svelte";
</script>

<main>
    <br />
    <button
        on:click={() => {
            $history.pop(); // current
            const last = $history.pop();
            if (typeof last !== "undefined") {
                $myString = last;
            } else {
                $myString = "";
            }
        }}>CTRL Z</button
    >
    <EditorChoice />
    <Converter />
</main>

<style>
    :global(body) {
        margin: 0px;
    }
</style>
