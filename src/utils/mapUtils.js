// import { styleNull } from "@/config/style.js";
import { assignIn } from "lodash";

const CONFIG = {
  map: null,
};

function setMap(map) {
  if (CONFIG.map) {
    console.error("map 已经初始化过了");
  }
  CONFIG.map = map;
}

export function getMap() {
  return CONFIG.map3d;
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
    container: "map",
    SSAASamples: 2,
    style: styleNull,
    ...options,
  });

  setMap(map)

  return map;
}

export function destroyMap() {
  const map = getMap();
  if (!map) return;
  map.remove();
  CONFIG.map = null
}
