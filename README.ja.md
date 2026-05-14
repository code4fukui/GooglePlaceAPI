# GooglePlaceAPI

Google Places APIから位置情報を取得するためのJavaScriptライブラリです。

## 特徴
- さまざまな識別子（CID、FTID、PID、名前）による位置情報の取得
- APIレスポンスからの緯度、経度、ズームレベルの取得
- APIレスポンスのキャッシュによる冗長なリクエストの削減

## 要件
- 有効なGoogle Places APIキーが必要です。`.env`ファイルに保存してください。

## 使い方

```js
import { GooglePlaceAPI } from "https://code4fukui.github.io/GooglePlaceAPI/GooglePlaceAPI.js";

console.log(await GooglePlaceAPI.fetchPosFromName("めがね会館"));
```

## ライセンス
MIT License — 詳細は[LICENSE](LICENSE)をご覧ください。
