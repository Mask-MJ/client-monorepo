<script setup lang="ts">
import type { HTMLAttributes } from 'vue';
import type { AvatarVariants } from '.';
import { AvatarRoot } from 'reka-ui';
import { cn } from '@mask/utils';
import { avatarVariant } from '.';

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class'];
    shape?: AvatarVariants['shape'];
    size?: AvatarVariants['size'];
  }>(),
  {
    size: 'sm',
    shape: 'circle',
  },
);
</script>

<template>
  <AvatarRoot :class="cn(avatarVariant({ size, shape }), props.class)">
    <slot />
  </AvatarRoot>
</template>
