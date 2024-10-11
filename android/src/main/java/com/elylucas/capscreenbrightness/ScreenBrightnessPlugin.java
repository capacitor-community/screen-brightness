package com.elylucas.capscreenbrightness;

import android.app.Activity;
import android.view.WindowManager;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ScreenBrightness")
public class ScreenBrightnessPlugin extends Plugin {

    @PluginMethod
    public void setBrightness(PluginCall call) {
        Float brightness = call.getFloat("brightness");
        Activity activity = getActivity();
        WindowManager.LayoutParams layoutParams = activity.getWindow().getAttributes();

        activity.runOnUiThread(() -> {
            layoutParams.screenBrightness = brightness;
            activity.getWindow().setAttributes(layoutParams);
            call.resolve();
        });
    }

    @PluginMethod
    public void getBrightness(PluginCall call) {
        WindowManager.LayoutParams layoutParams = getActivity().getWindow().getAttributes();
        JSObject ret = new JSObject();
        call.resolve(
            new JSObject() {
                {
                    put("brightness", layoutParams.screenBrightness);
                }
            }
        );
    }
}
