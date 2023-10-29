<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div
    class="fixed z-10 flex h-16 w-full items-center justify-between overflow-hidden bg-lime-100 text-xl shadow-lg dark:bg-lime-800 dark:shadow-lime-900/30 xl:h-24">
    <div
      class="absolute right-0 top-0 flex h-full max-h-full w-20 items-center justify-center bg-white/50 hover:cursor-pointer hover:text-stone-800 dark:bg-black/10 xl:hidden"
      id="burger" @click="showBurger">
      <iconify-icon icon="iconamoon:menu-burger-horizontal-light" width="50" height="50"></iconify-icon>
    </div>

    <!-- only visible on screens >= 1280px -->
    <span class="flex h-full items-center gap-x-24">
      <div class="header flex h-full items-center whitespace-nowrap bg-white/50 px-8 dark:bg-black/10">Klangkunst<span
          class="italic">Manufaktur</span></div>
      <span class="flex w-full items-center gap-x-24 text-stone-800/50 dark:text-white/50 max-xl:hidden">
        <router-link v-for="(nav, index) in navs" :key="index"
          :to="nav === 'Über uns' ? '/ueber_uns' : `/${nav.toLowerCase()}`"
          class="group flex h-24 w-full justify-center whitespace-nowrap hover:cursor-pointer">
          <div class="flex h-full items-center hover:text-stone-800 dark:hover:text-white">
            {{ nav }}
          </div>
        </router-link>
      </span>
    </span>
    <div class="flex h-full w-full justify-end">
      <div class="group flex h-full items-center justify-center bg-white/50 px-8 dark:bg-black/10">
        <img src="../../public/outline-dark-mode.svg" class="hidden h-6 w-6 fill-stone-800/50 xl:block"
          id="darkModeSwitch" @click="toggleDark()">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Klangkungst Manufaktur e.V.",
      navs: ["Über uns", "Geschichte", "Dirigent", "Aktuelles", "Galerie"],
    };
  },
  methods: {
    showBurger() {
      const menu = document.getElementById("menu");
      const burger = document.getElementById("burger");
      const content = document.getElementById("content");
      if (menu && burger && content) {
        menu.classList.toggle("hidden");
        content.classList.toggle("blur-sm");
      }
    },
  },
};
</script>
