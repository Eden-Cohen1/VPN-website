<template>
  <main>
    <div class="flex flex-col items-center h-full w-full">
      <div :class="{ relative: isMobile }" class="absolute top-2 z-30">
        <NuxtImg class="w-[6rem]" :src="logo" />
      </div>
      <DarkMode @mode="changeLogo" />
      <Hero id="home" />
      <About id="about" />
      <Cards id="cards" />
      <Pricing id="pricing" />
      <Contact id="contact" />
    </div>
  </main>
</template>

<script setup>
const logo = ref("logo-light.png");
const { width } = screenWidth();

const isMobile = computed(() => {
  return width.value < 680;
});
const changeLogo = (mode) => {
  if (mode) {
    console.log("dark");
    logo.value = "logo-dark.png";
  } else {
    logo.value = "logo-light.png";
    console.log("light");
  }
};
</script>
