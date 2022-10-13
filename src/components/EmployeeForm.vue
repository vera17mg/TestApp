<template>
  <q-card style="width: 500px">
    <q-card-section class="row f-el">
      <title-component :title="`Персональные данные сотрудника`" :edit-plan="editPlane"/>
      <q-btn flat round icon="clear" size="12px" v-close-popup/>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <span class="text-grey">Заполните все обязательные поля со знаком '*'</span>
    </q-card-section>
    <q-card-section>
      <q-form @submit="onSubmit"
              @reset="onReset" class="column">
        <div class="column">
          <span>ФИО сотрудника <span class="text-red-5">*</span></span>
          <q-input v-model="empName" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Домашний телефон <span class="text-red-5">*</span></span>
          <q-input v-model="empHomePhone" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Мобильный телефон <span class="text-red-5">*</span></span>
          <q-input v-model="empMobilePhone" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Рабочий телефон <span class="text-red-5">*</span></span>
          <q-input v-model="empWorkPhone" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Домашний адрес <span class="text-red-5">*</span></span>
          <q-input v-model="empAddress" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Почта <span class="text-red-5">*</span></span>
          <q-input v-model="empMailBox" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Банковские реквизиты <span class="text-red-5">*</span></span>
          <q-input v-model="empBank" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="column">
          <span>Должность <span class="text-red-5">*</span></span>
          <q-input v-model="empJobTitle" dense outlined lazy-rules
                   :rules="[ val => val && val.length > 0 || emptyErrorText]"/>
        </div>
        <div class="row f-el">
          <q-btn flat no-caps label="Очистить" type="reset" color="primary"/>
          <q-btn flat no-caps label="Сохранить" type="submit" color="primary" @click="saveEmployee" v-close-popup/>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { useStore } from 'vuex'
import TitleComponent from 'components/TitleComponent'

export default {
  name: 'EmployeeForm',
  components: { TitleComponent },
  props: {
    editPlane: {
      type: Boolean
    },
    data: {
      type: Object
    },
    id: {
      type: Number
    }
  },
  created () {
    if (this.data) {
      this.empName = this.data.empName
      this.empHomePhone = this.data.empHomePhone
      this.empJobTitle = this.data.empJobTitle
      this.empMailBox = this.data.empMailBox
      this.empAddress = this.data.empMailBox
      this.empMobilePhone = this.data.empMobilePhone
      this.empWorkPhone = this.data.empWorkPhone
      this.empBank = this.data.empBank
    }
  },
  setup () {
    const $q = useQuasar()
    const $store = useStore()
    const empName = ref(null)
    const empHomePhone = ref(null)
    const empJobTitle = ref(null)
    const empMailBox = ref(null)
    const empAddress = ref(null)
    const empMobilePhone = ref(null)
    const empBank = ref(null)
    const empWorkPhone = ref(null)
    return {
      $q,
      $store,
      empName,
      empHomePhone,
      empMobilePhone,
      empAddress,
      empMailBox,
      empBank,
      empWorkPhone,
      empJobTitle,
      emptyErrorText: ref('Данное поле не может быть пустым'),
      onSubmit () {},
      onReset () {
        empName.value = null
        empHomePhone.value = null
        empMobilePhone.value = null
        empAddress.value = null
        empMailBox.value = null
        empJobTitle.value = null
        empBank.value = null
        empWorkPhone.value = null
      }
    }
  },
  methods: {
    saveEmployee () {
      const data = {
        empName: this.empName,
        empHomePhone: this.empHomePhone,
        empMobilePhone: this.empMobilePhone,
        empAddress: this.empAddress,
        empMailBox: this.empMailBox,
        empJobTitle: this.empJobTitle,
        empBank: this.empBank,
        empWorkPhone: this.empWorkPhone
      }
      switch (this.editPlane) {
        case false:
          this.$store.dispatch('mainstore/addEmployee', data)
          break
        case true:
          this.$store.dispatch('mainstore/setCurrentId', this.id)
          this.$store.dispatch('mainstore/editEmployee', data)
          break
      }
    }
  }
}
</script>
