<script setup>
import { creatorsstore } from "@/stores/creators";
const creators = creatorsstore();
</script>

<template>
  <div class="my-8 mt-[100px] mb-[350px]">
    <h3 class="mb-8">Creator of The Week</h3>

    <ul class="flex justify-center gap-8 flex-wrap">
      <li
        v-for="(creator, index) in creators.creatorslist"
        :key="index"
        class="flex bg-boxpurple h-[100px] lg:w-[31%] md:w-1/3 p-4 w-full rounded-xl"
      >
        <div class="flex items-center">
          <div class="aspect-square object-contain w-[80px]">
            <img :src="creator.avatar" alt="" />
          </div>
          <div class="ml-6">
            <div class="text-[24px] font-bold">{{ creator.name }}</div>
            <div class="text-[24px] mt-4">{{ creator.total }}K</div>
          </div>
        </div>
      </li>
    </ul>
    <div class="w-full flex justify-center mt-8">
      <button
        class="lg:gardbut bg-myblue w-full lg:w-[200px] rounded-full py-4 px-8"
      >
        Watch Video
      </button>
    </div>
  </div>
  <div
    class="mt-[100px] flex justify-center items-center paralaxfooter w-full z-50"
  >
    <div
      class="bg-community bg-cover bg-center w-full h-[290px] rounded-xl flex flex-col justify-center items-center"
    >
      <div
        class="flex justify-center items-center text-nowrap text-[20px] sm:text-[24px] lg:text-[50px] font-bold"
      >
        Joint Our Community
      </div>
      <button
        class="bg-white w-[200px] text-nowrap mt-10 rounded-full py-4 px-8 text-myblue hover:text-white hover:bg-myblue transition-colors duration-500"
      >
        Get Started
      </button>
    </div>
  </div>
</template>
<style scoped>
.paralaxfooter {
  transition: 5s ease;
  animation: paralaxfooter 2s linear forwards;
  animation-timeline: view(-100px);
  animation-range: entry;
  animation-direction: top;
  position: absolute;
}
@keyframes paralaxfooter {
  0% {
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
