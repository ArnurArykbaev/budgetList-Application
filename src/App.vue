<template>
  <div id="App">
    <FormBalance @submitForm="onFormSubmit"/>
    <TotalBalance :total="totalBalance" />
    <BudgetList />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import FormBalance from "@/components/FormBalance.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormBalance,
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget"]),
    totalBalance() {
      return Object.values(this.userBudget).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  methods: {
    ...mapActions("budgetList", ["addNewUser"]),
    onFormSubmit(data) {
      this.addNewUser(data);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
