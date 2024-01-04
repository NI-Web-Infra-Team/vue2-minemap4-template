window.GLOBAL_CONFIG = {
  // 服务网关地址
  API_BASE_URL: `http://gateway-port1.bghdooyv.maas-vm.cloud.app.m-devops.navinfo.com`,
  minemapapiRoot: "http://10.51.24.232",
  minemapConfig: {
    domainUrl: "http://10.51.24.232",
    dataDomainUrl: "http://10.51.24.232",
    serverDomainUrl: "https://staticdata-b.minedata.cn:14434",
    spriteUrl: [
      "http://10.51.24.232/minemapapi/v2.1.1/sprite/sprite",
      "http://10.51.24.232/minemapapi/v4.0.0/sprite/sprite",
    ],
    serviceUrl: "http://gateway-port1.bghdooyv.maas-vm.cloud.app.m-devops.navinfo.com/service",
    key: "anonymous_user_key",
    solution: 12001,
    minemapCDN: "http://10.51.24.232",
  },
  mapConfig: {
    center: [117.78313, 38.98063],
    zoom: 14.6,
    pitch: 46.91654446501533,
    bearing: 27.195299103923833,
    projection: "MERCATOR",
  },
  dataConfig: {
    dom_base_url: "https://staticdata-b.minedata.cn:14434", // 影像服务
    dem_base_url: "https://staticdata-b.minedata.cn:14434", // 地形服务
    caseModel_base_url: "https://staticdata-b.minedata.cn:14434/case-data/case-smart-port", // 本地模型服务
  },
  tileSize: 256,
};
