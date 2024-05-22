<script setup>
import "../scroll.js";
import section1 from "@/components/section1.vue";
import section2 from "@/components/section2.vue";
import section3 from "@/components/section3.vue";
import section4 from "@/components/section4.vue";
import section5 from "@/components/section5.vue";

import secfooter from "@/components/secfooter.vue";
</script>

<template>
  <section1></section1>

  <div class="w-full mt-[100px]">
    <section2></section2>
    <section3></section3>
    <div class="relative">
      <section4></section4>

      <section5></section5>

      <secfooter></secfooter>
    </div>
  </div>
</template>
<style scoped></style>
