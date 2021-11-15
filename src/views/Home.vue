<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button } from 'vant';
import { Translate, Moon, Sun, Github } from '@icon-park/vue-next';
import { useDark, useToggle } from '@vueuse/core';
import { useCountStore } from '@/stores/count';

const { W6S_BASE_API } = import.meta.env;

const store = useCountStore();
const isDark = useDark();
const toggleDark = useToggle(isDark);
const { availableLocales, locale } = useI18n();

const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <div class="p-4 text-center text-gray-700 dark:text-gray-200">
    <!-- i18n -->
    <div class="flex flex-col pb-4">
      <div class="flex flex-col">
        <img class="mx-auto w-20" src="~@/assets/logo.png" alt="logo" />
        <h3 class="text-3xl pt-4">{{ $t('title') }}</h3>
      </div>
      <p class="pt-2 px-4">
        {{ $t('summary') }}
      </p>
    </div>

    <!-- buttons -->
    <div class="flex mt-4 mb-10 h-60px justify-center">
      <div class="mx-4" @click="toggleLocales">
        <Translate size="1.4em" class="cursor-pointer" />
      </div>
      <div class="mx-4" @click="toggleDark()">
        <Moon v-if="isDark" class="cursor-pointer" size="1.4em" />
        <Sun v-else class="cursor-pointer" size="1.4em" />
      </div>
      <div class="mx-4">
        <a
          class="mx-2"
          rel="noreferrer"
          href="https://github.com/WorkPlusFE/vitue-mobile"
          target="_blank"
          title="GitHub"
        >
          <Github class="cursor-pointer" size="1.4em" />
        </a>
      </div>
    </div>

    <!-- store -->
    <div class="flex justify-center align-middle my-10">
      <Button @click="store.decrease">-</Button>
      <p class="mx-4 text-2xl">{{ store.counter }}</p>
      <Button @click="store.increment">+</Button>
    </div>

    <!-- env -->
    <div class="felx my-10">
      <p>env: W6S_BASE_API = '{{ W6S_BASE_API }}'</p>
    </div>

    <!-- router -->
    <router-link to="/detail">
      <Button>Open the details page!</Button>
    </router-link>
  </div>
</template>

<style lang="scss"></style>
