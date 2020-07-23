package com.iheartlives.monitor;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.widget.Toast;
import android.util.Log;

import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class PowerButtonHoldReceiverModule extends ReactContextBaseJavaModule implements LifecycleEventListener {

    private ReactApplicationContext mContext;
    public static final String ACTION_LONG_PRESS_POWER = "com.bymason.platform.LONG_PRESS_POWER";

    private final BroadcastReceiver mPowerbuttonHoldReceiver = new BroadcastReceiver() {
        @Override
        public void onReceive(Context context, Intent intent) {
            if (intent.getAction().equals(ACTION_LONG_PRESS_POWER)) {
                boolean sync = true;
                String message = sync ? "Cannot power off" : "not syncing so whatever ";
                Toast.makeText(mContext, message, Toast.LENGTH_SHORT).show();
            }
        }
    };

    public PowerButtonHoldReceiverModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext = reactContext;
        registerBroadcastReceiver();
    }

    private void registerBroadcastReceiver() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(ACTION_LONG_PRESS_POWER);
        mContext.registerReceiver(mPowerbuttonHoldReceiver, filter);
    }

    @Override
    public String getName() {
        return "PowerButtonHoldReceiverModule";
    }

    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {
        mContext.unregisterReceiver(mPowerbuttonHoldReceiver);
    }    
}