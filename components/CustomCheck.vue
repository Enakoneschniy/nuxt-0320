<template>
  <label class="checkbox">
    <input
      class="checkbox-input"
      type="checkbox"
      :checked="shouldBeChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
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
    name: 'CustomCheck',
    model: {
      prop: 'modelValue',
      event: 'change'
    },
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      modelValue: {
        default: false
      },
      trueValue: {
        default: true
      },
      falseValue: {
        default: false
      }
    },
    computed: {
      shouldBeChecked () {
        if (Array.isArray(this.modelValue)) {
          return this.modelValue.includes(this.value)
        }
        // Обратите внимание, что `true-value` и` false-value` являются camelCase в JS
        return this.modelValue === this.trueValue
      }
    },
    methods: {
      updateInput (event) {
        const isChecked = event.target.checked

        if (Array.isArray(this.modelValue)) {
          const newModelValue = [...this.modelValue]

          if (isChecked) {
            newModelValue.push(this.value)
          } else {
            newModelValue.splice(newModelValue.indexOf(this.value), 1)
          }

          this.$emit('change', newModelValue)
        } else {
          this.$emit('change', isChecked ? this.trueValue : this.falseValue)
        }
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
      cursor: pointer

    &-input
      position: absolute
      left: -39999px

      &:checked + .check-body:after
        content: ''
        width: 12px
        height: 12px
        display: block
        position: absolute
        top: 2px
        left: 2px
        background: orange
</style>
