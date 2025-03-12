<template>
  <div class="content">
    <div>
      <h1>Project Portfolio</h1>
    </div>

    <div class="display">
      <div class="left">
        <a href="https://crud-project-sable.vercel.app/" target="bank">
          <img src="/images/CRUD.png" alt=""
        /></a>
      </div>

      <div class="right">
        <div>
          <h3>CRUD Project</h3>
          <p>Exercise Projects. Create , Read , Update , Delete, from API</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
};
</script>

<style scoped>
.content {
  max-width: 1020px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 50px;
  height: 400px;
  text-align: center;
}

.display {
  max-width: 1020px;
  margin: auto;
  display: flex;
}
.left {
  margin-top: 30px;
  height: 500px;
}
img {
  max-width: 100%;
  border-radius: 0.5rem;
  background: rgb(16, 45, 68, 0.5);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
}
.right {
  margin-top: 30px;
  margin-left: 30px;
  gap: 10px;
}
h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  color: aliceblue;
  text-align: left;
}

p {
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0px;
  color: rgb(156 163 175);
  text-align: left;
}
</style>
