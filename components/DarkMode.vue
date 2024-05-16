<script setup>
import { animate } from "motion";

const darkMode = ref(false);
const buttonSwitch = ref();

const toggleDarkMode = (emit) => {
  darkMode.value = !darkMode.value;
  document.documentElement.classList.toggle("dark", darkMode.value);
  if (darkMode.value) {
    animate(buttonSwitch.value, { x: [0, "100%"], duration: 300 });
  } else {
    animate(buttonSwitch.value, { x: ["100%", 0], duration: 300 });
  }
  emit("mode", darkMode.value);
};
defineEmits(["ChangeMode"]);
</script>

<template>
  <div
    @click="toggleDarkMode($emit)"
    class="left-5 top-1 mt-4 ml-3 flex border-[1px] border-borderColor w-14 h-[30px] rounded-full bg-secondary cursor-pointer hover:border-slate-400 absolute z-30 justify-end"
  >
    <button
      class="text-txt w-[27px] rounded-[50%] border-[1px] border-borderColor bg-primary m-atuo items-center justify-center pb-0.5"
      ref="buttonSwitch"
    >
      <Icon v-if="darkMode" name="uil:moon" class="w-1 h-auto text-txt" />
      <Icon v-else name="uil:sun" class="w-full h-auto text-txt" />
    </button>
  </div>
</template>

<style scoped>
svg {
  width: 1.2rem;
  height: auto;
}
html {
  -webkit-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}
</style>
