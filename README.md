# GooglePlaceAPI

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A JavaScript library for fetching location information from the Google Places API.

## Features
- Fetch location information by various identifiers: CID, FTID, PID, and name
- Retrieve latitude, longitude, and zoom level from the API response
- Caching of API responses to reduce redundant requests

## Requirements
- Requires a valid Google Places API key, stored in a `.env` file

## Usage

```js
import { GooglePlaceAPI } from "https://code4fukui.github.io/GooglePlaceAPI/GooglePlaceAPI.js";

console.log(await GooglePlaceAPI.fetchPosFromName("めがね会館"));
```

## License
MIT License — see [LICENSE](LICENSE).