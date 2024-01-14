<script lang="ts">
    import { myString, history } from "./lib/stores";
    import Replacer from "./lib/Replacer.svelte";
    import Converter from "./lib/Converter.svelte";
</script>

<main>
    <textarea
        bind:value={$myString}
        on:input={() => {
            $history.push($myString);
        }}
    ></textarea>

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
    <Replacer />
    <Converter />
</main>
