<template>
  <form @submit.prevent="onSendMessage">
    <div>
      <label for="Full name">Full name</label>
      <input type="text" required placeholder="Full name" v-model="fullname" />
    </div>
    <div style="margin-top: 1.75rem">
      <label for="Email">Email</label>
      <input type="email" required placeholder="Email" v-model="email" />
    </div>
    <div style="margin-top: 1.75rem">
      <label for="Subject">Subject</label>
      <input type="text" required placeholder="Subject" v-model="subject" />
    </div>

    <div style="margin-top: 1.75rem">
      <label for="Message">Message</label>
      <textarea
        type="text"
        name="message"
        id="message"
        required
        placeholder="Message"
        v-model="message"
        cols="14"
        rows="6"
      ></textarea>
    </div>

    <div style="margin-top: 1.75rem">
      <button type="submit">Send Message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      fullname: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    onSendMessage() {
      // แสดงข้อมูลที่ผู้ใช้กรอก
      console.log("Full Name:", this.fullname);
      console.log("Email:", this.email);
      console.log("Subject:", this.subject);
      console.log("Message:", this.message);
    },
  },
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

textarea {
  width: 90%;
  padding: 0.5rem 1.25rem;
  border: 1px solid rgb(13, 36, 56, 0.5);
  color: rgb(255, 255, 255, 0.8);
  background-color: rgb(30 56 81);
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
}

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
  cursor: pointer;
}

button:hover {
  background-color: #4f46e5;
}
</style>
