<template>
    <div v-if="!modal"
        class="absolute flex justify-center items-center h-20 w-20 right-10 rounded-full bottom-10 bg-red-300 border-2 border-red-500 transition-all hover:bg-red-600"
        @click="addEvent">
        <img src="plus.svg" class="w-10">
    </div>
    <div v-if="modal" class="absolute z-30 w-screen h-screen bg-slate-600/50 flex justify-center items-center">
        <div class="w-3/4 h-3/4 z-40 bg-white flex justify-center items-center">
            <div class="flex flex-col justify-center items-center w-3/4">
                <!-- <input type="text" placeholder="Event Name"
                    class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
                <input type="text" placeholder="Event Description"
                    class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4"> -->
                <input id="dateInput" type="text" placeholder="Event Dalmte"
                    class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
                <!-- <input type="text" placeholder="Event Time"
                    class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
                <button class="w-3/4 h-10 bg-red-500 text-white rounded-lg px-4 py-2 my-4">Add Event</button> -->
            </div>
        </div>
        <div v-if="modal" class="absolute  top-0 left-0 z-20 w-screen h-screen" @click="back">
        </div>
    </div>
</template>



<script>
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
export default {
    name: 'AddEvent',
    data() {
        return {
            modal: false
        }
    },
    methods: {
        addEvent() {
            this.modal = true;
            flatpickr('#dateInput', {
            dateFormat: 'Y-m-d',
            // Additional Flatpickr options if needed
        });
        },
        back() {
            this.modal = false;
        }
    },
    mounted() {
        console.log('Mounted lifecycle hook');
        const dateInput = document.getElementById('dateInput');
        console.log('Date input element:', dateInput);
    },
}


</script>