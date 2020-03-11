<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>Welcome {{ user.name }}</h1>
    </div>
  </div>
</template>

<script>
// // @ is an alias to /src
import { RepositoryFactory } from "@/repository/RepositoryFactory";

export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    async getUser() {
      let token = localStorage.getItem("jwt");
      try {
        let response = await RepositoryFactory.getUser(token);
        this.user = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.getUser();
  }
};
</script>
