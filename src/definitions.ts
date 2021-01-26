export interface ScreenBrightnessPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
