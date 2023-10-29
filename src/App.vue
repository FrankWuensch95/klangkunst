<template>
  <div class="relative flex h-full w-full flex-col">
    <WebHeader></WebHeader>
    <!-- only visible on small screens -->
    <span
      id="menu"
      class="absolute right-0 top-16 z-20 hidden w-[60%] divide-y divide-stone-400 rounded-bl-xl bg-stone-200 text-lg text-stone-800/50 shadow-xl shadow-stone-400/70 xl:hidden"
    >
      <router-link
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav === 'Über uns' ? '/ueber_uns' : `/${nav.toLowerCase()}`"
        class="group flex h-20 w-full justify-center whitespace-nowrap text-stone-800/50 hover:cursor-pointer"
      >
        <div
          class="flex h-full w-full items-center justify-end pr-8 hover:text-stone-800"
        >
          {{ nav }}
        </div>
      </router-link>
    </span>
    <span class="h-full w-full px-8 pb-12 pt-10 xl:px-16 xl:pb-16 xl:pt-16">
      <div
        id="content"
        class="flex h-full w-full flex-col gap-y-4 pt-12 text-stone-800 xl:pt-24"
      >
        <router-view></router-view>
      </div>
    </span>
  </div>
</template>

<script>
import WebHeader from "@/components/WebHeader.vue";

export default {
  name: "App",
  components: {
    WebHeader,
  },
  data() {
    return {
      nav_title: "Klangkunst Manufaktur",
      navs: ["Über uns", "Geschichte", "Dirigent", "Aktuelles", "Galerie"],
    };
  },
};
</script>
