<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { BadgeVariants } from '.';
import { cn } from '@mask/utils';
import { badgeVariants } from '.';

const props = defineProps<{
  class?: HTMLAttributes['class'];
  variant?: BadgeVariants['variant'];
}>();
</script>

<template>
  <div :class="cn(badgeVariants({ variant }), props.class)">
    <slot />
  </div>
</template>
