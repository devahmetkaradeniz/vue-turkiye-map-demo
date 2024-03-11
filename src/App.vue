<script setup lang="ts">
import WeatherExample from '@/components/WeatherExample.vue';
import BranchExample from '@/components/BranchExample.vue';
import { ref } from 'vue';

const example = ref('weather')
</script>

<template>
  <div class="container">
    <div class="tabs">
      <div class="tab" :class="{active:example === 'weather'}" @click="example = 'weather'">Weather Example</div>
      <div class="tab" :class="{active:example === 'branch'}" @click="example = 'branch'">Branch Example</div>
    </div>
    <div class="contents">
      <WeatherExample v-if="example === 'weather'" />
      <BranchExample v-else />
    </div>
  </div>
</template>