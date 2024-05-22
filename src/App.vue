<script setup>
import "../src/scroll.js";
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div
    class="wrapper overflow-clip bg-PrimaryMain h-[100%] min-h-screen text-white font-mainfont text-base font-normal"
  >
    <div class="relative z-[1]">
      <div class="w-5/5 3xl:w-3/5 2xl:w-4/5 2xl:px-0 px-8 m-auto">
        <header class="">
          <div
            class="flex py-[50px] wrapper w-full m-auto justify-between items-center"
          >
            <img class="w-[200px]" src="./assets/img/ApolloNFT.png" alt="" />
            <nav class="hidden lg:block">
              <ul class="flex">
                <li class="mr-[40px] relative headmenuhover">
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li class="mr-[40px] relative headmenuhover">
                  <RouterLink to="/">Drop</RouterLink>
                </li>
                <li class="mr-[40px] relative headmenuhover">
                  <RouterLink to="/">Marketplace</RouterLink>
                </li>
                <li class="mr-[40px] relative headmenuhover">
                  <RouterLink to="/">Creator</RouterLink>
                </li>
                <li class="mr-[40px] relative headmenuhover">
                  <RouterLink to="/">Community</RouterLink>
                </li>
              </ul>
            </nav>
            <button class="lg:hidden">
              <img src="../src/assets/icons/mobmenu.png" alt="" />
            </button>
            <button class="gardbut hidden lg:block rounded-full py-4 px-8">
              Contact Us
            </button>
          </div>
        </header>
        <div
          class="flex hidden md:block light left-[-87px] top-[-41px] absolute z-[-1] w-[800px] h-[800px] min-w-[555px] min-h-[555px] rounded-full"
        ></div>
        <div class="w-full m-auto">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
