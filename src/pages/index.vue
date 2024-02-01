<script setup lang="ts">
import Tester from "@/components/Tester.vue";
import { defineAsyncComponent } from "vue";

const Kombobox = defineAsyncComponent(
  () => import("@/components/Kombobox.vue")
);
const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
</script>
<template>
  <div class="max-w-lg mx-auto pt-10 grid grid-cols-1 gap-4 min-h-screen">
    <div
      class="fixed top-0 left-0 w-full flex items-center justify-center z-30"
    >
      <Navbar />
    </div>
    <div class="h-fit">
      <Tester />
      <Kombobox />
    </div>
  </div>
</template>
