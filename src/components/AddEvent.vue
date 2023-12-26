<template>
    <div v-if="!modal"
        class="absolute flex justify-center items-center h-20 w-20 right-10 rounded-full bottom-10 bg-red-300 border-2 border-red-500 transition-all hover:bg-red-600"
        @click="addEvent">
        <img src="plus.svg" class="w-10">
    </div>
    <div v-if="modal" class="absolute z-30 w-screen h-screen bg-slate-600/50 flex justify-center items-center">
        
        <Modal />
        <div v-if="modal" class="absolute  top-0 left-0 z-20 w-screen h-screen" @click="back">
        </div>
    </div>
</template>



<script>
import Modal from "./Modal.vue";
export default {
    name: 'AddEvent',
    data() {
        return {
            modal: false
        };
    },
    methods: {
        addEvent() {
            this.modal = true;
        },
        back() {
            this.modal = false;
        }
    },
    components: { Modal }
}


</script>