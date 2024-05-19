<script setup>
const { width } = screenWidth();

const isMobile = computed(() => {
  return width.value < 680;
});
const darkMode = useDark();
</script>
<template>
  <main>
    <div class="flex flex-col items-center h-full w-full">
      <div v-show="isMobile" class="w-full top-2 z-30 relative">
        <NuxtImg class="w-[6rem] m-auto" :src="darkMode.getLogo" />
      </div>
      <DarkMode />
      <Hero id="home" />
      <About id="about" />
      <Cards id="cards" />
      <Pricing id="pricing" />
      <Contact id="contact" />
    </div>
  </main>
</template>
