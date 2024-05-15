<template>
  <main
    class="w-full flex flex-col justify-center items-center gap-6 pt-24 pb-24 bg-secondary"
  >
    <form
      name="contact"
      class="flex flex-col gap-6 max-w-[800px] w-[80%] m-auto"
      data-netlify="true"
    >
      <h1 class="text-btn font-semibold text-2xl w-full">יצירת קשר</h1>

      <input
        name="name"
        type="text"
        class="rounded-2xl p-2 pt-1 bg-primary"
        placeholder="שם מלא"
        required
      />
      <input
        name="email address"
        type="email"
        class="rounded-2xl p-2 pt-1 bg-primary text-txt"
        placeholder="אימייל"
        required
      />
      <textarea
        v-model="message"
        name="text"
        class="rounded-2xl p-2 pt-1 bg-primary text-txt"
        placeholder="הודעה"
        @input="isFocused = true"
        @blur="isFocused = false"
      ></textarea>
      <input
        class="p-2 rounded-2xl bg-btn text-white font-bold w-full m-auto"
        type="submit"
        value="שלח"
        :disabled="!rule"
      />
    </form>
  </main>
</template>

<script setup>
const message = ref();
const isFocused = ref(false);
const rule = computed(() => {
  const msgLength = message.value?.trim().length;
  return msgLength >= 10 && msgLength <= 200;
});
</script>
<style scoped></style>
