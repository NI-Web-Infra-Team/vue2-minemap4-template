<template>
  <div class="home">
    <MapContainer @mapLoad="mapLoad" />
  </div>
</template>
<script>
import MapContainer from "@/components/map/MapContainer.vue";
export default {
  name: "Home",
  props: {},
  components: {
    MapContainer,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    mapLoad() {},
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
