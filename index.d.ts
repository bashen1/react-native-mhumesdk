export default class HwAnalytics {
    /**
     * 获取渠道名称 - 异步
     * Android only
     */
    static getChannel(): Promise<string>;

    /**
     * 获取渠道名称 - 同步
     * Android only
     */
     static getChannelSync(): string;

    /**
     * 获取humeSDK版本号 - 异步
     * Android only
     */
     static getVersion(): Promise<string>;

     /**
      * 获取humeSDK版本号 - 同步
      * Android only
      */
      static getVersionSync(): string;
}