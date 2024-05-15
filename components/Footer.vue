<template>
  <main class="flex flex-col h-[25vh] bg-primary text-txt">
    <h2 class="text-lg font-bold m-auto mb-2 mt-4">דברו איתנו</h2>
    <ul
      class="flex gap-[2.5rem] min-h-[6rem] w-full justify-center items-center border-none"
    >
      <li class="whatsapp">
        <a href="https://wa.me/+972536241757" target="_blank"
          ><Icon name="formkit:whatsapp"
        /></a>
      </li>
      <li class="linkdin">
        <a href="https://www.linkedin.com/in/eden-co/" target="_blank"
          ><Icon name="bi:linkedin"
        /></a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
svg {
  width: 3rem !important;
  height: auto !important;
  color: var(--dark-bg-main);
}

.whatsapp svg {
  width: 3.4rem !important;
  height: auto !important;
}
.whatsapp :hover {
  color: #2ec452;
}

.linkdin :hover {
  color: #0077b5;
}
a:hover {
  background-color: transparent !important;
}
</style>
