<template>
  <div class="card">
    <header v-if="title" class="card-header">
      <p class="card-header-title has-text-grey">
        {{ title }}
      </p>
    </header>
    <div class="card-content" @click="increaseCounter">
      <div class="content has-text-centered">
        <img :src="photo" />
      </div>
    </div>
    <footer v-if="count" class="card-footer">
      <div class="card-footer-item">
        <span>You clicked {{ counter }}!.</span>
      </div>
    </footer>
    <footer v-if="footer" class="card-footer">
      <div class="card-footer-item">
        <span>{{ footer }}</span>
      </div>
      <div class="card-footer-item">
        <b-button
          v-if="likeable"
          class="button--like"
          size="is-small"
          icon-left="heart"
        >
          Like
        </b-button>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    footer: {
      type: String,
      required: false,
      default: '',
    },
    count: {
      type: Boolean,
      required: false,
    },
    likeable: {
      type: Boolean,
      required: false,
    },
    photo: {
      type: String,
      required: true,
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
  width: 250px;
  height: 330px;
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
.card-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.button--like {
  position: absolute;
  width: 4rem;
  margin: 1rem;
  right: 0;
  bottom: 0;
}
img {
  max-height: 150px;
}
</style>
