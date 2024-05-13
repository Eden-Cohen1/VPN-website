<script setup></script>
<template>
  <main
    class="relative top-0 flex w-screen items-end border-b-[1px] border-borderColor pt-14 align-middle overflow-hidden h-[700px]"
  >
    <div class="absolute h-full">
      <NuxtImg
        class="relative opacity-30 rounded-full right-[-100rem] md:right-[-20rem] h-full"
        :src="`bg-right.png`"
      />
    </div>
    <div
      class="h-[300px] w-[300px] absolute left-0 bottom-60 opacity-40 xl:opacity-80"
    >
      <NuxtImg
        class="float1 sm:left-0 left-20 relative z-10 max-w-40 h-auto bottom-24 sm:bottom-0"
        :src="`bg-1.png`"
      />
      <NuxtImg
        class="float2 left-60 bottom-16 relative z-10 max-w-48 h-auto opacity-0 lg:opacity-100"
        :src="`bg-5.png`"
      />
      <NuxtImg
        class="float3 z-10 max-w-40 h-auto relative sm:left-0 sm:bottom-0 left-[-8rem] bottom-[-50px]"
        :src="`bg-3.png`"
      />
      <NuxtImg
        class="float4 left-64 bottom-36 relative z-10 max-w-40 h-auto opacity-0 lg:opacity-100"
        :src="`bg-4.png`"
      />
      <NuxtImg
        class="float4 left-96 bottom-[44rem] relative z-10 max-w-40 h-auto opacity-0 lg:opacity-100"
        :src="`bg-3.png`"
      />
    </div>
    <div
      class="flex flex-col m-auto mb-auto mt-16 gap-12 lg:text-[3.3rem] sm:m-3 sm:mr-12 text-gray-900 z-10 text-[2rem] rounded-[3rem] sm:p-8"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <h1
          class="sm:ml-auto relative font-bold text-btn text-[3rem] lg:text-md"
        >
          <span class="text-gray-900">MY-</span>VPN
        </h1>
        <h1
          class="sm:ml-auto relative mb-2 font-bold w-full text-[1.5rem] sm:text-[2rem]"
        >
          הגנה מוחלטת בלחיצת כפתור
        </h1>
      </div>
      <ul
        class="sm:space-y-4 space-y-6 sm:text-2xl text-[1.15rem] font-bold pr-6 sm:pr-0"
      >
        <li
          class="flex items-center space-x-3 rtl:space-x-reverse justify-center"
        >
          <svg
            class="flex-shrink-0 w-5 sm:w-8 h-auto text-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span class="w-full">חיבור מאובטח מכל מקום. </span>
        </li>
        <li
          class="flex items-center space-x-3 rtl:space-x-reverse justify-center"
        >
          <svg
            class="flex-shrink-0 w-5 sm:w-8 h-auto text-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span class="w-full">חווית גלישה מהירה וחלקה.</span>
        </li>
        <li
          class="flex items-center space-x-3 rtl:space-x-reverse justify-center"
        >
          <svg
            class="flex-shrink-0 w-5 sm:w-8 h-auto text-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span class="w-full">מתאים לכל סוגי המכשירים.</span>
        </li>
        <li
          class="flex items-center space-x-3 rtl:space-x-reverse justify-center"
        >
          <svg
            class="flex-shrink-0 w-5 sm:w-8 h-auto text-btn"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
          <span class="w-full">גישה בטוחה לתכנים בכל העולם.</span>
        </li>
      </ul>
      <!-- <h1 class="ml-auto relative mt-3 mb-12 font-bold">
        <span class="text-btn">VPN</span> שמשמר את הפרטיות שלך
      </h1> -->
      <button
        class="btn-primary w-52 text-base font-bold p-4 z-10 m-auto mt-3 md:m-0"
      >
        <NuxtLink to="">לשיחת יעוץ חינם</NuxtLink>
      </button>
    </div>
  </main>
</template>

<style>
h1 {
  text-shadow: 1px 1px 2px #76cff873;
}
svg {
  margin-left: auto;
}
@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-30px);
  }
  100% {
    transform: translatey(0px);
  }
}
.img1,
.img2,
.img3,
.img4 {
  overflow: hidden;
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  border-color: white;
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
</style>
