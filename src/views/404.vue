<template>
  <div class="container mt-7">
    <div class="row align-items-center">
      <div
        class="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0"
      >
        <!-- Image -->
        <div class="text-center">
          <img
            src="../assets/img/illustrations/lost.svg"
            alt="..."
            class="img-fluid"
          />
        </div>
      </div>
      <div class="col-12 col-md-5 col-xl-4 order-md-1 my-5">
        <div class="text-center">
          <!-- Preheading -->
          <h6 class="text-uppercase text-muted mb-4">
            404 error
          </h6>

          <!-- Heading -->
          <h1 class="display-4 mb-3">
            Page not found
          </h1>

          <!-- Subheading -->
          <p class="text-muted mb-4">
            Looks like you ended up here by accident?
          </p>

          <!-- Button -->
          <router-link class="btn btn-lg btn-primary" :to="{ name: 'Home' }"
            >Return to your homepage</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
