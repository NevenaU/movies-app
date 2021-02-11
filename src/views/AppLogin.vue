<template>
  <div>
   <!--  <h1 @click="incrementCounter">counter je {{$store.getters.counter}}</h1>
    <h1>Double counter {{doubledCounter}}</h1>
    <button @click="resetCounter">Reset Counter</button> -->
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Email</label>
        <input
          required
          v-model="credentials.email"
          type="email"
          class="form-control"
          id="name"
          aria-describedby="name"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          required
          v-model="credentials.password"
          type="password"
          class="form-control"
          id="password"
          aria-describedby="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
//mapActions 
import { mapGetters, mapMutations} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapGetters(["counter", "doubledCounter", "activeUser"])
  },
  /*  methods: {
    ...mapActions(["login"]),
    onSubmit() {
      this.login(this.credentials);
    }
  }, */
  methods: {
    async login() {
      console.log("this.login", this.credentials)
      /* const {user, token} = await authService.login(this.credentials);
      this.activeUser = user; */
      // try {
        
        await this.$store.dispatch("login", this.credentials);

        console.log('action resolved', this.activeUser)
      // } catch(error) {
      //   console.log(error);
      //   alert('invalid credentials');
      // }

      this.$router.push('/');
    },
    incrementCounter() {
      this.$store.commit("incremetCouter");
    },
    resetCounter() {
      this.setCounter(0);
      //this.$store.commit('setCounter',0);
    },
     onSubmit() {
      this.login(this.credentials);
    },
    ...mapMutations(["incremetCouter", "setCounter", "activeUser"])
  },

  created() {
    //console.log({store: this.$store});
    console.log(this.$store.getters.counter);
  }
};
</script>
<style>
</style>