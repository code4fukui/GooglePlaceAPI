# GooglePlaceAPI

GooglePlaceAPIは、Google Places APIから位置情報を取得できるJavaScriptライブラリです。

## 機能
- CID、FTID、PIDや名称から位置情報を取得できます
- API レスポンスから緯度、経度、ズームレベルを取得できます
- API リクエストをキャッシュして無駄なリクエストを削減します

## 必要環境
- 有効なGoogle Places APIキーが必要です。`.env`ファイルに保存してください。

## 使い方

```js
import { GooglePlaceAPI } from "https://code4fukui.github.io/GooglePlaceAPI/GooglePlaceAPI.js";

console.log(await GooglePlaceAPI.fetchPosFromName("めがね会館"));
```

## ライセンス
MIT License