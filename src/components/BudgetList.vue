<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <ElRow class="filter-row" type="flex" justify="space-around" >
            <ElButton type="primary" size="small" @click="selectedType = 'All'">All</ElButton>
            <ElButton type="success" size="small" @click="selectedType = 'INCOME'">Income</ElButton>
            <ElButton type="danger" size="small" @click="selectedType = 'OUTCOME'">Outcome</ElButton>
      </ElRow>
      <template v-if="!isEmpty">
        <BudgetListItem
          v-for="(item, list) in userBudget"
          :key="list"
          :item="item"
          :selectedType="selectedType"
        />
      </template>
      <ElAlert
        v-else
        type="info"
        :title="emptyTitle"
        :closable="false"
      ></ElAlert>
    </ElCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BudgetListItem from "@/components/BudgetListItem";

export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    selectedType: "All",
    header: "Budget List",
    emptyTitle: "Empty List",
  }),
  methods: {
  },
  computed: {
    ...mapGetters("budgetList", ["userBudget"]),
    isEmpty() {
      return !Object.keys(this.userBudget).length;
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  max-width: 500px;
  margin: auto;
}
.filter-row {
  margin-bottom: 20px;
}
</style>
