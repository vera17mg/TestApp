<template>
  <q-page class="flex flex-center ip-main">
    <div class="row full-width-el no-wrap gap-16">
      <org-form class="f-el_input" v-model:data="getData"/>
      <org-list class="f-el_txt" @editOrgData="editOrgData"/>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import OrgList from 'components/OrgList'
import OrgForm from 'components/OrgForm'

export default defineComponent({
  name: 'IndexPage',
  components: { OrgForm, OrgList },
  setup () {
    const $store = useStore()
    return {
      $store,
      data: ref(null)
    }
  },
  computed: {
    getData () {
      return this.data ?? {}
    }
  },
  methods: {
    editOrgData () {
      const id = this.$store.getters['mainstore/getIndex']
      const arr = this.$store.getters['mainstore/getOrganizations']
      this.data = arr.find(el => el === arr[id])
    }
  }
})
</script>
