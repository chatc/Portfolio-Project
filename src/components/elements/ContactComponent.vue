<template>
  <div class="container">
    <div class="left">
      <div class="form">
        <p
          style="
            margin: 0;
            margin-bottom: 2rem;
            font-size: 1.5rem;
            line-hight: 2rem;
          "
        >
          Contact Form
        </p>
        <form action="#">
          <InputComponentVue />
          <TextareaComponentVue />
          <ButtonComponentVue />
        </form>
      </div>
    </div>

    <div class="right">
      <div
        style="text-align: left; padding-left: 1.5rem; padding-right: 1.5rem"
      >
        <h2>Contact details</h2>
        <ul style="list-style: none; margin: 0; padding: 0">
          <li>
            <font-awesome-icon
              icon="fa-solid fa-location-dot"
              class="font-awesome-icon"
            />
            <p>132 Moo 3 Duanyai Wanghin Sisaket 33270</p>
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="font-awesome-icon"
            />
            <p>chatchom864@gmail.com</p>
          </li>
          <li>
            <font-awesome-icon
              icon="fa-solid fa-phone"
              class="font-awesome-icon"
            />
            <p>099-563015-7</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponentVue from "../reusable/ButtonComponent.vue";
import InputComponentVue from "../reusable/InputComponent.vue";
import TextareaComponentVue from "../reusable/TextareaComponent.vue";

export default {
  name: "ContactComponent",

  components: { InputComponentVue, TextareaComponentVue, ButtonComponentVue },
};
</script>

<style scroped>
.container {
  max-width: 1020px;
  margin: auto;
  display: flex;
  margin-top: 2.5rem;
  padding: 2.5rem;
  align-items: flex-start;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
  align-items: flex-start;
}

.form {
  background: rgb(16, 45, 68, 0.5);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 0.75rem;
  margin: 1rem;
  padding: 1.75rem;
  max-width: 36rem;
  text-align: left;
  line-height: 2;
}

h2 {
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
}

li {
  display: flex;
}
.font-awesome-icon {
  font-size: 1.1rem;
  width: 1.25rem;
  margin-right: 1rem;
  color: rgb(156 163 175);
}

p {
  margin-bottom: 1rem;
  margin-top: 0;
  text-decoration: none;
}
</style>
