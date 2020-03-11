<template>
  <div>
    <Navbar />
    <div class="row align-items-center justify-content-center">
      <div class="col-12 col-md-6 col-lg-6 col-xl-6 px-lg-6 my-5">
        <h1 class="display-4 text-center mb-3">
          Register
        </h1>
        <p class="text-muted text-center mb-5">
          Free access to our dashboard.
        </p>
        <form @submit.prevent="registerUser">
          <div class="form-group text-left">
            <label for="identity">Fullname</label>
            <input
              id="identity"
              type="text"
              class="form-control form-control-rounded"
              v-model="form.name"
            />
          </div>
          <div class="form-group text-left">
            <label for="email">Email Address</label>
            <input
              id="email"
              type="email"
              class="form-control form-control-rounded"
              v-model="form.email"
            />
          </div>
          <div class="form-group text-left">
            <label for="fname">Password</label>
            <input
              id="fname"
              type="text"
              class="form-control form-control-rounded"
              v-model="form.password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-lg btn-block btn-primary mb-3 form-control-rounded"
          >
            Register
          </button>
          <p class="text-center">
            <small class="text-muted text-center">
              Already have an account?
              <router-link :to="{ name: 'Login' }">Login</router-link>
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
      form: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async registerUser() {
      try {
        let response = await RepositoryFactory.registerUser(this.form);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/");
          swal("Success", "Registration Was successful", "success");
        } else {
          swal("Error", "Something Went Wrong", "error");
        }
      } catch (err) {
        let error = err.response;
        if (error.status == 409) {
          swal("Error", error.data.message, "error");
        } else {
          swal("Error", error.data.err.message, "error");
        }
      }
    }
  }
};
</script>
<style>
.form-control-rounded {
  border-radius: 1em !important;
}
</style>
