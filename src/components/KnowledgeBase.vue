<template>
  <div class="knowledge_base">
    <p class="base_title">Select a topic</p>
    <knowledge-grid
      v-bind:topics="topics"
      v-on:select-topic="$emit('select-topic', $event)"
    ></knowledge-grid>
  </div>
</template>

<script>
export default {
  props: ["topics"],
  emits: ["select-topic"],
};
</script>
<style>
.knowledge_base {
  margin: 20px 20px;
  padding: 25px;
}
.base_title {
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
