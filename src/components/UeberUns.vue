<template>
  <h1>{{ title_info_1 }}</h1>
  <article>{{ info_1 }}</article>
</template>

<script>
export default {
  data() {
    return {
      title_info_1: "Das Orchester",
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
