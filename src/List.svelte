<script>
    import {items} from './store.js';
    import Item from './Item.svelte';
    
    let item = [];
    let enable = true;
    let disabledList = 

    items.subscribe(itm => {
        item = itm;
        console.log(item);
    });

</script>

<style>
.frame {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border-radius: 5px;
    background: white;
    margin: 1rem;

    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 3rem;
    }

    .image {
        width: 33%;
        height: 100%;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    .user-data {
        width: 67%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

   h1 {
       margin: 1rem;
   }

    .description {
        border-top: 1px solid #ccc;
        padding: 1rem;
    }

    .grid {
        width: 100%;
        margin-bottom: 2rem;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
    }
    @media (min-width: 768px) {
        .grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>

<section class="grid">
    <article class="frame">
    <header>
    <h1>Todos</h1>
    </header>
        <ol>
            {#each item as itm, i}
                {#if item[i].enable == true}
                    <Item on:disable={()=>item[i].enable = false} title={item[i].title}/>
                {/if}
            {/each}
        
        </ol>
    </article>

    <article class="frame">
    <header>
    <h1>Done</h1>
    </header>
        <ol>
            {#each item as itm, i}
                {#if item[i].enable == false}
                    <Item on:disable={()=>item[i].enable = true} title={item[i].title} className="disabled"/>
                {/if}
            {/each}
    
        </ol>
    </article>
</section>
