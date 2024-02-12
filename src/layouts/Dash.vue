<script setup lang="ts">
import DashNavbar from "@/components/inkia/Navbar.vue";
</script>
<template>
  <div>
    <DashNavbar />
    <div class="max-w-[1280px] p-4 mx-auto">
      <RouterView />
    </div>
  </div>
</template>
