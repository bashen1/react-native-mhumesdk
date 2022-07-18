import {NativeModules, Platform} from 'react-native';

const {Mhumesdk} = NativeModules;

class Humesdk {
    static getChannel = async () => {
        let channel = '';
        if (Platform.OS === 'android') {
            channel = await Mhumesdk.getChannel();
        }
        return channel;
    }

    static getChannelSync = () => {
        let channel = '';
        if (Platform.OS === 'android') {
            channel = Mhumesdk.getChannelSync();
        }
        return channel;
    }

    static getVersion = async () => {
        let version = '';
        if (Platform.OS === 'android') {
            version = await Mhumesdk.getVersion();
        }
        return version;
    }

    static getVersionSync = () => {
        let version = '';
        if (Platform.OS === 'android') {
            version = Mhumesdk.getVersionSync();
        }
        return version;
    }
}

export default Humesdk;