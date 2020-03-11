<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
// // @ is an alias to /src
import { RepositoryFactory } from "@/repository/RepositoryFactory";

export default {
  data() {
    return {
      item: ""
    };
  },
  methods: {
    submit: () => {
      RepositoryFactory.createTodo(this.item).then(res => {
        console.log(res);
      });
    },
    index() {
      // RepositoryFactory.getUser().then(res => {
      //   console.log(res);
      // });
    }
  },
  created() {
    this.index();
  }
};
</script>
