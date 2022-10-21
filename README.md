<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Screen Brightness</h3>
<p align="center"><strong><code>@capacitor-community/screen-brightness</code></strong></p>
<p align="center">
  Capacitor community plugin for controlling screen brightness on iOS and Android devices.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/capacitor%20v3%20support-yes-brightgreen?logo=Capacitor&style=flat-square" />
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://github.com/capacitor-community/screen-brightness/actions?query=workflow%3A%22Test+and+Build+Plugin%22"><img src="https://img.shields.io/github/workflow/status/capacitor-community/screen-brightness/Test%20and%20Build%20Plugin?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/screen-brightness"><img src="https://img.shields.io/npm/l/@capacitor-community/screen-brightness?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@capacitor-community/screen-brightness"><img src="https://img.shields.io/npm/dw/@capacitor-community/screen-brightness?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@capacitor-community/screen-brightness"><img src="https://img.shields.io/npm/v/@capacitor-community/screen-brightness?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors-"><img src="https://img.shields.io/badge/all%20contributors-4-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer | GitHub | Social |
| -----------| -------| -------|
| Ely Lucas | [elylucas](https://github.com/elylucas) | [@elylucas](https://twitter.com/elylucas) |

## Installation

```bash
npm install @capacitor-community/screen-brightness
npx cap sync
```
## Configuration

No configuration required for this plugin

## Usage
```typescript
import { ScreenBrightness } from '@capacitor-community/screen-brightness';

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
setBrightness(options: SetBrightnessOptions) => Promise<void>
```

Sets the brightness level. On iOS, it sets the system level brightness, and on Android it sets the brightness for the current view.

| Param         | Type                                                                  | Description               |
| ------------- | --------------------------------------------------------------------- | ------------------------- |
| **`options`** | <code><a href="#setbrightnessoptions">SetBrightnessOptions</a></code> | Options to set brightness |

**Since:** 1.0.0

--------------------


### getBrightness()

```typescript
getBrightness() => Promise<GetBrightnessReturnValue>
```

Returns info than contains the current brightness level
* @since 1.0.0

**Returns:** <code>Promise&lt;<a href="#getbrightnessreturnvalue">GetBrightnessReturnValue</a>&gt;</code>

--------------------


### Interfaces


#### SetBrightnessOptions

| Prop             | Type                | Description                                                                                                                                                   | Since |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`brightness`** | <code>number</code> | The level to set the brightness to, from 0.0 (very dim) to 1.0 (full brightness) On Android, setting the value to -1 restores the user configured brightness. | 1.0.0 |


#### GetBrightnessReturnValue

| Prop             | Type                | Description                                                                                                                                       | Since |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`brightness`** | <code>number</code> | The current brightness level, from 0.0 (very dim) to 1.0 (full brightness) On Android it returns -1 if the value has not been changed by the app. | 1.0.0 |

</docgen-api>
