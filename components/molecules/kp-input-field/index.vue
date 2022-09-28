<template>
  <div class="input-field">
    <label v-if="label && !placeholder" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="inputValue"
      :type="type"
      :value="value"
      :placeholder="!(label && isFocus) ? placeholder : ''"
      @input="$emit('input', $event.value)"
      @focus="isFocus = true"
      @focusout="isFocus = false"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'KpInputField',
  props: {
    id: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'label'
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isFocus: false,
      inputValue: ''
    }
  }
})
</script>

<style lang="scss" scoped>
input {
  background: none;
  border: none;
  border-bottom: 2px solid $light-grey;
  padding: 8px 10px;
  font-size: 18px;
  color: $regular;
  width: 100%;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  &:focus {
    outline: none;
    border-bottom: 2px solid $regular;
  }
}

.input-field {
  position: relative;
  height: 63px;
  min-width: 55px;
  label {
    position: absolute;
    top: 0;
    font-size: 18px;
    color: $secondary;
  }
  input {
    position: absolute;
    bottom: 0;
  }
}
</style>
