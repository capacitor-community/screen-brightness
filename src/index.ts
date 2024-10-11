import { registerPlugin } from '@capacitor/core';

import type { ScreenBrightnessPlugin } from './definitions';

const ScreenBrightness = registerPlugin<ScreenBrightnessPlugin>('ScreenBrightness', {});

export * from './definitions';
export { ScreenBrightness };
