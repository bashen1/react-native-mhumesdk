package com.reactnativemhumesdk

import com.bytedance.hume.readapk.HumeSDK
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod


class MhumesdkModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "Mhumesdk"
    }

    @ReactMethod
    fun getChannel(promise: Promise) {
        val channel = HumeSDK.getChannel(reactApplicationContext)
        promise.resolve(channel);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getChannelSync(): String? {
        return HumeSDK.getChannel(reactApplicationContext);
    }

    @ReactMethod
    fun getVersion(promise: Promise) {
        val version = HumeSDK.getVersion()
        promise.resolve(version);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getVersionSync(): String? {
        return HumeSDK.getVersion()
    }
}
