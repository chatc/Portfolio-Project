<template>
  <div style="margin-top: 1.75rem">
    <button>Send Message</button>
  </div>
</template>

<script>
export default { name: "ButtonComponent" };
</script>

<style scoped>
button {
  padding: 0.625rem 1rem;
  color: white;
  letter-spacing: 0.025em;
  background-color: #6366f1;
  transition-duration: 500ms;
  border-radius: 0.5rem;
  border: 1px solid rgb(13, 36, 56);
  font-size: 100%;
  font-weight: 500;
  line-height: inherit;
}

button:hover {
  background-color: #4f46e5;
}
</style>
