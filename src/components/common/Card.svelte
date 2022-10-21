<script lang='ts'>
	import type { FoodTypes } from '@components/home/types';
    import SanityImage from "@components/common/SanityImage/index.svelte";
    export let food:FoodTypes;
    console.log(food)
</script>
<div class='p-4 flex flex-col border rounded-md'>
    <div class='w-full aspect-video '>
        <SanityImage image={food.image.asset}/>
    </div>
    <div class=' flex justify-between my-4'>
    <span class='text-md  rounded-full'>{food.price}$</span>
    {#if food.tags}
        <div class="flex items-center gap-1">
            {#each food.tags as tag}
                <span class='text-sm bg-teal-200 px-2 py-1 rounded-full'>
                    {tag}
                </span>
            {/each}
        </div>
    {/if}
    </div>
    <p class="text-xl mb-2">{food.title}</p>
    <p class="text-md text-gray-500">{food.summary.en}</p>
    <button class='mt-4 hover:border-l-4 transition-all  border-lime-500 max-w-max px-8 ml-auto py-1 rounded-full  bg-blue-500 text-white'>BUY</button>
</div>