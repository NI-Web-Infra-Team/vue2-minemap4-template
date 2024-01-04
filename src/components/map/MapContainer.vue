<template>
  <div id="map"></div>
</template>

<script>
import { load4MineMap } from "@/utils/loadMineMap.js";
import { initMap, getMap } from "@/utils/mapUtils.js";
import dayjs from "dayjs";

export default {
  name: "MapContainer",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    initSunLight() {
      const map = getMap();
      setInterval(() => {
        // 按分钟更新地球夜景效果
        const date = _initCurrentTime();
        map.setSunLight(date);
      }, 1000 * 60);

      map.enableLight();
      const sunLight = new minemap.SunLight("#ffffff", 1, Date.now());
      map.addLight(sunLight);

      function _initCurrentTime() {
        const date = dayjs();
        return {
          month: date.month() + 1,
          day: date.date(),
          hour: date.hour(),
          minute: date.minute(),
        };
      }
    },
  },
  created() {},
  async mounted() {
    load4MineMap().then((res) => {
      // console.log(res);
      if (res.msg === "success") {
        const map = initMap();

        map.repaint = true;

        map.on("load", () => {
          this.$emit("mapLoad", map);
          this.initSunLight();
        });
      } else {
        console.error("load minemap error");
      }
    });
  },
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
