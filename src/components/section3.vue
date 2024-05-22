<template>
  <div class="mt-[60px] h-[440px] fade">
    <div
      class="flex items-center z-20 bg-white overflow-x-hidden w-full left-0 h-[240px] absolute lg:-skew-y-6 bg-gradient-to-br from-mypurple to-myblue"
    >
      <div class="strip flex whitespace-nowrap mx-auto font-ROBOTOfont">
        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>

        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>
        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>
        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>
        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>
        <div class="slide flex items-center justify-center">
          <div class="ml-[60px]">LIVE AUCTION</div>
          <img
            class="ml-[20px] w-[50px] h-[50px]"
            src="../assets/icons/Star 2.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide {
  font-style: normal;
  font-weight: 800;
  font-size: 136px;
  line-height: 146px;
  letter-spacing: -0.03em;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 3px;
  animation: slide 5s infinite linear;
}
.strip:hover .slide {
  animation-play-state: paused;
}

@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

<script setup>
import "../../public/scroll.js";
</script>
../../public/scroll.js
