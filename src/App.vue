<template>
  <div
    class="relative flex h-full w-full flex-col bg-gradient-to-b from-orange-700/20 via-amber-400/20 via-20% via-80% to-lime-700/20"
  >
    <WebHeader></WebHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import WebHeader from "@/components/WebHeader";

export default {
  name: "App",
  components: {
    WebHeader,
  },
};
</script>
