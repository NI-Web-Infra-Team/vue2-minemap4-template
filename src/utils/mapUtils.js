import { styleNull } from "@/config/style.js";
import { assignIn } from "lodash-es";

const CONFIG = {};

function setMap(key, map) {
  if (CONFIG[key]) {
    console.warn(`map ${key} has been set`);
    return;
  }
  CONFIG[key] = map;
}

export function getMap(key) {
  return CONFIG[key];
}

export function initMap(mapOptions) {
  const { domainUrl, dataDomainUrl, serverDomainUrl, spriteUrl, serviceUrl, key, solution, minemapCDN } =
    window.GLOBAL_CONFIG.minemapConfig;

  const defaultOptions = window.GLOBAL_CONFIG.mapConfig;

  minemap.domainUrl = domainUrl;
  minemap.dataDomainUrl = dataDomainUrl;
  minemap.serverDomainUrl = serverDomainUrl;
  minemap.spriteUrl = spriteUrl;
  minemap.serviceUrl = serviceUrl;
  window.minemapCDN = minemapCDN + "/minemapapi/minemap-CDN"; // minemapCDN 配置

  minemap.key = key;
  minemap.solution = solution;

  const options = assignIn(defaultOptions, mapOptions);

  const map = new minemap.Map({
    container: mapOptions.container,
    // SSAASamples: 2,
    style: styleNull,
    ...options,
  });

  setMap(mapOptions.container, map);

  return map;
}

export function destroyMap(key) {
  const map = getMap(key);
  if (!map) return;

  map.remove();
  CONFIG.map = null;
}
