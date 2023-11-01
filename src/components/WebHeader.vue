<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>


<template>
  <div
    class="fixed z-10 flex h-16 w-full items-center justify-between overflow-hidden bg-lime-100 text-xl shadow-lg dark:bg-lime-800 dark:shadow-lime-900/30">
    <div
      class="absolute right-0 top-0 flex h-full max-h-full w-20 items-center justify-center bg-white/50 hover:cursor-pointer hover:text-stone-800 dark:bg-black/10 xl:hidden"
      id="burger" @click="showBurger">
      <iconify-icon icon="iconamoon:menu-burger-horizontal-light" width="50" height="50"></iconify-icon>
    </div>

    <!-- only visible on screens >= 1280px -->
    <span class="flex h-full items-center gap-x-24">
      <div class="header flex h-full items-center whitespace-nowrap px-8">Klangkunst<span class="italic">Manufaktur</span>
      </div>
      <span class="flex w-full items-center gap-x-24 text-stone-800/50 dark:text-white/50 max-xl:hidden">
        <router-link v-for="(nav, index) in navs" :key="index"
          :to="nav === 'Über uns' ? '/ueber_uns' : `/${nav.toLowerCase()}`"
          class="group flex h-16 w-full justify-center whitespace-nowrap hover:cursor-pointer">
          <div class="link flex h-full items-center hover:text-stone-800 dark:hover:text-white"
            @load="setActiveClass">
            {{ nav }}
          </div>
        </router-link>
      </span>
    </span>
    <div class="flex h-full w-16 justify-end hover:cursor-pointer xl:w-24 xl:bg-white/50 dark:xl:bg-black/10">
      <div id="darkModeSwitch" class="group hidden h-full w-24 items-center justify-center px-8 xl:block xl:flex"
        @click="toggleDark()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
          class="h-6 w-6 fill-stone-800/50 dark:fill-white/50">
          <path
            d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" />
        </svg>
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
    setActiveClass() {
      let navs = document.getElementsByClassName('link');
      navs[0].classList.add("active");
    },
    changeDarkModeImage() {
      const doc = document.documentElement;
      const switcher = document.getElementById('darkModeSwitch');

      if (doc.classList.contains('dark')) {
        switcher.innerHTML = `<svg class="h-6 w-6 fill-stone-800/50 dark:fill-white/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-760v-160h80v160h-80Zm266 110-55-55 112-115 56 57-113 113Zm54 210v-80h160v80H760ZM440-40v-160h80v160h-80ZM254-652 140-763l57-56 113 113-56 54Zm508 512L651-255l54-54 114 110-57 59ZM40-440v-80h160v80H40Zm157 300-56-57 112-112 29 27 29 28-114 114Zm283-100q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70-170q0-100-70 170t-170 70Zm0-80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-160Z"/></svg>`
      } else {
        switcher.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="h-6 w-6 fill-stone-800/50 dark:fill-white/50"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>`
      }
    }
  },
};
</script>
