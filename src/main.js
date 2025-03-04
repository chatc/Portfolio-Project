import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faSun,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
/*add free-brands-svg-icons*/

/* add icons to the library */
library.add(
  faSun,
  faLocationDot,
  faEnvelope,
  faPhone,
  faGithub,
  faInstagram,
  faFacebook
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router); // Use Vue Router in your app
app.mount("#app");
