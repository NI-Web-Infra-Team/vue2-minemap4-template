<template>
  <svg class="wb-icon svg" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "WbIcon",
  data() {
    return {};
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wb-icon.svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  vertical-align: middle;
}
</style>
