import { ScreenBrightness } from '@capacitor-community/screen-brightness';

window.reset = () => {
    console.log('reset value');
    const brightness = -1;
    ScreenBrightness.setBrightness({ brightness })
}

window.updateValue = () => {
    const brightness = parseFloat(document.getElementById("brightnessInput").value);
    console.log('set value to', brightness);
    ScreenBrightness.setBrightness({ brightness });
}

window.getBrigtness = async () => {
    const value = await ScreenBrightness.getBrightness();
    alert(value.brightness);
}
