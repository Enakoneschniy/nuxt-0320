<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-4">
        Hello, world!
      </h1>
      <p class="lead">
        {{ text | truncate(100) }}
      </p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    <div>
      <input type="text" :value="firstName" @input="firstName = $event.target.value">
      <input v-model="lastName" type="text">
    </div>
    <div>
      {{ fullName }}
    </div>
    <div>
      <custom-radio v-model="radio" value="1">
        <template slot="label">
          I agree
        </template>
        <template slot="link">
          <nuxt-link :to="{ name: 'about' }">
            Privacy policy
          </nuxt-link>
        </template>
      </custom-radio>
      <custom-radio v-model="radio" value="2">
        <template slot="label">
          I agree
        </template>
        <template slot="link">
          <nuxt-link :to="{ name: 'about' }">
            Privacy policy
          </nuxt-link>
        </template>
      </custom-radio>
    </div>
    <div>
      <custom-check v-model="checks" value="1">
        <template slot="label">
          I agree
        </template>
        <template slot="link">
          <nuxt-link :to="{ name: 'about' }">
            Privacy policy
          </nuxt-link>
        </template>
      </custom-check>
      <custom-check v-model="checks" value="2" :disabled="isDisabled">
        <template slot="label">
          I agree
        </template>
        <template slot="link">
          <nuxt-link :to="{ name: 'about' }">
            Privacy policy
          </nuxt-link>
        </template>
      </custom-check>
    </div>
    <input v-model="num" type="text">
    <br>
    {{ num | formatNumbers }}
    <pre>{{ articles }}</pre>
    <button class="btn btn-primary" @click="showMessage">
      Show Message
    </button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import CustomCheck from '../components/CustomCheck'
  import CustomRadio from '../components/CustomRadio'
  import myAlert from '../mixins/alert'

  export default {
    name: 'Home',
    components: {
      CustomRadio,
      CustomCheck
    },
    filters: {
      formatNumbers (number) {
        if (number > 999 && number <= 99999) {
          return (number / 1000).toFixed(1) + 'K'
        } else if (number > 99999) {
          return (number / 1000000).toFixed(1) + 'M'
        }
        return number
      }
    },
    mixins: [myAlert],
    data: () => ({
      firstName: 'Ivan',
      lastName: 'Ivanov',
      text: 'Для распространённых задач форматирования текста во Vue используются фильтры. Они находят своё применение в двух местах: в mustache-интерполяциях и в выражениях v-bind (последнее поддерживается в 2.1.0+). Фильтры добавляются в конце выражения JavaScript и отделяются вертикальной чертой:',
      checks: [],
      radio: '',
      num: 1000,
      isDisabled: true
    }),
    computed: {
      ...mapGetters({
        articles: 'articles/items'
      }),
      fullName () {
        return `${this.firstName} ${this.lastName}`
      }
    },
    watch: {
      checks: {
        handler (newValue) {
          this.isDisabled = !newValue.includes('1')
          if (this.isDisabled === true) {
            this.checks.length = 0
          }
        },
        deep: true
      }
    },
    mounted () {
      setTimeout(() => {
        this.firstName = 'Petya'
      }, 5000)
    }
  }
</script>
