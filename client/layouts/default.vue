<template>
  <div>
    <Navbar />
    <div class="pt-20">
      <NuxtPage />
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  mounted() {
    console.log("Layout loaded!"); // Debug message
  },
};
</script>
