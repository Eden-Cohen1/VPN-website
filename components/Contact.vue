<template>
  <main
    class="w-full flex flex-col justify-center items-center gap-6 pt-24 pb-24 bg-primary"
  >
    <form
      name="contact"
      class="flex flex-col gap-6 max-w-[800px] w-[80%] m-auto"
      @submit.prevent="sendEmail"
    >
      <h1 class="text-btn font-semibold text-2xl w-full">יצירת קשר</h1>

      <CustomInput
        name="name"
        v-model="formData.name"
        type="text"
        placeholder="שם מלא"
        :errors="res.getErrors('name')"
        @update:modelValue="validate('name')"
        as="input"
        required
      />
      <CustomInput
        name="email address"
        v-model="formData.email"
        type="email"
        placeholder="אימייל"
        :errors="res.getErrors('email')"
        @update:modelValue="validate('email')"
        as="input"
        required
      />
      <CustomInput
        name="phone number"
        v-model="formData.number"
        placeholder="מספר פלאפון"
        :errors="res.getErrors('number')"
        @update:modelValue="validate('number')"
        as="input"
        required
      />
      <CustomInput
        v-model="formData.message"
        class="h-[7.5rem] text-top break-words resize-none overflow-auto"
        name="text"
        placeholder="הודעה"
        :errors="res.getErrors('message')"
        @update:modelValue="validate('message')"
        as="textarea"
      />
      <input
        class="p-2 rounded-2xl bg-btn text-white font-bold w-[80%] cursor-pointer hover:bg-btnHover ml-auto"
        type="submit"
        value="שלח"
      />
    </form>
  </main>
</template>

<script setup>
import suite from "~/validations/contact.js";

let res = reactive(suite.get());
const { send } = useMail();

const formData = reactive({
  name: "",
  number: "",
  email: "",
  message: "",
});

const sendEmail = async () => {
  console.log("asasdasdasd");
  const result = await send({
    to: "edenlalala23@gmail.com",
    subject: "הודעה חדשה מהאתר",
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone Number: ${formData.number}\nMessage: ${formData.message}`,
  });
  formData.name = "";
  formData.email = "";
  formData.message = "";
  formData.number = "";
};

const validate = () => {
  res = suite({
    name: formData.name,
    number: formData.number,
    email: formData.email,
  });
};
</script>
<style scoped></style>
