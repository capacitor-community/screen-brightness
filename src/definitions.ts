export interface ScreenBrightnessPlugin {
  /**
   * Sets the brightness level. On iOS, it sets the system level brightness, and on Android it sets the brightness for the current view.
   * @param options Options to set brightness
   * @since 1.0.0
   */
  setBrightness(options: SetBrightnessOptions): Promise<void>;
  /**
   * Returns info than contains the current brightness level
   * * @since 1.0.0
   */
  getBrightness(): Promise<GetBrightnessReturnValue>;
}

export interface SetBrightnessOptions {
  /**
   * The level to set the brightness to,
   * from 0.0 (very dim) to 1.0 (full brightness)
   *
   * On Android, setting the value to -1 restores the user configured brightness.
   *
   * @since 1.0.0
   */
  brightness: number;
}

export interface GetBrightnessReturnValue {
  /**
   * The current brightness level, from 0.0 (very dim) to 1.0 (full brightness)
   *
   * On Android it returns -1 if the value has not been changed by the app.
   *
   * @since 1.0.0
   */
  brightness: number;
}
