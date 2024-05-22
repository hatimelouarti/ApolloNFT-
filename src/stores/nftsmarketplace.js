import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const nftsstore = defineStore("nftsmarketplace", () => {
  const nftslist = ref([
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/1.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/2.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/2.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/2.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/2.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/3.png",
    },

    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/5.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/6.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/7.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/8.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
  ]);
  const nftslistAbst = ref([
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/8.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
  ]);
  const nftslistMongkey = ref([
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/8.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
  ]);

  const nftslistcars = ref([
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/8.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
  ]);
  const nftslistArts = ref([
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/8.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
    {
      title: "ArtCrypto",
      price: "0.25",
      supply: "32",
      time: "3h 25m 3s",
      category: "hopeape",
      src: "imgmarket/9.png",
    },
  ]);
  return {
    nftslist,
    nftslistAbst,
    nftslistMongkey,
    nftslistcars,
    nftslistArts,
  };
});
