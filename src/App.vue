<template>
  <div class="main_item">
    <active-element
      v-bind:topic-title="activeTopic && activeTopic.title"
      v-bind:full-text="activeTopic && activeTopic.fullText"
    >
    </active-element>
    <knowledge-base
      v-bind:topics="topics"
      v-on:select-topic="activateTopic"
    ></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: "belarus",
          title: "Belarus",
          description:
            "Belarus, officially the Republic of Belarus, is a landlocked country in Eastern Europe.",
          fullText:
            "Covering an area of 207,600 square kilometres (80,200 sq mi) and with a population of 9.2 million, Belarus is the 13th-largest and the 20th-most populous country in Europe. The country has a hemiboreal climate and is administratively divided into seven regions. Minsk is the capital and largest city.",
        },
        {
          id: "russia ",
          title: "Russia",
          description:
            "Russia, or the Russian Federation is a transcontinental country spanning Eastern Europe and Northern Asia. ",
          fullText:
            "It is the largest country in the world by area, covering over 17,098,246 square kilometres (6,601,670 sq mi), and encompassing one-eighth of Earth's inhabitable landmass. Russia extends across eleven time zones and borders fourteen countries by land (the most in the world, tied with China). Russia also shares narrow maritime boundaries with two countries.",
        },
        {
          id: "china ",
          title: "China",
          description:
            "Officially the People's Republic of China, is a country in East Asia.",
          fullText:
            " It is the world's most populous country with a population exceeding 1.4 billion people. China spans five geographical time zones and borders fourteen countries by land, the most of any country in the world, tied with Russia. China also has a narrow maritime boundary with the disputed Taiwan.",
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    return {
      topics: this.topics,
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicID) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicID);
      console.log(topicID);
      console.log(this.activeTopic);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main_item {
  width: 900px;
  height: auto;
  margin: 20px auto;
  border: 3px solid #b3b0b0e5;
  box-shadow: 0 20px 5px #d308080a;
}
</style>
