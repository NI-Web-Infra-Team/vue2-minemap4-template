import { loadScripts, loadStyles } from "@ni-web-infra/common-utils";

export async function load4MineMap() {
  const { minemapapiRoot } = window.GLOBAL_CONFIG;
  const version = "v4.0.0";

  const minemapScriptUrls = [`/minemapapi/${version}/minemap.js`].map((item) => `${minemapapiRoot}${item}`);
  const minemapStyleUrls = [`/minemapapi/${version}/minemap.css`].map((item) => `${minemapapiRoot}${item}`);
  const minemapPluginUrls = [`/minemapapi/${version}/plugins/minemap-plugins.js`].map(
    (item) => `${minemapapiRoot}${item}`
  );

  const promises = [loadScripts(minemapScriptUrls), loadStyles(minemapStyleUrls)];
  try {
    await Promise.all(promises);
    await loadScripts(minemapPluginUrls);
    return { msg: "success" };
  } catch (e) {
    console.error(e);
  }
}

export async function load2MineMap() {
  const { minemapapiRoot } = window.GLOBAL_CONFIG;
  const version = "v2.1.1";

  const minemapScriptUrls = [`/minemapapi/${version}/minemap.js`].map((item) => `${minemapapiRoot}${item}`);
  const minemapStyleUrls = [`/minemapapi/${version}/minemap.css`].map((item) => `${minemapapiRoot}${item}`);
  // const minemapPluginUrls = [`/minemapapi/${version}/plugins/minemap-plugins.js`].map(
  //   (item) => `${minemapapiRoot}${item}`
  // );

  const promises = [loadScripts(minemapScriptUrls), loadStyles(minemapStyleUrls)];
  try {
    await Promise.all(promises);
    await loadScripts(minemapPluginUrls);
    return { msg: "success" };
  } catch (e) {
    console.error(e);
  }
}
