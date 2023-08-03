import { Cache } from "./Cache.js";

const key = (await Deno.readTextFile(".env")).trim();

export const fetchFromCID = async (cid) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?cid=${cid}&key=${key}`;
  //console.log(url);
  //const json = await (await fetch(url)).json();
  const json = await Cache.fetchJSON(url, "cid_" + cid);
  //console.log(json);
  return json;
};

export const fetchFromFTID = async (ftid) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?ftid=${ftid}&key=${key}`;
  //console.log(url);
  //const json = await (await fetch(url)).json();
  const json = await Cache.fetchJSON(url, "ftid_" + ftid);
  //console.log(json);
  return json;
};

/* // can't get by mid
export const fetchFromMID = async (mid) => {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?mid=${mid}&key=${key}`;
  //console.log(url);
  const json = await (await fetch(url)).json();
  console.log(json);
  return json;
};
*/

export const getPos = (json) => {
  if (json.error_message) {
    console.log(json.error_message);
    return null;
  }
  const geometry = json.result.geometry;
  const ll = geometry.location;
  const w = geometry.viewport.northeast.lng - geometry.viewport.southwest.lng;
  /*
  viewport: {
    northeast: { lat: 35.39504165933923, lng: 133.9795968237714 },
    southwest: { lat: 35.37684811479605, lng: 133.9475819762286 }
  }
  */
  // 360 -> level 0
  // max level 18
  // 360/Math.pow(2, zoom) = w
  // 360 / w = Math.pow(2, zoom)
  // Math.log(360 / w) / Math.log(2) = zoom
  const zoom = Math.log(360 / w) / Math.log(2);
  return { lat: ll.lat, lng: ll.lng, zoom: Math.floor(zoom) };
};

export const fetchPosFromCID = async (cid) => {
  const json = await fetchFromCID(cid);
  return getPos(json);
};
export const fetchPosFromFTID = async (ftid) => {
  const json = await fetchFromFTID(ftid);
  return getPos(json);
};
/*
export const fetchPosFromMID = async (mid) => {
  const json = await fetchFromMID(mid);
  return getPos(json);
};
*/

//const pos = await fetchPosFromCID("9827041397113343018");
//console.log(pos);
//const pos = await fetchPosFromCID("7350504955608786931"); // error_message
//console.log(pos);
//const pos = await fetchPosFromFTID("0x3555c49f4cf950e3:0xc04ffbd2525e7026");
//console.log(pos);
//const pos = await fetchPosFromMID("1dLXFwGArp-aJ06ysVJS-CiSMtT_tW8o"); // ng
//console.log(pos);

export const GooglePlaceAPI = {
  fetchFromCID,
  fetchFromFTID,
  getPos,
  fetchPosFromCID,
  fetchPosFromFTID,
};
