<script context="module" >
    export const prerender = true;
    
</script>

<script lang="ts"> 
	import type  { FoodTypes } from './types';
    import Card from "@components/common/Card.svelte";
    export let data:FoodTypes[];
</script>

<section class="w-full p-4">
    <h2 class='text-2xl p-4'>Popular Foods</h2>
    <div class='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>
        {#each data as food}
            <Card food={food} />
        {/each}
    </div>
</section>