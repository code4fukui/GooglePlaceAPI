import * as t from "https://deno.land/std/testing/asserts.ts";
import { GooglePlaceAPI } from "./GooglePlaceAPI.js";

Deno.test("simple", async () => {
  const r = await GooglePlaceAPI.fetchPosFromCID("9827041397113343018");
  t.assertEquals(r, { lat: 35.2129976, lng: 139.0630601, zoom: 17 });
});
Deno.test("name", async () => {
  const r = await GooglePlaceAPI.fetchPosFromName("めがね会館");
  t.assertEquals(r, { lat: 35.94275799999999, lng: 136.198842, zoom: 17 });
});
