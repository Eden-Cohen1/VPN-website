<script setup>
import { animate, inView } from "motion";

const box1 = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const box4 = ref(null);
const bigbox = ref(null)
const isVisable = ref(false)
onMounted(() => {
    const options = { duration: 2 };
    inView(bigbox.value, (info) => {
        isVisable.value = true;
    });
    inView(box1.value, (info) => {
        animate(info.target, { x: [-600, 0], opacity: [0, 1] }, options);
    });
    inView(box2.value, (info) => {
        animate(info.target, { x: [-1000, 0], opacity: [0, 1] }, options);
    });
    inView(box3.value, (info) => {
        animate(info.target, { x: [-1400, 0], opacity: [0, 1] }, options);
    });
    inView(box4.value, (info) => {
        animate(info.target, { x: [-1800, 0], opacity: [0, 1] }, options);
    });  
});
</script>

<template>
    <main ref="bigbox" class="flex flex-col justify-between text-txt gap-5 p-5 pt-32 pb-32">
        <h1 class="text-4xl font-bold m-auto mb-12">הכי טובים בשוק</h1>
        <div class="flex justify-between gap-5">
        <div v-show="isVisable" ref="box1" class="card p-6 rounded-xl flex flex-col gap-5 max-w-[250px] border-[1px] bg-secondary">
            <div class="w-full flex flex-col justify-center items-center border-b-[1px]">
                <Icon class="m-auto mb-2 text-4xl" name="uil:tachometer-fast-alt" />  
                <h2 class="mb-4 text-xl font-bold">מהירות</h2>
            </div>
            <div>
                <p> מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר מהמחשב,
          מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם ומשם תוכל</p>
            </div>
        </div>
        <div v-show="isVisable" ref="box2" class="card p-6 rounded-xl flex flex-col gap-5 max-w-[250px] border-[1px] bg-secondary">
            <div class="w-full flex flex-col justify-center items-center border-b-[1px]">
                <Icon class="m-auto mb-2 text-4xl" name="uil:tachometer-fast-alt" />  
                <h2 class="mb-4 text-xl font-bold">מהירות</h2>
            </div>
            <div>
                <p> מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר מהמחשב,
          מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם ומשם תוכל</p>
            </div>
        </div>
        <div v-show="isVisable" ref="box3" class="card p-6 rounded-xl flex flex-col gap-5 max-w-[250px] border-[1px] bg-secondary">
            <div class="w-full flex flex-col justify-center items-center border-b-[1px]">
                <Icon class="m-auto mb-2 text-4xl" name="uil:tachometer-fast-alt" />  
                <h2 class="mb-4 text-xl font-bold">מהירות</h2>
            </div>
            <div>
                <p> מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר מהמחשב,
          מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם ומשם תוכל</p>
            </div>
        </div>
        <div v-show="isVisable" ref="box4" class="card p-6 rounded-xl flex flex-col gap-5 max-w-[250px] border-[1px] bg-secondary">
            <div class="w-full flex flex-col justify-center items-center border-b-[1px]">
                <Icon class="m-auto mb-2 text-4xl" name="uil:tachometer-fast-alt" />  
                <h2 class="mb-4 text-xl font-bold">מהירות</h2>
            </div>
            <div>
                <p> מורשת למערכות העסק? עם תוכנית "VPN מכל מקום" שלנו תוכלו להתחבר מהמחשב,
          מהאייפון ומהאנדרואיד לרשת אחת סגורה עם כתובת IP פרטית שלכם ומשם תוכל</p>
            </div>
        </div>
    </div>
    </main>    
</template>


<style scoped>

.card:hover{
    transform: scale(1.05);
    border-color:  #3f5cdd;
    transition: 0.5s;
}

.card{
    transition: 0.5s;

}
</style>