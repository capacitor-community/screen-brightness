import { ScreenBrightness } from '@capacitor-community&#x2F;screen-brightness';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    ScreenBrightness.echo({ value: inputValue })
}
