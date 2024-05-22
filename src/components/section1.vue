<template>
  <div class="scrollfadesec1">
    <div class="section1 flex justify-center mt-[140px]">
      <div class="w-3/3 lg:w-2/3 md:w-full md:px-0 min-w-[360px] px-4">
        <div
          ref="boldtext"
          class="text-[41px] sm:text-[94px] font-extrabold leading-[40px] sm:leading-[90px] max-w-[726px] min-w-[100px] tracking-tight"
        >
          Create Your <br />
          Own
          <span class="text-nowrap text-myblue lg:text-mypurple lg:text-stroke"
            >NFT Dream</span
          ><br /><span class="flex items-center">
            Gallery
            <img
              ref="star"
              class="hidden lg:block"
              src="../assets/icons/Star 1.svg"
              alt=""
            />
          </span>
        </div>
        <div class="flex faderight min-h-[120px] mt-[65px]">
          <div
            class="relative hidden lg:block w-[120px] h-[120px] rounded-full bg-mypurple flex justify-center items-center hover:bg-myblue transition duration-700 ease-in-out"
          >
            <img
              class="absolute"
              style="
                width: 40px;
                height: 40px;
                top: 30%;
                left: 80%;
                transform: translate(-50%, -50%);
              "
              src="../assets/icons/Frame.png"
              alt=""
            />
            <button
              class="absolute"
              style="top: 50%; left: 50%; transform: translate(-50%, -50%)"
            >
              <span class="text-nowrap"> Discover NFT</span>
            </button>
          </div>
          <div class="max-w-[419px] lg:ml-[30px]">
            <p>
              The Largest NFT Marketplace. Automatic and truly unique digital
              creation. Signed and issued by the creator, made possible by
              blockchain technologies
            </p>
          </div>
        </div>
        <button class="bg-myblue w-full lg:hidden rounded-full py-4 px-8">
          Contact Us
        </button>
        <div
          class="w-full relative flex justify-center items-center h-[400px] lg:hidden mt-16"
        >
          <div
            class="w-[470px] min-w-[270px] h-[400px] p-0 m-0 flex justify-center items-center"
          >
            <img
              class="absolute m-auto z-20 translate-x-[-60px] translate-y-[-60px]"
              src="../assets/img/slide3.png"
              alt=""
            />
            <img class="absolute z-30" src="../assets/img/slide1.png" alt="" />

            <img
              class="absolute z-10 translate-x-[60px] translate-y-[60px]"
              src="../assets/img/slide2.png"
            />
          </div>
        </div>
        <div
          class="flex fadein text-center justify-center lg:justify-start gap-20 mt-[100px]"
        >
          <div class="text-[28px] font-bold">
            <div class="text-[16px] font-normal mb-4">Artwork</div>

            {{ displayArtwork }}K
          </div>
          <div class="text-[28px] font-bold">
            <div class="text-[16px] font-normal mb-4">Artist</div>
            {{ displayArtist }}K
          </div>
          <div class="text-[28px] font-bold">
            <div class="text-[16px] font-normal mb-4">Aucition</div>
            {{ displayAucition }}K
          </div>
        </div>
      </div>
      <div class="flex hidden lg:block w-1/2 relative faderight">
        <div
          @mouseleave="animationrightleave"
          @mouseenter="rightimg"
          class="bg-myblue rounded-full absolute translate-y-[130px] translate-x-[190px] opacity-0 w-[360px] aspect-square"
        ></div>
        <img
          @mouseleave="animationrightleave"
          @mouseenter="rightimg"
          ref="right"
          class="absolute w-[273px] h-[326px] rounded-3xl origin-bottom left-[25%] right-[25%] translate-x-[80px] translate-y-[80px]"
          src="../assets/img/13.gif"
        />
        <img
          @mouseleave="animationcenterleave"
          @mouseenter="centerimg"
          ref="center"
          class="w-[273px] h-[326px] rounded-3xl absolute origin-bottom z-20 left-[25%] right-[25%]"
          src="../assets/img/10.gif"
          alt=""
        />
        <div
          @mouseleave="animationleftleave"
          @mouseenter="leftimg"
          class="bg-myblue rounded-full absolute translate-y-[-120px] translate-x-[60px] opacity-0 w-[360px] aspect-square"
        ></div>
        <img
          ref="left"
          @mouseleave="animationleftleave"
          @mouseenter="leftimg"
          class="absolute w-[273px] h-[326px] rounded-3xl origin-bottom left-[25%] right-[25%] translate-x-[-60px] translate-y-[-60px]"
          src="../assets/img/11.gif"
          alt=""
        />
      </div>
    </div>
    <div class="w-full fadein mt-[100px]">
      <ul
        class="flex flex-wrap lg:justify-between space-x-6 justify-center items-center"
      >
        <li><img src="../assets/img/coinba.png" alt="" /></li>
        <li><img src="../assets/img/spoti.png" alt="" /></li>
        <li><img src="../assets/img/slack.svg" alt="" /></li>
        <li><img src="../assets/img/drop.svg" alt="" /></li>
        <li><img src="../assets/img/webflow.svg" alt="" /></li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
