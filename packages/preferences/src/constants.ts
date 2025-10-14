import type { BuiltinThemeType } from './types';

interface BuiltinThemePreset {
  color: string;
  darkPrimaryColor?: string;
  primaryColor?: string;
  type: BuiltinThemeType;
}

const BUILT_IN_THEME_PRESETS: BuiltinThemePreset[] = [
  {
    color: 'hsl(212 100% 45%)',
    type: 'default',
  },
  {
    color: 'hsl(245 82% 67%)',
    type: 'violet',
  },
  {
    color: 'hsl(347 77% 60%)',
    type: 'pink',
  },
  {
    color: 'hsl(42 84% 61%)',
    type: 'yellow',
  },
  {
    color: 'hsl(231 98% 65%)',
    type: 'sky-blue',
  },
  {
    color: 'hsl(161 90% 43%)',
    type: 'green',
  },
  {
    color: 'hsl(240 5% 26%)',
    darkPrimaryColor: 'hsl(0 0% 98%)',
    primaryColor: 'hsl(240 5.9% 10%)',
    type: 'zinc',
  },

  {
    color: 'hsl(181 84% 32%)',
    type: 'deep-green',
  },

  {
    color: 'hsl(211 91% 39%)',
    type: 'deep-blue',
  },
  {
    color: 'hsl(18 89% 40%)',
    type: 'orange',
  },
  {
    color: 'hsl(0 75% 42%)',
    type: 'rose',
  },

  {
    color: 'hsl(0 0% 25%)',
    darkPrimaryColor: 'hsl(0 0% 98%)',
    primaryColor: 'hsl(240 5.9% 10%)',
    type: 'neutral',
  },
  {
    color: 'hsl(215 25% 27%)',
    darkPrimaryColor: 'hsl(0 0% 98%)',
    primaryColor: 'hsl(240 5.9% 10%)',
    type: 'slate',
  },
  {
    color: 'hsl(217 19% 27%)',
    darkPrimaryColor: 'hsl(0 0% 98%)',
    primaryColor: 'hsl(240 5.9% 10%)',
    type: 'gray',
  },
  {
    color: '',
    type: 'custom',
  },
];

/**
 * @zh_CN GITHUB 仓库地址
 */
export const SAAS_GITHUB_URL = 'https://github.com/mask-mj/saas-admin';

/**
 * @zh_CN 文档地址
 */
export const SAAS_DOC_URL = 'https://docs.moyaojun.cn';

/**
 * @zh_CN Saas Logo
 */
export const SAAS_LOGO_URL = 'https://www.moyaojun.cn/logo.png';

/**
 * @zh_CN Saas Admin 首页地址
 */
export const SAAS_PREVIEW_URL = 'https://www.moyaojun.cn';

/**
 * @zh_CN 登录页面 url 地址
 */
export const LOGIN_PATH = '/auth/login';

export const COLOR_PRESETS = [...BUILT_IN_THEME_PRESETS].slice(0, 7);

export { BUILT_IN_THEME_PRESETS };

export type { BuiltinThemePreset };
