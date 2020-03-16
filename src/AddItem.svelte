<script>
    import Button from './Button.svelte';
    import {createEventDispatcher} from 'svelte';
    import { items } from './store.js';

    const dispatch = createEventDispatcher();
    export let id = 0;
    export let type;
    export let placeholder;

    let val="";
    const add = () => dispatch('add');


    function Input(event){
        val = event.target.value;
    }
    function AddItem(){
          items.update((itm)=>{
          return [{id: id++, title: val, enable: true}, ...itm];
      });
    }
</script>

<style>
    section{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5rem;
        
    }
</style>
<!-- on:input musíš target value abys dostal hodnotu a po kliknutí AddItem updateovat store
funguje to ale jiste to jde napsat lepe -->
<section>
    <input type={type} placeholder={placeholder} value={val} on:input={Input}>
    <Button on:click={AddItem} type="button" className="" label="Add"/>
</section>