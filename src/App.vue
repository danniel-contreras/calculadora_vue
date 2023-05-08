
<template>
  <div class="w-screen h-screen bg-blue-50 flex justify-center items-center">
    <div class="w-[500px] h-[500px] bg-[#355c7d] rounded-xl p-8">
      <div>
        <input :value="text_operation !== '' ? text_operation : 0"
          class="h-16 rounded-xl bg-gray-200 w-full font-semibold p-3 text-xl">
      </div>
      <div class="w-full grid grid-cols-4 gap-6 mt-5">
        <button @click="select_number('/')" class="bg-[#cd6c84] rounded-xl py-3 text-gray-50 font-semibold text-xl">
          <OhVueIcon scale="1.5" name="ri-divide-fill" />
        </button>
        <button @click="select_number('*')" class="bg-[#cd6c84] rounded-xl py-3 text-gray-50 font-semibold text-xl">
          <OhVueIcon scale="1.5" name="pr-times" />
        </button>
        <button @click="select_number('-')" class="bg-[#cd6c84] rounded-xl py-3 text-gray-50 font-semibold text-xl">
          <OhVueIcon scale="1.5" name="hi-solid-minus-sm" />
        </button>
        <button @click="select_number('+')" class="bg-[#cd6c84] rounded-xl py-3 text-gray-50 font-semibold text-xl">
          <OhVueIcon scale="1.5" name="hi-solid-plus-sm" />
        </button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('1')">1</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('2')">2</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('3')">3</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('4')">4</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('5')">5</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('6')">6</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('7')">7</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('8')">8</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('9')">9</button>
        <button class="bg-[#1ca7ec] rounded-xl py-3 text-white font-semibold text-xl"
          @click="select_number('0')">0</button>
        <button class="bg-[#f67280] rounded-xl py-3 text-white font-semibold text-xl"
          @click="text_operation = ''">AC</button>
        <button @click="calcOperation" class="bg-[#cd6c84] rounded-xl py-3 text-gray-50 font-semibold text-xl">=</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import OhVueIcon from "./plugins/oh-vue-icons"
import { ref } from 'vue';
import { calculate } from './utils/operations';

const text_operation = ref('')

const select_number = (number_selected: string) => {
  text_operation.value += number_selected
}

const calcOperation = () => {
  text_operation.value = calculate(text_operation.value)
}
</script>