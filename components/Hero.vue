<script setup></script>
<template>
  <main
    class="relative top-0 flex w-screen items-end border-b-[1px] border-borderColor pt-14 align-middle overflow-hidden h-[800px]"
  >
    <div class="absolute h-[80%] top-12">
      <NuxtImg
        class="big-img relative opacity-30 rounded-full right-[-100rem] md:right-[-25rem] h-full mt-auto"
        :src="`bg-right.png`"
      />
    </div>
    <Floaters />
    <div
      class="flex flex-col m-auto mb-auto mt-16 gap-12 lg:text-[3.3rem] sm:m-3 sm:mr-12 text-txt z-10 text-[2rem] rounded-[3rem] sm:p-8"
    >
      <div class="flex flex-col items-center justify-center gap-2">
        <h1
          class="sm:ml-auto relative font-bold text-btn text-[3rem] lg:text-md"
        >
          <span class="text-txt">MY-</span>VPN
        </h1>
        <h1
          class="sm:ml-auto relative mb-2 font-bold w-full text-[1.5rem] sm:text-[2rem]"
        >
          הגנה מוחלטת בלחיצת כפתור.
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

<style scoped>
main {
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.151);
}
svg {
  margin-left: auto;
}
.dark .big-img {
  box-shadow: -10px 0px 10px 1px #aaaaaa;
}
.big-img {
  box-shadow: -10px 0px 10px 1px #000000;
}
</style>
