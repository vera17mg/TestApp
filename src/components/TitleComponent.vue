<template>
  <span class="title-style" v-html="title"/>
  <span v-show="editPlan" class="edit-txt"> (Редактирование)</span>
</template>

<script>
export default {
  name: 'TitleComponent',
  props: {
    editPlan: {
      type: Boolean
    },
    title: {
      type: String
    }
  }
}
</script>