//data
let left = ref();
let center = ref();
let right = ref();
let boldtext = ref();
let star = ref();

let Artwork = ref(25.2);
let Artist = ref(15.6);
let Aucition = ref(10.2);

let displayArtwork = ref(0);
let displayArtist = ref(0);
let displayAucition = ref(0);

const animateValue = (displayValue, finalValue, duration = 2000) => {
  let start = 0;
  const end = finalValue;
  const increment = end / (duration / 50);
  const interval = setInterval(() => {
    start += increment;
    if (start >= end) {
      start = end;
      clearInterval(interval);
    }
    displayValue.value = start.toFixed(1);
  }, 50);
};
//image left animation
const leftimg = () => {
  left.value.classList.add("animationleft");
  center.value.classList.add("animationcenter");
};
const animationleftleave = () => {
  left.value.classList.remove("animationleft");

  center.value.classList.remove("animationcenter");
};
// image right animation
const rightimg = () => {
  right.value.classList.add("animationright");
  center.value.classList.add("animationcenterright");
};
const animationrightleave = () => {
  right.value.classList.remove("animationright");

  center.value.classList.remove("animationcenterright");
};

// image center animation
const centerimg = () => {
  right.value.classList.add("translate-x-[170px]");
  left.value.classList.add("translate-x-[-170px]");

  right.value.classList.add("rotate-12");
  left.value.classList.add("-rotate-12");
  right.value.classList.add("duration-700");
  left.value.classList.add("duration-700");
};
const animationcenterleave = () => {
  right.value.classList.remove("translate-x-[170px]");
  left.value.classList.remove("translate-x-[-170px]");

  right.value.classList.remove("rotate-12");
  left.value.classList.remove("-rotate-12");
};

onMounted(() => {
  boldtext.value.classList.add("boldtextanimation");
  setTimeout(() => {
    star.value.classList.add("staranimation");
  }, 1000);
  animateValue(displayArtwork, Artwork.value); // Animate Artwork
  animateValue(displayArtist, Artist.value); // Animate Artist
  animateValue(displayAucition, Aucition.value); // Animate Aucition
});
</script>
<style scoped>
.animationleft {
  animation: wiggleleft 2s forwards;
}
.animationright {
  animation: wiggleright 2s forwards;
}
.animationcenter {
  animation: wigglecenter 2s forwards;
}
.animationcenterright {
  animation: wigglecenterright 2s forwards;
}

@keyframes wiggleleft {
  40% {
    transform: translateX(-140px) rotate(-10deg);
  }

  100% {
    z-index: 20;
  }
}

@keyframes wiggleright {
  40% {
    transform: translateX(130px) rotate(10deg);
  }

  100% {
    z-index: 20;
  }
}
@keyframes wigglecenter {
  40% {
    transform: translateX(100px) rotate(10deg);
  }

  100% {
    z-index: 20;
  }
}
@keyframes wigglecenterright {
  40% {
    transform: translateX(-150px) rotate(-10deg);
  }

  100% {
    z-index: 10;
  }
}
.text-stroke {
  text-shadow: -1px -1px 0 #ffffff4d, 1px -1px 0 #ffffff4d, -1px 1px 0 #ffffff4d,
    1px 1px 0 #000;
}

.staranimation {
  animation: star 2s forwards;
}
@keyframes star {
  0% {
    transform: rotate(90deg);
  }

  100% {
    transform: rotate(-190deg);
  }
}

.boldtextanimation {
  animation: boldtextanim 2s forwards;
}
@keyframes boldtextanim {
  0% {
    opacity: 0;
    transform: translateX(-150px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}

.scrollfadesec1 {
  animation: scrollfadesec1 1s linear both;
  transform-origin: bottom;
  opacity: 1;
  animation-timeline: view(200px);
  animation-range: exit;
}

@keyframes scrollfadesec1 {
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
