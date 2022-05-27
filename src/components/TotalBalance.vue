<template>
  <div :class="totalColor" class="total-value" >Balance: {{ total }}</div>
</template>

<script>

export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    totalColor() {
      return this.total > 0 ? 'Success' : this.total === 0 ? '' : 'Danger';
    },
  },
};
</script>

<style scoped>
.total-value {
  font-style: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.Success {
  color: green;
}
.Danger {
  color: red;
}
</style>
