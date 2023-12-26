<template>
    <div class="w-3/4 h-3/4 z-40 bg-white flex justify-center items-center">
        <div class="flex flex-col justify-center items-center w-3/4">
            <input id="Name" type="text" placeholder="Event Name"
                class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
            <input id="Desc" type="text" placeholder="Event Description"
                class="w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
            <input id="SDate" type="text" placeholder="Event Start Date & Time"
                class="dateInput w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
            <input id="EDate" type="text" placeholder="Event End Date & Time"
                class="dateInput  w-3/4 h-10 border-2 border-gray-200 rounded-lg px-4 py-2 my-4">
            <button class=" w-3/4 h-10 bg-red-500 text-white rounded-lg px-4 py-2 my-4" @click="addevent">Add Event</button>
        </div>
    </div>
</template>

<script>
import flatpickr from "flatpickr";
import 'flatpickr/dist/flatpickr.min.css';
export default {
    mounted() {
        flatpickr('.dateInput', {
            enableTime: true,
            dateFormat: 'd-m-Y H:i',
        });
    },
    methods: {
        addevent() {
            var form = [document.getElementById("Name").value,
            document.getElementById("Desc").value,
            document.getElementById("SDate").value,
            document.getElementById("EDate").value]
            if (form[1]===null ){
                form[1] = "No Description";
            }
            form.forEach(element => {
                if (element===null) {
                    alert("Please fill all the fields");
                    return;
                }
            });
            var event = {
                title: form[0],
                description: form[1],
                start: form[2],
                end: form[3]
            }
            fetch("http://localhost:3000/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

}
</script>