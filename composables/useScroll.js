export function scrolling() {
  const scroll = ref();
  let scrollTimer;
  function update() {
    scroll.value = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => {
      scroll.value = false;
    }, 800);
  }

  onMounted(() => {
    document.body.addEventListener("scroll", update);
    update();
  });
  onUnmounted(() => {
    document.body.removeEventListener("scroll", update);
  });
  return { scroll };
}
