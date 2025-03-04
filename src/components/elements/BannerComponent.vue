<template>
  <div class="content">
    <div class="text">
      <div>
        <h1>HI,I'AM <br />CHATCHAWAN</h1>
        <span style="color: rgb(156 163 175)"
          >Currently studying website development. and looking for a place to
          work.</span
        >
      </div>
    </div>
    <img src="/images/banner.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
.content {
  max-width: 1020px;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 50px;
  height: 400px;
  display: flex;
}
.text {
  font-size: 1.5rem;
  text-align: center;
  color: aliceblue;
  display: flex;
  align-items: center;
}
h1 {
  margin-bottom: 5px;
}
span {
  width: 50%;
}

.picture {
  width: 100px;
}
</style>
