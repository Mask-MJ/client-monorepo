// export * from '@iconify/vue';

import { createIconifyIcon } from './create-icon';

export * from './create-icon';
export {
  addCollection,
  addIcon,
  Icon as IconifyIcon,
  listIcons,
} from '@iconify/vue';
export * from 'lucide-vue-next';

export const MdiKeyboardEsc = createIconifyIcon('mdi:keyboard-esc');
