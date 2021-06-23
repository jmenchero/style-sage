<template>
  <nav class="panel">
    <p class="panel-heading">
      {{ title }}
    </p>
    <div class="panel-block">
      <img :src="photo" />
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
}
</script>
