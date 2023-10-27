<template>
  <div
    class="relative z-10 flex h-24 w-full items-center justify-between overflow-hidden bg-lime-100 text-3xl text-stone-800/70 shadow-lg xl:text-xl"
  >
    <span class="flex w-full items-center gap-x-24">
      <span class="header flex h-24 items-center whitespace-nowrap bg-white/50 px-8">{{ nav_title }}</span>
      <span class="flex w-full items-center gap-x-24">
        <router-link
          v-for="(nav, index) in navs"
          :key="index"
          :to="nav === 'Über uns' ? '/<%=BASE_URL%>/ueber_uns' : `/<%=BASE_URL%>/${nav.toLowerCase()}`"
          class="group flex w-full justify-center whitespace-nowrap px-8 py-12 hover:cursor-pointer"
        >
          <div class="hover:text-stone-800 group-hover:underline">
            {{ nav }}
          </div>
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
import WebHeader from "@/components/WebHeader";
import UeberUns from "@/components/UeberUns";
import InfoDirigent from '@/components/InfoDirigent';

export default {
  name: WebHeader,
  components: UeberUns, InfoDirigent,
  data() {
    return {
      title: "Klangkungst Manufaktur e.V.",
      nav_title: "Klangkunst Manufaktur",
      navs: ["Über uns", "Geschichte", "Dirigent", "Aktuelles", "Galerie"],
    };
  },
};
</script>
