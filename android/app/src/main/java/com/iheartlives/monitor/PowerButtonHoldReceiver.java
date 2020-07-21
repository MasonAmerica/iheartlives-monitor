package com.iheartlives.monitor;

import android.widget.Toast;  
import android.util.Log; 
import android.content.Context;
import android.content.Intent;
import android.content.BroadcastReceiver;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;

public class PowerButtonHoldReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(final Context context, final Intent intent) {
        final CharSequence text = "Cannot power off during sync!";
        final int duration = Toast.LENGTH_SHORT;
        final Toast toast = Toast.makeText(context, text, duration);
        toast.show();
    }

    @Override
    public List<NativeModule> createNativeModules(
                                ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();

        modules.add(new PowerButtonHoldReceiver(reactContext));

        return modules;
    }

}