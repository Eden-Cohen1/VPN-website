<script setup></script>
<template>
  <main
    class="relative top-0 flex w-screen items-end border-b-[1px] border-borderColor pt-14 align-middle overflow-hidden h-[700px]"
  >
    <div class="absolute h-full">
      <NuxtImg
        class="relative opacity-30 rounded-full right-[-20rem] h-full"
        :src="`bg-right.png`"
      />
    </div>
    <div
      class="h-[300px] w-[200px] absolute left-16 bottom-72 opacity-55 lg:opacity-80"
    >
      <NuxtImg
        class="float1 left-12 relative w-32 h-32 z-10"
        :src="`bg-1.png`"
      />
      <NuxtImg class="float2 left-56 relative z-10" :src="`bg-2.png`" />
      <NuxtImg class="float3 z-10" :src="`bg-3.png`" />
      <NuxtImg
        class="float4 left-64 bottom-36 relative z-10"
        :src="`bg-4.png`"
      />
      <h1 class="text-3xl text-black absolute top-0 left-96">מהיר</h1>
      <h1 class="text-3xl text-black absolute top-24 left-8">אמין</h1>
      <h1 class="text-2xl text-black absolute top-96 left-56">חזק</h1>
      <h1 class="text-2xl text-black absolute top-80 left-96">נוח</h1>
      <h1 class="text-4xl text-black absolute top-72 left-52">עקבי</h1>
      <h1 class="text-xl text-black absolute top-48 left-18">זמין</h1>
      <h1 class="text-3xl text-black absolute top-[30rem] left-18">מכל מקום</h1>
      <h1 class="text-xl text-black absolute top-60 left-0">ללא דאגות</h1>
      <h1 class="text-4xl text-black absolute top-24 left-96">ללא מאמץ</h1>
    </div>
    <div
      class="flex flex-col mb-auto mt-16 gap-12 lg:text-[3.3rem] mr-12 text-gray-900 z-10 text-[2rem] rounded-[3rem] p-8"
    >
      <div>
        <h1 class="ml-auto relative font-bold text-btn">
          <span class="text-gray-900">MY-</span>VPN
        </h1>
        <h1 class="ml-auto relative mb-2 font-bold">
          הגנה מוחלטת בלחיצת כפתור
        </h1>
      </div>
      <ul class="space-y-4 text-2xl font-bold">
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            class="flex-shrink-0 w-8 h-auto text-btn"
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
          <span>חיבור מאובטח מכל מקום. </span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            class="flex-shrink-0 w-8 h-auto text-btn"
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
          <span>חווית גלישה מהירה וחלקה.</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            class="flex-shrink-0 w-8 h-auto text-btn"
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
          <span>מתאים לכל סוגי המכשירים.</span>
        </li>
        <li class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg
            class="flex-shrink-0 w-8 h-auto text-btn"
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
          <span>גישה בטוחה לתכנים בכל רחבי העולם.</span>
        </li>
      </ul>
      <!-- <h1 class="ml-auto relative mt-3 mb-12 font-bold">
        <span class="text-btn">VPN</span> שמשמר את הפרטיות שלך
      </h1> -->
      <button class="btn-primary w-52 text-base font-bold p-4 z-10">
        <NuxtLink to="">לשיחת יעוץ חינם</NuxtLink>
      </button>
    </div>
  </main>
</template>

<style>
h1 {
  text-shadow: 1px 1px 2px #76cff873;
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
