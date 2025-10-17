<script setup lang="ts">
import type { PaginationLastProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '@mask/shadcn-ui//ui/button';
import { reactiveOmit } from '@vueuse/core';
import { ChevronRightIcon } from 'lucide-vue-next';
import { PaginationLast, useForwardProps } from 'reka-ui';
import { cn } from '@mask/utils';
import { buttonVariants } from '@mask/shadcn-ui//ui/button';

const props = withDefaults(
  defineProps<
    PaginationLastProps & {
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
  <PaginationLast
    data-slot="pagination-last"
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
      <span class="hidden sm:block">Last</span>
      <ChevronRightIcon />
    </slot>
  </PaginationLast>
</template>
