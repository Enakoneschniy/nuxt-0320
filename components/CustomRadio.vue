<template>
  <label class="checkbox">
    <input
      class="checkbox-input"
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      @change="$emit('change', value)"
    >
    <span class="check-body"/>
    <span class="label">
      <slot name="label"/>
    </span>
    <span class="link">
      <slot name="link"/>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'CustomRadio',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      value: {
        type: String
      },
      modelValue: {
        default: ''
      }
    },
    computed: {
      shouldBeChecked () {
        return this.modelValue === this.value
      }
    }
  }
</script>

<style scoped lang="sass">
  .checkbox
    display: flex
    align-items: center
    user-select: none

    .label
      padding-left: 15px
      cursor: pointer

    .check-body
      position: relative
      width: 20px
      height: 20px
      display: inline-block
      border: 2px solid #cacaca
      border-radius: 50%
      cursor: pointer

    &-input
      position: absolute
      left: -39999px

      &:checked + .check-body:after
        content: ''
        width: 12px
        height: 12px
        border-radius: 50%
        display: block
        position: absolute
        top: 2px
        left: 2px
        background: orange
</style>
