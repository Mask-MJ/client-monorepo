<script setup lang="ts">
import type { PaginationListItemProps } from 'reka-ui';
import type { HTMLAttributes } from 'vue';
import type { ButtonVariants } from '@mask/shadcn-ui//ui/button';
import { reactiveOmit } from '@vueuse/core';
import { PaginationListItem } from 'reka-ui';
import { cn } from '@mask/utils';
import { buttonVariants } from '@mask/shadcn-ui//ui/button';

const props = withDefaults(
  defineProps<
    PaginationListItemProps & {
      class?: HTMLAttributes['class'];
      isActive?: boolean;
      size?: ButtonVariants['size'];
    }
  >(),
  {
    size: 'icon',
  },
);

const delegatedProps = reactiveOmit(props, 'class', 'size', 'isActive');
</script>

<template>
  <PaginationListItem
    data-slot="pagination-item"
    v-bind="delegatedProps"
    :class="
      cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        props.class,
      )
    "
  >
    <slot />
  </PaginationListItem>
</template>
