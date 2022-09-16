<template>
  <div class="knowledge_grid">
    <knowledge-element
      v-for="topic in topics"
      v-bind:key="topic.id"
      v-bind:id="topic.id"
      v-bind:title="topic.title"
      v-bind:description="topic.description"
      v-on:select-topic="$emit('select-topic', $event)"
    >
    </knowledge-element>
  </div>
</template>
<script>
export default {
  props: ["topics"],
  emits: ["select-topic"],
};
</script>
<style>
.knowledge_grid {
  display: flex;
  flex-direction: row;

  gap: 20px;
}
</style>
