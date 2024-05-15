<template>
  <div
    class="h-[300px] w-[300px] xl:w-[400px] absolute left-[5vw] bottom-60 opacity-40 xl:opacity-50"
  >
    <NuxtImg
      class="float1 sm:left-0 left-20 relative z-10 max-w-40 h-auto bottom-40 sm:bottom-0 rounded-full"
      :src="`bg-1.png`"
    />
    <NuxtImg
      class="float2 left-60 bottom-32 relative z-10 max-w-48 h-auto opacity-0 lg:opacity-100 rounded-full min-[1800px]:left-[20rem]"
      :src="`bg-5.png`"
    />
    <NuxtImg
      class="float3 z-10 max-w-40 h-auto relative sm:left-0 sm:bottom-10 left-[-8rem] bottom-[-50px] rounded-full min-[1800px]:left-[-10rem]"
      :src="`bg-3.png`"
    />
    <NuxtImg
      class="float4 sm:left-64 left-28 sm:bottom-44 bottom-60 relative z-10 max-w-40 h-auto lg:opacity-100 rounded-full min-[1800px]:left-[10rem]"
      :src="`bg-4.png`"
    />
    <NuxtImg
      class="float4 left-96 bottom-[50rem] relative z-10 max-w-40 h-auto opacity-0 lg:opacity-100 rounded-full min-[1800px]:left-[40rem]"
      :src="`bg-3.png`"
    />
  </div>
</template>

<style scoped>
.float1 {
  animation: float 7s ease-in-out infinite;
}
.float2 {
  animation: float 5s ease-in-out infinite;
  box-sizing: border-box;
}
.float3 {
  animation: float 6s ease-in-out infinite;
}
.float4 {
  animation: float 7s ease-in-out infinite;
}

.dark .float1 {
  animation: dark-float 7s ease-in-out infinite;
}
.dark .float2 {
  animation: dark-float 5s ease-in-out infinite;
  box-sizing: border-box;
}
.dark .float3 {
  animation: dark-float 6s ease-in-out infinite;
}
.dark .float4 {
  animation: dark-float 7s ease-in-out infinite;
}
.dark img {
  opacity: 100% !important;
}
</style>
