<script setup>
const { width } = screenWidth();
const { scroll } = scrolling();

const isMobile = computed(() => {
  return width.value < 680;
});

const isScrolling = computed(() => {
  return scroll.value;
});
</script>

<template>
  <main v-show="width">
    <Navbar v-if="!isMobile" class="w-full h-16 relative border-b-2" />
    <Sidebar
      :class="{ hidden: isScrolling }"
      class="sidebar w-[60px] z-20 top-[150px] right-0 fixed"
      v-else
    />
    <slot />
  </main>
</template>

<style scoped>
.sidebar {
  transition: transform 0.4s ease-out;
}
.hidden {
  transform: translateX(100%);
}
</style>
