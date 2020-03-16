<script>
import {createEventDispatcher} from 'svelte';

   // export let id;
    export let title;
    export let className; 
    const dispatch = createEventDispatcher();

    
    function dis(){
        dispatch('disable');
    }
</script>

<style>
    li {
        margin: 1rem;
        max-width: 100%;
    }
    .disabled{
    /*  pointer-events: none; */
        opacity: 0.6;
    }
</style>

<li on:click={dis} class="{className}">{title}</li>