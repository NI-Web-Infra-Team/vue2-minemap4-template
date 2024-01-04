window.GLOBAL_CONFIG = {
  // 服务网关地址
  API_BASE_URL: `https://service.minedata.cn`,
  minemapapiRoot: "https://minemap.minedata.cn",
  minemapConfig: {
    domainUrl: "https://minemap.minedata.cn",
    dataDomainUrl: "https://minemap.minedata.cn",
    serverDomainUrl: "https://sd-data.minedata.cn",
    spriteUrl: ["https://minemap.minedata.cn/minemapapi/v4.0.0/sprite/sprite"],
    serviceUrl: "https://service.minedata.cn/service",
    key: "anonymous_user_key",
    solution: 12001,
    minemapCDN: "https://minedata.cn",
  },
  mapConfig: {
    center: [117.78313, 38.98063],
    zoom: 14.6,
    pitch: 46.91654446501533,
    bearing: 27.195299103923833,
    projection: "MERCATOR",
  },
  dataConfig: {
    dom_base_url: "https://dom-data.minedata.cn", // 影像服务
    dem_base_url: "https://dem-data.minedata.cn", // 地形服务
    caseModel_base_url: "https://demo-data.minedata.cn/case-data/case-smart-port", // 本地模型服务
  },
  tileSize: 256,
};
