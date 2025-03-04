<template>
  <div>
    <label for="Full name">Full name</label>
    <input type="text" required placeholder="Full name" />
  </div>
  <div style="margin-top: 1.75rem">
    <label for="Email">Email</label>
    <input type="text" required placeholder="Email" />
  </div>
  <div style="margin-top: 1.75rem">
    <label for="Subject">Subject</label>
    <input type="text" required placeholder="Subject" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
};
</script>

<style scoped>
label {
  line-height: 1.75rem;
  display: block;
  margin-bottom: 0.5rem;
}

input {
  width: 90%;
  padding: 0.75rem 1.25rem;
  border: 1px solid rgb(13, 36, 56, 0.5);
  color: rgb(255, 255, 255, 0.8);
  background-color: rgb(30 56 81);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
}
</style>
>
