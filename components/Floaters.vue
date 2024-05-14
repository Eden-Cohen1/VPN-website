<template>
  <div
    class="h-[300px] w-[300px] xl:w-[400px] absolute left-0 bottom-60 opacity-40 xl:opacity-50"
  >
    <NuxtImg
      class="float1 sm:left-0 left-20 relative z-10 max-w-40 h-auto bottom-24 sm:bottom-0 rounded-full"
      :src="`bg-1.png`"
    />
    <NuxtImg
      class="float2 left-60 bottom-16 relative z-10 max-w-48 h-auto opacity-0 lg:opacity-100 rounded-full"
      :src="`bg-5.png`"
    />
    <NuxtImg
      class="float3 z-10 max-w-40 h-auto relative sm:left-0 sm:bottom-0 left-[-8rem] bottom-[-50px] rounded-full"
      :src="`bg-3.png`"
    />
    <NuxtImg
      class="float4 left-64 bottom-36 relative z-10 max-w-40 h-auto opacity-0 lg:opacity-100 rounded-full"
      :src="`bg-4.png`"
    />
    <NuxtImg
      class="float4 left-96 bottom-[44rem] relative z-10 max-w-40 h-auto opacity-0 lg:opacity-100 rounded-full"
      :src="`bg-3.png`"
    />
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);

    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);

    transform: translatey(-30px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

@keyframes dark-float {
  0% {
    box-shadow: 0 5px 15px 0px rgba(244, 244, 245, 0.185);

    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(244, 244, 245, 0.185);

    transform: translatey(-30px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(244, 244, 245, 0.185);
    transform: translatey(0px);
  }
}

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
