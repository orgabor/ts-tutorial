<script setup lang="ts">
import { computed, ref, useTemplateRef } from 'vue';


 // const count = ref<number | number>(0);

 //above vue 3.5

 const div = useTemplateRef('myDiv');

// computed state
const count = ref(0);
const atts = computed<{
    title: string,
    description: string,
}>(() => {
    if(count.value > 2) {
        return  {
            title : '',
            description: '',
            sure: 'ok',
        }
    }

    return {
        title : 'Hello',
        description: 'World',
    };
});

div.value?.append('Hello World');
</script>
<template>
    <div ref="myDiv">

    </div>
</template>
