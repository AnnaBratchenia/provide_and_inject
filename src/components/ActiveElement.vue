<template>
  <div class="active_element">
    <h1>{{ topicTitle }}</h1>
    <p class="active_text">{{ fullText }}</p>
  </div>
</template>
<script>
export default {
  props: ["topicTitle", "fullText"],
};
</script>

<style>
.active_element {
  border: 2px solid #691d436b;
  width: 700px;
  padding: 10px 20px;
  margin: 20px auto;
}
h1 {
  text-align: center;
}
.active_text {
  font-size: 24px;
  line-height: 1.5;
}
</style>
