import { WebPlugin } from '@capacitor/core';

import type { GetBrightnessReturnValue, ScreenBrightnessPlugin } from './definitions';

export class ScreenBrightnessWeb
  extends WebPlugin
  implements ScreenBrightnessPlugin {
  setBrightness(): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
  getBrightness(): Promise<GetBrightnessReturnValue> {
    throw this.unimplemented('Not implemented on web.');
  }
}
