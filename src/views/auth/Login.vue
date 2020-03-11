<template>
  <div>
    <Navbar :user="user" :key="ckey" />
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6 col-lg-6 col-xl-6 px-lg-6 my-5">
        <h1 class="display-4 text-center mb-3">
          Login
        </h1>
        <p class="text-muted text-center mb-5">
          Free access to our dashboard.
        </p>
        <form @submit.prevent="login">
          <div class="form-group text-left">
            <label for="identity">Email</label>
            <input
              id="identity"
              type="email"
              class="form-control form-control-rounded"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col text-left">
                <label class="form-check-label">Password</label>
                <input
                  type="password"
                  class="form-control form-control-rounded"
                  v-model="form.password"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-block btn-primary mb-3 form-control-rounded"
          >
            Login
          </button>
          <hr />
          <p class="text-center">
            <small class="text-muted text-center">
              Don't have an account yet?
              <router-link :to="{ name: 'Register' }">register</router-link>
              .
            </small>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { RepositoryFactory } from "@/repository/RepositoryFactory";
import swal from "sweetalert";
export default {
  data() {
    return {
      user: "",
      token: "",
      form: {
        email: "",
        password: ""
      },
      ckey: 0
    };
  },
  methods: {
    async login() {
      try {
        let response = await RepositoryFactory.loginUser(this.form);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        this.user = response.data.user.email;
        this.token = localStorage.getItem("jwt");
        this.ckey++; //This forces the navbar to rerender
        swal("Success", "Login Successful", "success");
        this.$router.push("/dashboard");
      } catch (error) {
        swal("Error", error.response.data.error, "error");
      }
    }
  }
};
</script>
