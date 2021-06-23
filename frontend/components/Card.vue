<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content" @click="increaseCounter">
      <div class="content has-text-centered">
        <slot />
      </div>
    </div>
    <footer v-if="count" class="card-footer">
      <div class="card-footer-item">
        <span>You clicked {{ counter }}!.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increaseCounter() {
      this.counter += 1
    },
  },
}
</script>

<style scoped>
.card {
  width: 200px;
  height: 300px;
  margin: 1rem;
}
.card:hover {
  transform: scale(1.1);
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 50%),
    0 0px 0 1px rgb(10 10 10 / 10%);
  transition: cubic-bezier(0.075, 0.82, 0.165, 1);
  transition-duration: 0.2s;
}
.card-content {
  height: 200px;
  cursor: pointer;
}
img {
  max-height: 150px;
}
</style>
