<template>
  <div class="form">
    <NavBar />
    <section class="form__section">
      <h1 class="form__title">Créer un compte</h1>
      <form @submit.prevent="submitForm" class="form__form">
        <div class="input-wrapper">
          <input v-model="state.signupData.firstName" type="text" name="firstName" required />
          <span class="underline"></span>
          <p class="formErrorMsg" v-if="v$.signupData.firstName.$error">
            Prénom invalid !
          </p>
          <label>Prénom</label>
        </div>
        <div class="input-wrapper">
          <input v-model="state.signupData.lastName" type="text" name="lastName" required />
          <span class="underline"></span>
          <p class="formErrorMsg" v-if="v$.signupData.lastName.$error">
            Nom invalide !
          </p>
          <label>Nom</label>
        </div>
        <div class="input-wrapper">
          <input v-model="state.signupData.email" type="email" name="email" required />
          <span class="underline"></span>
          <p class="formErrorMsg" v-if="v$.signupData.email.$error">
            Adresse mail invalide !
          </p>
          <label>Adresse Mail</label>
        </div>
        <div class="input-wrapper">
          <input v-model="state.signupData.password" type="password" name="password" required />
          <span class="underline"></span>
          <p class="formErrorMsg" v-if="v$.signupData.password.$error">
            Mot de passe trop faible !
          </p>
          <label>Mot de passe</label>
        </div>
        <div class="input-wrapper">
          <input v-model="state.signupData.confirmPassword" type="password" name="confirmPassword" required />
          <span class="underline"></span>
          <p class="formErrorMsg" v-if="v$.signupData.confirmPassword.$error">
            Mot de passe ne correspond pas !
          </p>
          <label>Confirmer le mot de passe</label>
        </div>
        <div class="btn-wrapper">
          <button class="submitBtn" type="submit">Confirmer</button>
        </div>
      </form>
      <p class="form__phrase">Vous avez deja un compte?<router-link class="form__link" to="/login">identifiez vous!
        </router-link>
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import { reactive, computed } from 'vue'

export default {
  name: 'RegistrationView',
  components: {
    NavBar
  },

  setup() {
    const state = reactive({
      signupData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    })

    const rules = computed(() => {
      return {
        signupData: {
          firstName: { required },
          lastName: { required },
          email: {
            required,
            email,
          },
          password: { required, minLength: minLength(8) },
          confirmPassword: { required, sameAs: sameAs(state.signupData.password) }
        }
      }
    })
    const v$ = useVuelidate(rules, state)

    return {
      state,
      v$,
    }
  },

  methods: {
    submitForm() {
      this.v$.$validate()

      // if (this.state.signupData.password === this.state.signupData.confirmPassword && !this.v$.$error) {
      //   this.$axios.post('http://localhost:3000/auth/signup', {
      //     signupData: {
      //       firstName: this.firstName,
      //       lastName: this.lastName,
      //       email: this.email,
      //       password: this.password
      //     }
      //   })
      //     .then(response => {
      //       console.log(response)
      //     }).catch(error => {
      //       console.log(error)
      //     })
      // }
    }
  }
}

</script>
