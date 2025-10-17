<script setup lang="ts">
import type { PaginationFirstProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '@mask/shadcn-ui//ui/button';
import { reactiveOmit } from '@vueuse/core';
import { ChevronLeftIcon } from 'lucide-vue-next';
import { PaginationFirst, useForwardProps } from 'reka-ui';
import { cn } from '@mask/utils';
import { buttonVariants } from '@mask/shadcn-ui//ui/button';

const props = withDefaults(
  defineProps<
    PaginationFirstProps & {
      class?: HTMLAttributes['class'];
      size?: ButtonVariants['size'];
    }
  >(),
  {
    size: 'default',
  },
);

const delegatedProps = reactiveOmit(props, 'class', 'size');
const forwarded = useForwardProps(delegatedProps);
</script>

<template>
  <PaginationFirst
    data-slot="pagination-first"
    :class="
      cn(
        buttonVariants({ variant: 'ghost', size }),
        'gap-1 px-2.5 sm:pr-2.5',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <slot>
      <ChevronLeftIcon />
      <span class="hidden sm:block">First</span>
    </slot>
  </PaginationFirst>
</template>
