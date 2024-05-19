<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  errors: {
    type: Array,
    default: [],
  },
  label: {
    type: String,
  },
  placeholder: {
    type: [String, Number],
    default: "",
  },
  as: {
    type: String,
    default: "input",
  },
});
const isFocus = ref(false);
defineEmits(["update:modelValue", "update:modelValue"]);
</script>

<template>
  <div class="mb-0 flex flex-col">
    <div class="flex items-end">
      <label class="text-sm text-txt font-medium leading-6 ml-1">{{
        label
      }}</label>
      <p
        v-show="isFocus"
        class="relative text-[0.7rem] ml-auto w-fit h-fit text-red-500"
        v-for="error in errors"
      >
        {{ error }}
      </p>
    </div>
    <component
      @focus="isFocus = true"
      @blur="isFocus = false"
      :is="as"
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :class="[
        `input rounded-2xl border-[1px] p-[10px] w-[80%] bg-secondary relative`,
        { 'border-red-400': isFocus && errors.length },
      ]"
    />
  </div>
</template>

<style scoped>
.error {
  border-color: red;
}
.input:focus {
  border: none;
}
</style>
