<script setup>
import "../scroll.js";
import { ref, computed } from "vue";
import { nftsstore } from "@/stores/nftsmarketplace";

const nfts = nftsstore();
const sec2 = ref(null);
const displayLimit = ref(10);
const currenttab = ref(nfts.nftslist);
const tabbody = ref(null);
const activeTab = ref("HopeApe"); // Add a reactive variable to track the active tab

const limited = computed(() => {
  return currenttab.value.slice(0, displayLimit.value);
});

const tab = (tabname, e) => {
  // Check if the tab is already active
  if (activeTab.value === tabname) return;

  const buttons = document.querySelectorAll(".tab");
  buttons.forEach((button) => {
    button.classList.remove("lg:gardbut");
    button.classList.add("bg-mybrown");
  });
  e.target.classList.add("lg:gardbut");
  e.target.classList.remove("bg-mybrown");
  e.target.classList.add("bg-myblue");

  // Remove animation class, trigger reflow, and add it back to ensure animation plays
  if (tabbody.value) {
    tabbody.value.classList.remove("fadertab");
    void tabbody.value.offsetWidth; // Trigger reflow
    tabbody.value.classList.add("fadertab");
  }

  // Update the current tab content and active tab variable
  activeTab.value = tabname; // Update activeTab
  switch (tabname) {
    case "HopeApe":
      currenttab.value = nfts.nftslist;
      break;
    case "Abstract":
      currenttab.value = nfts.nftslistAbst;
      break;
    case "Mongkey":
      currenttab.value = nfts.nftslistMongkey;
      break;
    case "Cars":
      currenttab.value = nfts.nftslistcars;
      break;
    case "Art":
      currenttab.value = nfts.nftslistArts;
      break;
  }
};
</script>

<style scoped>
.scrollfadesec2 {
  animation: scrollfadesec1 1s linear both;
  transform-origin: bottom;
  opacity: 0;
  animation-timeline: view(150px);
  animation-range: entry;
}

@keyframes scrollfadesec1 {
  100% {
    opacity: 1;
  }
}

.fadertab {
  animation: fadertab 2s forwards;
}

@keyframes fadertab {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<template>
  <div ref="sec2" class="cards gap-4 mt-10 scrollfadesec2">
    <h3 class=" ">Super Hot Drop</h3>
    <ul class="flex mt-[40px] text-nowrap overflow-x-auto no-scrollbar">
      <li class="mr-[30px]">
        <button
          @click="tab('HopeApe', $event)"
          class="bg-myblue lg:bg-mybrown rounded-full py-4 px-8 tab lg:gardbut"
        >
          Hope Ape
        </button>
      </li>
      <li class="mr-[30px]">
        <button
          @click="tab('Abstract', $event)"
          class="bg-mybrown gardmenu lg:bg-mybrown rounded-full py-4 px-8 tab"
        >
          Abstract
        </button>
      </li>
      <li class="mr-[30px]">
        <button
          @click="tab('Mongkey', $event)"
          class="bg-mybrown gardmenu lg:bg-mybrown rounded-full py-4 px-8 tab"
        >
          Mongkey
        </button>
      </li>
      <li class="mr-[30px]">
        <button
          @click="tab('Cars', $event)"
          class="bg-mybrown gardmenu lg:bg-mybrown rounded-full py-4 px-8 tab"
        >
          Cars
        </button>
      </li>
      <li class="mr-[30px]">
        <button
          @click="tab('Art', $event)"
          class="bg-mybrown gardmenu lg:bg-mybrown rounded-full py-4 px-8 tab"
        >
          Art
        </button>
      </li>
    </ul>
    <ul
      ref="tabbody"
      class="flex flex-wrap gap-6 justify-center mt-[40px] min-h-[836px] fadertab"
    >
      <li
        v-for="(nft, index) in limited"
        :key="index"
        class="card p-4 rounded-xl bg-white w-full md:w-1/4 sm:w-2/4 sm:h-[100%] lg:w-[285px]"
      >
        <img
          class="w-full aspect-square rounded-xl object-cover sm:h-[100%]"
          :src="nft.src"
          alt=""
        />
        <h5 class="text-black font-bold">{{ nft.title }}</h5>
        <div class="flex justify-between border-b border-mygery py-2">
          <div class="flex items-center">
            <img
              class="w-[21px] h-[21px] mr-2"
              src="../assets/icons/ETH.png"
              alt=""
            />
            <div class="text-medpurple">{{ nft.price }}</div>
          </div>

          <div class="text-medpurple">1 / {{ nft.supply }}</div>
        </div>
        <div class="flex justify-between items-center mt-4">
          <div
            class="bg-mylitepurple text-myblue px-4 py-2 rounded-full text-nowrap"
          >
            {{ nft.time }}
          </div>
          <div class="text-myblue font-bold text-nowrap">
            <button>Place a bid</button>
          </div>
        </div>
      </li>
    </ul>

    <div class="flex justify-center items-center w-full mt-6">
      <button
        class="lg:gardbut bg-myblue w-full lg:w-[200px] rounded-full py-4 px-8"
      >
        View More
      </button>
    </div>
  </div>
</template>
