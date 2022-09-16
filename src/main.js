import { createApp } from "vue";
import App from "./App.vue";
import ActiveElement from "./components/ActiveElement"
import KnowledgeBase from "./components/KnowledgeBase"
import KnowledgeGrid from "./components/KnowledgeGrid"
import KnowledgeElement from "./components/KnowledgeElement"

const app = createApp(App);
app.component('active-element', ActiveElement);
app.component('knowledge-base', KnowledgeBase);
app.component('knowledge-grid', KnowledgeGrid);
app.component('knowledge-element', KnowledgeElement);

app.mount("#app");
