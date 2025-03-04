<template>
  <nav class="nav-container">
    <div class="name">
      <router-link
        to="/"
        style="text-decoration: none; color: rgb(156 163 175)"
      >
        Home
      </router-link>
    </div>

    <div class="links">
      <div>
        <router-link
          to="/About"
          style="text-decoration: none; color: rgb(156 163 175)"
          >About Me
        </router-link>
      </div>
      <div>
        <router-link
          to="/Project"
          style="text-decoration: none; color: rgb(156 163 175)"
        >
          Project
        </router-link>
      </div>

      <router-link
        to="/Contact"
        style="text-decoration: none; color: rgb(156 163 175)"
        >Contact
      </router-link>
      <div></div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scroped>
.nav-container {
  max-width: 1020px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.name {
  font-weight: 600;
  font-size: 1.5rem;
}
.links {
  display: flex;
  gap: 30px;
  font-weight: 500;
  font-size: 1.125rem;
}

.button {
  display: flex;
  gap: 20px;
  align-items: center;
}

.hire {
  background: #0593a2;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
}

.icon {
  background: rgb(30 56 81);
  margin: 5px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 10px;
  padding-bottom: 8px;
  border-radius: 10px;
}

.router-link {
  text-decoration: none;
}
</style>
