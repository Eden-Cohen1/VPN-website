<template>
  <main class="w-full bg-secondary xl:p-20">
    <section class="bg-primary w-[100%] xl:w-[80%] m-auto p-5 rounded-2xl">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-lg text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-txt">
            החבילות שלנו
          </h2>
          <p
            class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            בחרו את החבילה המתאימה ביותר לצרכים שלכם.
          </p>
        </div>
        <div
          class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"
        >
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-secondary text-txt"
          >
            <h3 class="mb-4 text-2xl font-semibold">בסיסי</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              לשימוש עצמי
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">₪99</span>
              <span class="text-gray-500 dark:text-gray-400">/חודש</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-right h-full">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>כתובת IP פרטית</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>מיקום רשת ה-VPN באירופה או ארה"ב לבחירתכם</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold"
                    >עד <span class="text-btn">2</span> גלישות במקביל</span
                  ></span
                >
              </li>
            </ul>

            <a
              href="#"
              class="bg-secondary-600 hover:bg-third hover:text-btn font-semibold text-md border-[1px] rounded-lg px-5 py-2 text-center text relative bottom-[2px]"
              >בחר חבילה</a
            >
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-secondary text-txt"
          >
            <h3 class="mb-4 text-2xl font-semibold">סטנדרטי</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              לעסקים בקנה מידה בינוני
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">₪139</span>
              <span class="text-gray-500 dark:text-gray-400">/חודש</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-right h-full">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>כתובת IP פרטית</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>מיקום רשת ה-VPN באירופה או ארה"ב לבחירתכם</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold"
                    >עד <span class="text-btn">5</span> גלישות במקביל</span
                  ></span
                >
              </li>
            </ul>

            <a
              href="#"
              class="bg-secondary-600 hover:bg-third hover:text-btn font-semibold text-md border-[1px] rounded-lg px-5 py-2 text-center text relative bottom-[2px]"
              >בחר חבילה</a
            >
          </div>
          <!-- Pricing Card -->
          <div
            class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 bg-secondary text-txt"
          >
            <h3 class="mb-4 text-2xl font-semibold">מתקדם</h3>
            <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              לחברות גדולות
            </p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-5xl font-extrabold">₪199</span>
              <span class="text-gray-500 dark:text-gray-400">/חודש</span>
            </div>
            <!-- List -->
            <ul role="list" class="mb-8 space-y-4 text-right h-full">
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>כתובת IP פרטית</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>מיקום רשת ה-VPN באירופה או ארה"ב לבחירתכם</span>
              </li>
              <li class="flex items-center space-x-3">
                <!-- Icon -->
                <svg
                  class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>
                  <span class="font-semibold"
                    >עד <span class="text-btn">10</span> גלישות במקביל</span
                  ></span
                >
              </li>
            </ul>

            <a
              href="#"
              class="bg-secondary-600 hover:bg-third hover:text-btn font-semibold text-md border-[1px] rounded-lg px-5 py-2 text-center text relative bottom-[2px]"
              >בחר חבילה</a
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  transform: scale(0.95);
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.151);
}
main {
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.551);
}
svg {
  margin-left: 10px;
}
</style>
