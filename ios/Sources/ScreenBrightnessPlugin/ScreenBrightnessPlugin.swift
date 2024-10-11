import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ScreenBrightnessPlugin)
public class ScreenBrightnessPlugin: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "ScreenBrightnessPlugin"
    public let jsName = "ScreenBrightness"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "setBrightness", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "getBrightness", returnType: CAPPluginReturnPromise)
    ]

    @objc func setBrightness(_ call: CAPPluginCall) {
        let brightness = call.getFloat("brightness", Float(UIScreen.main.brightness))
        DispatchQueue.main.async {
            UIScreen.main.brightness = CGFloat(brightness)
            call.resolve()
        }
    }

    @objc func getBrightness(_ call: CAPPluginCall) {
        call.resolve([
            "brightness": UIScreen.main.brightness
        ])
    }
}
