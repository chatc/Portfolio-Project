<template>
  <div class="footer-container">
    <div class="footer">
      <h1>Follow me</h1>
      <ul>
        <a href="https://github.com/chatc" target="_blank">
          <font-awesome-icon
            icon="fa-brands fa-github"
            style="font-size: 1.75rem"
        /></a>
      </ul>
    </div>

    <div style="padding-left: 1.5rem; padding-right: 1.5rem">
      <h2 style="text-align: center; margin-bottom: 1rem">Contact details</h2>
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
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer-container {
  max-width: 1020px;
  margin: auto;
  padding-right: 6rem;
  padding-left: 6rem;
}

.footer {
  margin-top: 5rem;
  padding-top: 5rem;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: rgb(16 45 68);
}

h1 {
  margin: 0;
  margin-bottom: 1.25rem;
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.5rem;
  text-align: center;
}

ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 0;
}

a {
  padding: 1rem;
  background-color: rgb(30 56 81);
  color: rgb(156 163 175);
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: color 0.5s, background-color 0.5s;
  display: inline-block;
}

a:hover {
  color: #6366f1;
}
</style>
