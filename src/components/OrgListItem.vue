<template>
  <div class="column">
    <q-btn label="Детали"
           color="grey"
           style="width: max-content"
           flat dense no-caps
           :icon-right="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
           @click="expanded = !expanded"/>
    <q-slide-transition>
      <div v-show="expanded">
        <q-card-section class="text-subitle2">
          <div class="column">
            <p><span class="l-title">Форма собственности: </span>
              {{item.ownershipType}}</p>
            <p><span class="l-title">Правовая форма: </span>
              {{item.legalType}}</p>
            <p><span class="l-title">Руководитель: </span>
              {{item.director}}</p>
            <p><span class="l-title">Тел: </span>
              {{item.orgPhone}},
              <span class="l-title" style="margin-left: 12px">факс: </span>
              {{item.fax}}</p>
            <p><span class="l-title">Веб-сайт: </span>
              <a :href="item.webSite">{{item.webSite}}</a></p>
            <p><span class="l-title">Лицензия №</span>
              {{item.licenseCode}}
              <span class="l-title">от </span>
              {{item.licenseDate}}</p>
            <p><span class="l-title">Свидетельство №</span>{{item.certificateCode}}
              <span class="l-title">от </span>
              {{item.certificateDate}}</p>
            <p><span class="l-title">Адрес: </span>
              {{ item.orgAddress }}</p>
            <div class="row gap-8"><span class="l-title">Список сотрудников: </span>
              <div v-for="(employee, i) in item.empList" :key="i">
                {{employee.empName}} ({{ employee.empJobTitle }})
                <span v-show="i !== item.empList.length - 1">,</span>
              </div>
            </div>
          </div>
        </q-card-section>
      </div>
    </q-slide-transition>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  name: 'OrgListItem',
  props: {
    item: {
      type: Object
    }
  },
  setup () {
    return {
      expanded: ref(false)
    }
  }
}
</script>
