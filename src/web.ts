import { WebPlugin } from '@capacitor/core';

import type { ScreenBrightnessPlugin } from './definitions';

export class ScreenBrightnessWeb
  extends WebPlugin
  implements ScreenBrightnessPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
