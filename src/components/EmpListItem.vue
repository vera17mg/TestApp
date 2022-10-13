<template>
  <div class="row f-el eli-main">
    <span class="eli-main_txt">{{item.empName}}</span>
    <q-btn icon="edit" color="primary" flat round dense size="11px" @click="empDialog = true"/>
    <q-btn icon="delete" color="primary" flat round dense size="11px" @click="deleteItem"/>
  </div>
  <q-dialog v-model="empDialog">
    <employee-form :edit-plane="true" :data="item" :id="itemIndex"/>
  </q-dialog>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import EmployeeForm from 'components/EmployeeForm'

export default {
  name: 'EmpListItem',
  components: { EmployeeForm },
  props: {
    item: {
      type: Object
    },
    itemIndex: {
      type: Number
    }
  },
  setup () {
    return {
      $store: useStore(),
      empDialog: ref(false)
    }
  },
  methods: {
    deleteItem () {
      this.$store.dispatch('mainstore/deleteEmployeeBefore', this.itemIndex)
    }
  }
}
</script>
