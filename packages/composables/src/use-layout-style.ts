import type { VisibleDomRect } from '@mask/utils';
import type { CSSProperties } from 'vue';

import { getElementVisibleRect } from '@mask/utils';
import { useCssVar, useDebounceFn } from '@vueuse/core';
import { computed, onMounted, onUnmounted, ref } from 'vue';

/** layout content 组件的高度 */
export const CSS_VARIABLE_LAYOUT_CONTENT_HEIGHT = `--saas-content-height`;
/** layout content 组件的宽度 */
export const CSS_VARIABLE_LAYOUT_CONTENT_WIDTH = `--saas-content-width`;
/** layout header 组件的高度 */
export const CSS_VARIABLE_LAYOUT_HEADER_HEIGHT = `--saas-header-height`;
/** layout footer 组件的高度 */
export const CSS_VARIABLE_LAYOUT_FOOTER_HEIGHT = `--saas-footer-height`;

/** 内容区域的组件ID */
export const ELEMENT_ID_MAIN_CONTENT = `__saas_main_content`;
/**
 * @zh_CN content style
 */
export function useLayoutContentStyle() {
  let resizeObserver: null | ResizeObserver = null;
  const contentElement = ref<HTMLDivElement | null>(null);
  const visibleDomRect = ref<null | VisibleDomRect>(null);
  const contentHeight = useCssVar(CSS_VARIABLE_LAYOUT_CONTENT_HEIGHT);
  const contentWidth = useCssVar(CSS_VARIABLE_LAYOUT_CONTENT_WIDTH);

  const overlayStyle = computed((): CSSProperties => {
    const { height, left, top, width } = visibleDomRect.value ?? {};
    return {
      height: `${height}px`,
      left: `${left}px`,
      position: 'fixed',
      top: `${top}px`,
      width: `${width}px`,
      zIndex: 150,
    };
  });

  const debouncedCalcHeight = useDebounceFn(
    (_entries: ResizeObserverEntry[]) => {
      visibleDomRect.value = getElementVisibleRect(contentElement.value);
      contentHeight.value = `${visibleDomRect.value.height}px`;
      contentWidth.value = `${visibleDomRect.value.width}px`;
    },
    16,
  );

  onMounted(() => {
    if (contentElement.value && !resizeObserver) {
      resizeObserver = new ResizeObserver(debouncedCalcHeight);
      resizeObserver.observe(contentElement.value);
    }
  });

  onUnmounted(() => {
    resizeObserver?.disconnect();
    resizeObserver = null;
  });

  return { contentElement, overlayStyle, visibleDomRect };
}

export function useLayoutHeaderStyle() {
  const headerHeight = useCssVar(CSS_VARIABLE_LAYOUT_HEADER_HEIGHT);

  return {
    getLayoutHeaderHeight: () => {
      return Number.parseInt(`${headerHeight.value}`, 10);
    },
    setLayoutHeaderHeight: (height: number) => {
      headerHeight.value = `${height}px`;
    },
  };
}

export function useLayoutFooterStyle() {
  const footerHeight = useCssVar(CSS_VARIABLE_LAYOUT_FOOTER_HEIGHT);

  return {
    getLayoutFooterHeight: () => {
      return Number.parseInt(`${footerHeight.value}`, 10);
    },
    setLayoutFooterHeight: (height: number) => {
      footerHeight.value = `${height}px`;
    },
  };
}
