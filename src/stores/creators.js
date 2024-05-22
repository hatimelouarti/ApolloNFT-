import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const creatorsstore = defineStore("creators", () => {
  const creatorslist = ref([
    {
      name: "Eka Prakasa",
      avatar: "creators/1.svg",
      total: "13.6",
    },
    {
      name: "Emil Tirtayasa Sinaga ",
      avatar: "creators/2.png",
      total: "9.6",
    },
    {
      name: "Dodo Opung Utama",
      avatar: "creators/3.png",
      total: "23.90",
    },
    {
      name: "Emil Nainggolan",
      avatar: "creators/4.png",
      total: "15.10",
    },
    {
      name: "Eja Nainggolan",
      avatar: "creators/5.png",
      total: "13.6",
    },
    {
      name: "Among Suryono",
      avatar: "creators/6.png",
      total: "14.8",
    },
  ]);

  return { creatorslist };
});
