import type { RouteLocationNormalized } from 'vue-router';

interface BasicOption {
  label: string;
  value: string;
}

interface TabDefinition extends RouteLocationNormalized {
  /**
   * 标签页的key
   */
  key?: string;
}

type ClassType = Array<object | string> | object | string;

export type { BasicOption, ClassType, TabDefinition };
