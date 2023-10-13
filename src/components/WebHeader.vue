<template>
  <div
    class="w-full h-24 shadow-lg text-3xl xl:text-xl text-stone-800/70 bg-lime-100 flex justify-between items-center fixed z-10 overflow-hidden relative"
  >
    <span id="homelink" class="px-8 h-24 flex items-center bg-white/50 whitespace-nowrap">
    <a
      v-if="typeof nav_title.link !== 'undefined'"
      :href="nav_title.link"
      class="appearance-none hover:text-stone-800 hover:cursor-pointer"
    >
      {{ nav_title.text }}
    </a>
    <a
      v-else
      class="appearance-none hover:text-stone-800 hover:cursor-auto"
    >
      {{ nav_title.text }}
    </a>
    </span>
    <span class="flex w-full gap-x-24 items-center">
      <a
        v-for="(nav, index) in navs"
        :key="index"
        href=""
        class="group w-full flex justify-end px-8 py-12 text-right {%if nav.link%}hover:cursor-pointer{%else%}cursor-auto{%endif%}"
      >
        <div
          class="{%if nav.link%}hover:text-stone-800 group-hover:underline{%endif%}"
        >
          {{ nav.text }}
        </div>
      </a>
    </span>
  </div>
</template>

<script>
import WebHeader from "@/components/WebHeader";

export default {
  name: WebHeader,
  data() {
    return {
      title: "Klangkungst Manufaktur e.V.",
      nav_title: {
        text: "Klangkunst Manufaktur",
        link: "index.html",
      },
      navs: [
        { text: "Über uns", link: "index.html" },
        { text: "Geschichte" },
        { text: "Dirigent", link: "dirigent.html" },
        { text: "Aktuelles" },
        { text: "Galerie" },
      ],
      title_info_1: "Über uns",
      info_1: `Die Klangkunst Manufaktur ist ein Orchester, das sich zweimal pro Jahr zu musikalischen 
        Projekten zusammenfindet um in intensiven Proben ein Konzertprogramm zu erarbeiten. 
        Es besteht vor allem aus musikbegeisterten Amateuren und einigen professionellen Musikern 
        aus ganz Deutschland und teils aus dem benachbarten Ausland. Die meisten Musiker verbindet 
        die gemeinsame Arbeit mit dem Dirigenten Bertram Schade, die in verschiedensten Ensembles zu 
        unterschiedlichsten Zeiten teils über viele Jahre gewachsen ist. In der Klangkunst Manufaktur 
        treffen, zur großen Freude des Dirigenten, Musiker aus diesen verschiedenen Lebens- und Arbeitsphasen 
        zusammen, um gemeinsam zu musizieren und mit diesem neuen Klang auch die alten Verbindungen wieder zu beleben.`,
    };
  },
};
</script>
