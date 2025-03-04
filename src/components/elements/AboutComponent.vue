<template>
  <div class="display">
    <div class="left"><img src="/images/myphoto.jpg" alt="" /></div>

    <div class="right">
      <h3>About Me</h3>
      <p>
        Hello, I'm Chatchawan Chompoowong, I'm 30 years old. I graduated with a
        bachelor's degree from King Mongkut's University Of Technology North
        Bangkok in Tools & Die Engineering Technology. I have experience working
        in a company as a plastic mold engineer. I am currently studying website
        design.
      </p>
      <h3>Strengths</h3>
      <p>Love learning new things and can learn quickly.</p>
      <h3>Skill</h3>
      <p>HTML, CSS, JAVASCRIPT, VUE JS, PHOTOSHOP</p>
    </div>
  </div>
</template>

<style scoped>
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
}

p {
  line-height: 1.5;
  margin-top: 0;
  margin-bottom: 0px;
  color: rgb(156 163 175);
}
</style>
