<template>
  <div id="map"></div>
</template>

<script>
import { load4MineMap } from "@/utils/loadMineMap.js";
import { initMap, getMap } from "@/utils/mapUtils.js";

export default {
  name: "MapContainer",
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  async mounted() {
    load4MineMap().then((res) => {
      if (res.msg === "success") {
        const map = initMap({
          container: "map",
        });

        map.repaint = true;

        map.on("load", () => {
          this.$emit("mapLoad", map);
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
