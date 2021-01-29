# capacitor-screen-brightness

Control screen brightness on ios and android

## Install

```bash
npm install capacitor-screen-brightness
npx cap sync
```

## Example
```typescript
import { ScreenBrightness } from 'capacitor-screen-brightness';

// Set the brightness:
const halfBright = 0.5;
await ScreenBrightness.setBrightness({ halfBright });

// Get the current brightness:
const {brigthness: currentBrightness} = await ScreenBrightness.getBrightness();
```

## API

<docgen-index>

* [`setBrightness(...)`](#setbrightness)
* [`getBrightness()`](#getbrightness)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setBrightness(...)

```typescript
setBrightness(options: SetBrightnessOptions) => any
```

Sets the brightness level. On iOS, it sets the system level brightness, and on Android it sets the brightness for the current view.

| Param         | Type                                                                  | Description               |
| ------------- | --------------------------------------------------------------------- | ------------------------- |
| **`options`** | <code><a href="#setbrightnessoptions">SetBrightnessOptions</a></code> | Options to set brightness |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getBrightness()

```typescript
getBrightness() => any
```

Returns info than contains the current brightness level
* @since 1.0.0

**Returns:** <code>any</code>

--------------------


### Interfaces


#### SetBrightnessOptions

| Prop             | Type                | Description                                                                      | Since |
| ---------------- | ------------------- | -------------------------------------------------------------------------------- | ----- |
| **`brightness`** | <code>number</code> | The level to set the brightness to, from 0.0 (very dim) to 1.0 (full brightness) | 1.0.0 |


#### GetBrightnessReturnValue

| Prop             | Type                | Description                                                                | Since |
| ---------------- | ------------------- | -------------------------------------------------------------------------- | ----- |
| **`brightness`** | <code>number</code> | The current brightness level, from 0.0 (very dim) to 1.0 (full brightness) | 1.0.0 |

</docgen-api>
