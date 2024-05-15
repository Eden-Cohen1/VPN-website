<script setup>
import { animate, inView } from "motion";
const text1 = ref(null);
const text2 = ref(null);
const image1 = ref(null);
const image2 = ref(null);

onMounted(() => {
    const options = { duration: 2 };
    inView(text1.value, (info) => {
      animate(info.target, { x: [800, 0], opacity: [0, 1] }, options);
    });
    inView(image2.value, (info) => {
      animate(info.target, { x: [-800, 0], opacity: [0, 1] }, { duration: 3 });
    });
    inView(text2.value, (info) => {
      animate(info.target, { x: [-800, 0], opacity: [0, 1] }, options);
    });
    inView(image1.value, (info) => {
      animate(info.target, { x: [-800, 0], opacity: [0, 1] }, { duration: 3 });
    });  
});


</script>
<template>
  <main
    class="flex flex-col h-auto w-full pt-0 md:pl-24 md:pr-24 bg-secondary pb-24"
  >
    <h1
      class="font-bold text-[2.5rem] text-txt w-full md:text-right mt-24 md:right-[-50px] relative text-center"
    >
      קצת עלינו
      <div class="ball max-w-[100px] max-h-[100px]"></div>
    </h1>
    <div
      class="step mt-24 flex h-fit flex-col items-center gap-16 md:w-[100%] md:flex-row md:items-center mb-24"
    >
      <div
        ref="text1"
        class="relative flex max-w-xl flex-col items-center gap-2 text-center text-txt md:order-0 md:items-start md:text-left md:top-0"
      >
        <h1 class="text-xl font-bold text-btn">השירות שלנו</h1>
        <p class="text-lg md:text-right md:max-w-[100%] max-w-[90%]">
          פתרון גישה לעבודה מרחוק, עובדים מחוץ בית העסק שלכם עם כתובת IP לא
          מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר מהמחשב,
          מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם ומשם תוכלו
          להתחבר למערכות העסק שלכם מבלי לפתוח גישה למקומות לא בטוחים באינטרנט,
          וכן, אפשר להתחבר בו זמנית עם כמה מכשירים שונים בהתאם לתכנית שבחרתם.
        </p>
      </div>
      <div
        ref="image1"
        class="img1 flex h-auto min-w-[15rem] max-w-[15rem] flex-col items-center rounded-full"
      >
        <NuxtImg :src="`bg-1.png`" />
      </div>
    </div>

    <div
      class="step mt-24 flex h-fit flex-col items-center gap-3 md:w-[100%] md:flex-row md:items-center justify-end md:gap-16 md:ml-24"
    >
      <div
        ref="text2"
        class="relative flex max-w-xl flex-col items-center gap-2 text-center text-txt md:order-1 md:items-start md:text-left md:top-0"
      >
        <h1 class="text-xl font-bold text-btn">למה דווקא אנחנו?</h1>
        <p class="text-lg md:text-right md:max-w-[100%] max-w-[90%]">
          השירות שלנו פועל בתצורת IPVPN אשר איתו אתם "מסווים" את כתובת ה-IP
          המקורית שלכם בכל רגע נתון, המידע שלכם עובר בצורה מוצפנת דרך ה-VPN שלנו
          למניעת דליפה של מידע רגיש, השירות כרגע עובד עם כתובות IP מאירופה
          ומארצות הברית לבחירתכם.
        </p>
      </div>
      <div
        ref="image2"
        class="img2 flex h-auto min-w-[15rem] max-w-[15rem] flex-col items-center gap-5 rounded-full"
      >
        <NuxtImg :src="`bg-2.png`" />
      </div>
    </div>
  </main>
</template>

<style scoped>
.img1 {
  animation: float 7s ease-in-out infinite;
}
.img2 {
  animation: float 7s ease-in-out infinite;
}
</style>
