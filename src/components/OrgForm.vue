<template>
  <q-card>
    <q-card-section>
      <title-component :title="'Организация'" :edit-plan="editPlan"/>
    </q-card-section>
    <q-separator/>
    <q-card-section>
      <span class="text-grey">Заполните все обязательные поля со знаком '*'</span>
    </q-card-section>
    <q-card-section>
      <q-form class="column gap-8">
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Форма собственности <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="ownershipType" outlined dense />
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Правовая форма <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="legalType" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Название организации <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="orgName" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">ФИО руководителя <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="director" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Факс <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="fax" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Телефон <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="orgPhone" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Веб-страница <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="webSite" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Номер лицензии (уникальный) <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="licenseCode" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Дата получения лицензии <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="licenseDate" outlined dense mask="####/##/##" placeholder="yyyy/mm/dd">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="primary">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="licenseDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Номер свидетельства <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="certificateCode" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Дата получения свидетельства <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="certificateDate" outlined dense mask="####/##/##" placeholder="yyyy/mm/dd">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer" color="primary">
                <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                  <q-date v-model="certificateDate">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Адресс <span class="text-red-5">*</span></div>
          <q-input class="f-el_input" v-model="orgAddress" outlined dense/>
        </div>
        <div class="row full-width-el f-el">
          <div class="f-el_txt">Список сотрудников <span class="text-red-5">*</span></div>
          <q-btn flat no-caps icon="add" color="primary" label="Добавить сотрудника" @click="empDialog = true"/>
        </div>
        <div class="row gap-8">
          <emp-list-item v-for="(item, i) in employees" :key="i"
                         :item="item" :itemIndex="i"/>
        </div>
        <div class="row full-width-el f-el">
          <div class="row gap-8">
            <q-btn v-show="editPlan" label="Отмена" color="primary"
                   no-caps flat @click="cancel"/>
            <q-btn label="Очистить" color="primary"
                   no-caps flat @click="clearForm"/>
          </div>
          <q-btn label="Сохранить" color="primary"
                 no-caps flat @click="saveData" :disable="btnValid"/>
        </div>
      </q-form>
    </q-card-section>
    <q-dialog v-model="empDialog">
      <employee-form :edit-plane="false" :data="null"/>
    </q-dialog>
  </q-card>
</template>

<script>
import { computed, ref } from 'vue'
import { mapState, useStore } from 'vuex'
import EmployeeForm from 'components/EmployeeForm'
import EmpListItem from 'components/EmpListItem'
import TitleComponent from 'components/TitleComponent'

export default {
  name: 'OrgForm',
  components: { TitleComponent, EmpListItem, EmployeeForm },
  props: {
    data: {
      type: Object
    }
  },
  setup () {
    const $store = useStore()
    const employees = computed({
      get: () => $store.state.mainstore.employees
    })
    return {
      $store,
      ownershipType: ref(''),
      legalType: ref(''),
      orgName: ref(''),
      director: ref(''),
      fax: ref(''),
      orgPhone: ref(''),
      webSite: ref(''),
      licenseCode: ref(''),
      licenseDate: ref(''),
      certificateCode: ref(''),
      certificateDate: ref(''),
      orgAddress: ref(''),
      emptyErrorText: ref('Данное поле не может быть пустым'),
      employees,
      editPlan: ref(false),
      empDialog: ref(false)
    }
  },
  watch: {
    data (val) {
      if (this.data) {
        this.$store.dispatch('mainstore/resetEmployee', [])
        this.editPlan = true
        this.ownershipType = this.data.ownershipType
        this.legalType = this.data.legalType
        this.orgName = this.data.orgName
        this.director = this.data.director
        this.fax = this.data.fax
        this.orgPhone = this.data.orgPhone
        this.webSite = this.data.webSite
        this.licenseCode = this.data.licenseCode
        this.licenseDate = this.data.licenseDate
        this.certificateCode = this.data.certificateCode
        this.certificateDate = this.data.certificateDate
        this.orgAddress = this.data.orgAddress
        for (let i = 0; i < this.data.empList.length; i++) {
          this.$store.dispatch('mainstore/addEmployee', this.data.empList[i])
        }
      }
    }
  },
  computed: {
    btnValid () {
      return this.ownershipType === '' ||
        this.legalType === '' ||
        this.orgName === '' ||
        this.director === '' ||
        this.fax === '' ||
        this.orgPhone === '' ||
        this.webSite === '' ||
        this.licenseCode === '' ||
        this.licenseDate === '' ||
        this.certificateCode === '' ||
        this.certificateDate === '' ||
        this.orgAddress === '' ||
        this.employees.length === 0
    },
    ...mapState({
      employees: state => state['mainstore/employees']
    })
  },
  methods: {
    saveData () {
      const data = {
        ownershipType: this.ownershipType,
        legalType: this.legalType,
        orgName: this.orgName,
        director: this.director,
        fax: this.fax,
        orgPhone: this.orgPhone,
        webSite: this.webSite,
        licenseCode: this.licenseCode,
        licenseDate: this.licenseDate,
        certificateCode: this.certificateCode,
        certificateDate: this.certificateDate,
        orgAddress: this.orgAddress,
        empList: this.employees
      }
      switch (this.editPlan) {
        case false:
          this.$store.dispatch('mainstore/addOrganization', data)
          break
        case true:
          this.$store.dispatch('mainstore/editOrganization', data)
          break
      }
      this.cancel()
    },
    cancel () {
      this.clearForm()
      this.editPlan = false
    },
    clearForm () {
      this.ownershipType = ''
      this.legalType = ''
      this.orgName = ''
      this.director = ''
      this.fax = ''
      this.orgPhone = ''
      this.webSite = ''
      this.licenseCode = ''
      this.licenseDate = ''
      this.certificateCode = ''
      this.certificateDate = ''
      this.orgAddress = ''
      this.$store.dispatch('mainstore/resetEmployee', [])
      this.$store.dispatch('mainstore/setCurrentId', -1)
    }
  }
}
</script>
