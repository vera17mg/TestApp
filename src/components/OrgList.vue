<template>
  <q-list>
    <q-card>
      <q-card-section class="title-style">Список организаций</q-card-section>
    </q-card>
    <q-scroll-area :thumb-style="thumbStyle"
                   :bar-style="barStyle"
                   class="ol-scroll-area">
      <q-card v-for="(item, i) in items" :key="i"
              class="ol-scroll-area_cards">
        <q-item-label header class="row full-width-el f-el">
          {{ item.orgName }}
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" color="primary" flat dense round icon="edit" @click="editItem(i)"/>
            <q-btn class="gt-xs" size="12px" color="primary" flat dense round icon="delete" @click="deleteItem(i)"/>
          </div>
        </q-item-label>
        <q-separator/>
        <q-item>
          <org-list-item :item="item"/>
        </q-item>
      </q-card>
    </q-scroll-area>
  </q-list>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
import OrgListItem from 'components/OrgListItem'

export default {
  name: 'OrgList',
  components: { OrgListItem },
  setup () {
    const $store = useStore()
    const items = computed({
      get: () => $store.state.mainstore.organizations
    })
    return {
      $store,
      thumbStyle: {
        right: '4px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },

      barStyle: {
        right: '2px',
        borderRadius: '9px',
        backgroundColor: '#027be3',
        width: '9px',
        opacity: 0.2
      },
      items
    }
  },
  computed: {
    ...mapState({
      items: state => state['mainstore/organizations']
    })
  },
  methods: {
    deleteItem (index) {
      this.$store.dispatch('mainstore/deleteItem', index)
    },
    editItem (index) {
      this.$store.dispatch('mainstore/setCurrentId', index)
      this.$emit('editOrgData')
    }
  }
}
</script>
