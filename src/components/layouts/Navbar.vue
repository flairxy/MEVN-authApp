<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light">
      <router-link :to="{ name: 'Login' }" class="navbar-brand pl-4" href="#"
        >Home</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target=".navbar-collapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="w-100">
        <div class="navbar-collapse collapse pr-5">
          <ul class="navbar-nav ml-auto" v-if="!authUser && !token">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Login' }"
                >Login</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Register' }"
                >Regiser</router-link
              >
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-else>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Dashboard' }"
                >Dashboard</router-link
              >
            </li>
            <li class="nav-item">
              <a class="btn btn-white" @click.prevent="onLogout">Logout </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { RepositoryFactory } from "@/repository/RepositoryFactory";
export default {
  props: ["user"],
  data() {
    return {
      authUser: this.user,
      token: ""
    };
  },
  methods: {
    onLogout() {
      let token = localStorage.getItem("jwt");
      RepositoryFactory.logOutUserAll(token).then(() => {
        localStorage.removeItem("jwt");
        this.$router.push("/");
      });
    },
    getUser() {
      this.token = localStorage.getItem("jwt");
    }
  },
  created() {
    this.getUser();
  }
};
</script>
