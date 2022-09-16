<template>
  <div class="Knowledge_element">
    <h2 class="element_title">{{ title }}</h2>
    <p class="element-description">{{ description }}</p>
    <button class="btn" v-on:click="selectTopic(id)">Learn more</button>
  </div>
</template>

<script>
export default {
  inject: ["selectTopic"],
  props: ["title", "description", "id"],
};
</script>
<style>
.Knowledge_element {
  width: 33%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  border: 1px solid #691d436b;
}
.element_title {
  text-align: center;
  padding-top: 10px;
}
.element-description {
  font-size: 18px;
  padding: 0 10px;
}
.btn {
  background-color: #691d436b;
  color: white;
  border: none;
  padding: 10px 0;
  font-size: 18px;
}
</style>
