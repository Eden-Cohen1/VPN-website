<script setup>
import { animate, inView } from "motion";

const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const box4 = ref(null);
const bigbox = ref(null);
const isVisable = ref(false);

const options = { duration: 3 };
onMounted(() => {
  inView(box1.value, (info) => {
    animate(info.target, { opacity: [0, 1] }, options);
  });
  inView(box2.value, (info) => {
    animate(info.target, { opacity: [0, 1] }, options);
  });
  inView(box3.value, (info) => {
    animate(info.target, { opacity: [0, 1] }, options);
  });
  inView(box4.value, (info) => {
    animate(info.target, { opacity: [0, 1] }, options);
  });
});
</script>

<template>
  <main
    ref="bigbox"
    class="flex flex-col justify-between text-txt gap-5 p-5 pt-32 pb-32 text-center w-[100%] items-center"
  >
    <h1 class="text-4xl font-bold m-auto mb-12">הכי טובים בשוק</h1>
    <div
      class="flex flex-col lg:w-fit w-[100%] lg:flex-row justify-between gap-5 items-center lg:items-stretch"
    >
      <div
        ref="box1"
        class="card p-6 rounded-xl flex flex-col gap-5 lg:max-w-[250px] border-[1px] bg-secondary w-[90%] max-w-[450px]"
      >
        <div
          class="inner-card w-full flex flex-col justify-center items-center border-b-[1px]"
        >
          <Icon class="m-auto mb-2 text-4xl" name="devicon-plain:fastapi" />
          <h2 class="mb-4 text-xl font-bold">מהירות</h2>
        </div>
        <div>
          <p>
            ה-VPN שלנו מהיר יותר פי 3 מה-VPNים הנמכרים היום כגון OpenVPN או
            IPSec, זה מוכח!
          </p>
        </div>
      </div>
      <div
        ref="box2"
        class="card p-6 rounded-xl flex flex-col gap-5 lg:max-w-[250px] border-[1px] bg-secondary w-[90%] max-w-[450px]"
      >
        <div
          class="inner-card w-full flex flex-col justify-center items-center border-b-[1px]"
        >
          <Icon
            class="m-auto mb-2 text-4xl"
            name="eos-icons:trusted-organization"
          />
          <h2 class="mb-4 text-xl font-bold">שרידות</h2>
        </div>
        <div>
          <p>עם 99.9% UP TIME שמבטיח לכם עבודה שוטפת וללא הפרעות</p>
        </div>
      </div>
      <div
        ref="box3"
        class="card p-6 rounded-xl flex flex-col gap-5 lg:max-w-[250px] border-[1px] bg-secondary w-[90%] max-w-[450px]"
      >
        <div
          class="inner-card w-full flex flex-col justify-center items-center border-b-[1px]"
        >
          <Icon class="m-auto mb-2 text-4xl" name="ic:baseline-lock-person" />
          <h2 class="mb-4 text-xl font-bold">אבטחת הפרטיות</h2>
        </div>
        <div>
          <p>
            המוצר מגיע עם פרוטוקולי הצפנה מתקדמים במיוחד המבטיחים אנונימיות
            מוחלטת בעת הגלישה ברשת
          </p>
        </div>
      </div>
      <div
        ref="box4"
        class="card p-6 rounded-xl flex flex-col gap-5 lg:max-w-[250px] border-[1px] bg-secondary w-[90%] max-w-[450px]"
      >
        <div
          class="w-full flex flex-col justify-center items-center border-b-[1px]"
        >
          <Icon
            class="m-auto mb-2 text-4xl"
            name="streamline:call-center-support-service-solid"
          />
          <h2 class="mb-4 text-xl font-bold">יש עם מי לדבר :)</h2>
        </div>
        <div class="inner-card">
          <p>
            ב-Net-Guard אנו דוגלים במתן חווית שירות גבוהה ואנו זמינים לכם
            טלפונית לכל שאלה או בקשה
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  background: linear-gradient(
    to bottom right,
    var(--color-btn) 0%,
    var(--color-btn) 50%,
    var(--color-sec) 50%,
    var(--color-sec) 100%
  );
  background-size: 200% 200%;
  transition: background-position 0.5s ease-out;
  background-position: right bottom;
  transition: 0.5s;
}

.card:hover {
  color: white;
  border-color: black;
  transition: 0.5s;
  background-position: left top;
}
/* .card:hover {
  transform: scale(1.05);
  border-color: #3f5cdd;
  transition: 0.5s;
}

p {
  transition: 0 !important;
}

.card {
  transition: 0.5s;
} */
</style>
