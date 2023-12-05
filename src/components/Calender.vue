<template>
    <div class="flex justify-center items-center">
        <div class="grid grid-rows-5 grid-cols-7 gap-3 container px-60 justify-center ">
            <div v-for="(day, weekIndex) in months" :key="weekIndex" class="flex md:text-[80px]  lg:text-[40px]  bg-[#f3f3f3] justify-center relative border-[1px] h-full rounded-md w-full  px-10 hover:shadow-md transition-shadow delay-0 duration-150 items-center aspect-square">

                <div v-if="day.split(':')[0] == currentday" class="rounded-full absolute z-0 w-[40px] md:w-[120px] aspect-square bg-red-200 ">
                </div>
                <p v-if="day.split(':')[1] == currentMonth" class="font-bold z-10">
                    {{ day.split(':')[0] }}
                </p>
                <p v-else class="font-bold z-10 text-gray-300">
                    {{ day.split(':')[0] }}
                </p>
                <div v-if="false" class="top-2 right-2 absolute w-5 h-5 animate-pulse rounded-full bg-red-500 z-20"></div>


            </div>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentMonth: new Date().getMonth(),
            currentday: new Date().getDate(),
            months: m,
        };
    },

};

var month = new Date().getMonth();
// var month = 10;
var year = new Date().getFullYear();
import moment from 'moment';
const getDates = (month, year) => {
    const startOfMonth = moment()
        .month(month - 1)
        .year(year)
        .startOf("month")
    const endOfMonth = moment()
        .month(month - 1)
        .year(year)
        .endOf("month")

    const finalsOfPrevMonth = []
    const currentMonth = []
    const startsOfNextMonth = []
    let iteratedDate = null

    iteratedDate = startOfMonth.clone()
    while (iteratedDate.day() !== 0) {
        iteratedDate.subtract(1, "day")
        finalsOfPrevMonth.push(iteratedDate.format("DD:MM"))
    }

    iteratedDate = startOfMonth.clone()
    while (iteratedDate.month() === month - 1) {
        currentMonth.push(iteratedDate.format("DD:MM"))
        iteratedDate.add(1, "day")
    }

    iteratedDate = endOfMonth.clone()
    while (finalsOfPrevMonth.length + currentMonth.length + startsOfNextMonth.length <35) {
        iteratedDate.add(1, "day")
        startsOfNextMonth.push(iteratedDate.format("DD:MM"))
    }

    return [...finalsOfPrevMonth.reverse(), ...currentMonth, ...startsOfNextMonth]
}
var m = getDates(month, year)




</script>
