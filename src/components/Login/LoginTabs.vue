<script setup lang="ts">
import { set } from '@vueuse/core';

const { t } = useI18n();

const emit = defineEmits(['logged', 'signedup']);

const isLogin = ref(true);
const login = ref<HTMLElement>();
const signup = ref<HTMLElement>();
const loginHeight = ref(0);
const signupHeight = ref(0);

useResizeObserver(login, (entries) => {
   const [entry] = entries;
   const { height } = entry.contentRect;
   set(loginHeight, height + 50);
});

useResizeObserver(signup, (entries) => {
   const [entry] = entries;
   const { height } = entry.contentRect;
   set(signupHeight, height + 50);
});
</script>

<template>
   <div
      class="w-full flex flex-col relative all-300 transform overflow-hidden justify-center"
      :class="isLogin ? `h-${loginHeight}px` : `h-${signupHeight}px`"
   >
      <Login
         ref="login"
         class="transform all-300 w-full"
         :class="[
            isLogin
               ? '-translate-x-0 opacity-100 pointer-events-auto'
               : '-translate-x-full opacity-0 pointer-events-none absolute',
         ]"
         @logged="emit('logged')"
      />
      <Signup
         ref="signup"
         class="transform all-300 w-full"
         :class="[
            isLogin
               ? 'translate-x-full opacity-0 pointer-events-none absolute'
               : 'translate-x-0 opacity-100 pointer-events-auto',
         ]"
         @signedup="emit('signedup')"
      />

      <p
         class="text-sm text-center text-gray-500 transform all-300"
         :class="[
            isLogin
               ? '-translate-x-0 opacity-100 pointer-events-auto'
               : '-translate-x-full opacity-0 pointer-events-none absolute',
         ]"
      >
         {{ t('label.no_account_question') }}
         <button class="text-english-lavender" @click="isLogin = false">
            {{ t('button.sign_up') }}
         </button>
      </p>

      <p
         class="text-sm text-center text-gray-500 transform all-300"
         :class="[
            isLogin
               ? 'translate-x-full opacity-0 pointer-events-none absolute'
               : 'translate-x-0 opacity-100 pointer-events-auto',
         ]"
      >
         {{ t('label.already_account_question') }}
         <button class="text-english-lavender" @click="isLogin = true">
            {{ t('button.sign_in') }}
         </button>
      </p>
   </div>
</template>
