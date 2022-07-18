# react-native-mhumesdk

[![npm version](https://badge.fury.io/js/react-native-mhumesdk.svg)](https://badge.fury.io/js/react-native-mhumesdk)

头条应用管理中心分包SDK

## 安装

```sh
npm i react-native-mhumesdk -E
```

## 使用

```js
import Humesdk from "react-native-mhumesdk";

const channel = await Humesdk.getChannel();

const version = await Humesdk.getVersion();

const channel = Humesdk.getChannelSync();

const version = Humesdk.getVersionSync();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
