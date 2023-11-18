<script setup>
    import Userinfo from './Userinfo.vue'
</script>

<template>
     <div class="bg-cyan-950 w-1/5 h-screen drop-shadow-2xl p-5">
        <div class="w-full p-5 rounded-xl bg-cyan-900 drop-shadow-xl my-10">
            <h1>User Info</h1>
            <Userinfo/>
        </div>
        <div class="w-full p-5 rounded-xl bg-cyan-900 drop-shadow-xl">
            <h1>Event Filter</h1>
        </div>
        <div class="h-3/6 w-fit"></div>
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:bg-red-500 hover:text-white h-10 px-4 py-2 w-full text-red-500 border-red-500">
        Sign Out
      </button>
     </div> 
</template>

