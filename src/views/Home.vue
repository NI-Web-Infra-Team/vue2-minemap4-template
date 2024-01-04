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
  methods: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
};
</script>
<style lang="scss" scoped></style>
