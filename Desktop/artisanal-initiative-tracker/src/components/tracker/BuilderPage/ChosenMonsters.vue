<template lang="">
  <Panel header="Current Encounter" class="create-card">
    <DataTable :value="monsters">
      <template #empty> No creatures selected. </template>
      <Column field="name" header="Name">
        <template #body="{ data }">
          <a :href="'monsters_html/' + data.slug + '.html'" target="_blank">{{ data.name }}</a>
        </template>
      </Column>
      <Column field="type" header="Type"></Column>
      <Column field="cr" header="CR"></Column>
      <Column header style="width: 6rem">
        <template #body="{ data }">
          <Button icon="pi pi-trash" @click="removeMonster(data.name)" />
        </template>
      </Column>
    </DataTable>
  </Panel>
</template>
<script setup>
    import { useStore } from 'vuex';
    import { computed } from 'vue';

    const store = useStore();

    const monsters = computed(
        {
            get: () => store.getters.currentMonsters,
        }
    )

    const removeMonster = (name) => {
        store.dispatch('removeCurrentMonster', name);
    }
</script>
<style scoped></style>
