<script setup>
import { animate } from "motion";

const darkMode = useDark();
const buttonSwitch = ref();

const toggleDarkMode = (emit) => {
  darkMode.isDark = !darkMode.isDark;
  document.documentElement.classList.toggle("dark", darkMode.isDark);
  if (darkMode.isDark) {
    animate(buttonSwitch.value, { x: [0, "100%"], duration: 300 });
  } else {
    animate(buttonSwitch.value, { x: ["100%", 0], duration: 300 });
  }
};
</script>

<template>
  <div
    @click="toggleDarkMode"
    class="left-5 top-1 mt-4 ml-3 flex border-[1px] border-borderColor w-14 h-[30px] rounded-full bg-secondary cursor-pointer hover:border-slate-400 absolute z-30 justify-end"
  >
    <button
      class="text-txt w-[27px] rounded-[50%] border-[1px] border-borderColor bg-primary m-atuo items-center justify-center pb-0.5"
      ref="buttonSwitch"
    >
      <Icon
        v-if="darkMode.isDark"
        name="uil:moon"
        class="w-1 h-auto text-txt"
      />
      <Icon v-else name="uil:sun" class="w-full h-auto text-txt" />
    </button>
  </div>
</template>

<style scoped>
svg {
  width: 1.2rem;
  height: auto;
}
</style>
