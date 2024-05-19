<script setup>
const { width } = screenWidth();

const isMobile = computed(() => {
  return width.value < 680;
});

const darkMode = useDark();
// const logo = ref("logo-light.svg");
// const changeLogo = (mode) => {
//   if (mode) {
//     console.log("dark");
//     logo.value = "logo-dark.svg";
//   } else {
//     logo.value = "logo-light.svg";
//   }
// };
</script>

<template>
  <div
    class="w-full flex top-0 mb-0 sticky z-20 border-none bg-primary text-txt"
  >
    <ul class="flex m-5 w-full justify-end absolute right-0 text-lg">
      <div
        :class="{ relative: isMobile }"
        class="md:absolute md:w-full lg:mr-0 top-[-10px] z-20 relative md:mr-16"
      >
        <NuxtImg class="w-[6rem] md:m-auto" :src="darkMode.getLogo" />
      </div>
      <a class="p-5 pt-0 hover:text-btnHover z-30" href="#contact">צור קשר</a>
      <a class="p-5 pt-0 hover:text-btnHover z-30" href="#pricing">חבילות</a>
      <a class="p-5 pt-0 hover:text-btnHover z-30" href="#about">קצת עלינו</a>
      <a class="p-5 pt-0 hover:text-btnHover z-30" href="#home">בית</a>
    </ul>
  </div>
</template>

<style scoped></style>
