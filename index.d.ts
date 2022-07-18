export default class HwAnalytics {
    /**
     * 获取渠道名称 - 异步
     * Android only
     */
    getChannel(): Promise<string>;

    /**
     * 获取渠道名称 - 同步
     * Android only
     */
    getChannelSync(): string;

    /**
     * 获取humeSDK版本号 - 异步
     * Android only
     */
    getVersion(): Promise<string>;

     /**
      * 获取humeSDK版本号 - 同步
      * Android only
      */
    getVersionSync(): string;
}