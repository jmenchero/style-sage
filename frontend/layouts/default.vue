<template>
  <div>
    <nav class="navbar header has-shadow fixed-top" fixed-top="True">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="~assets/logo.svg" class="logo" />
        </a>
      </div>
      <span class="navbar-item">Juan Menchero</span>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">Projects</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>

    <nav class="navbar footer has-shadow fixed-top" fixed-top="True">
      <div>
        <span>Coded with</span>
        <b-icon icon="heart" size="is-small" />
        <span>from Galicia</span>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'Cat-Clicker',
          icon: 'cat',
          to: { name: 'index' },
        },
        {
          title: 'Gifs',
          icon: 'file-code',
          to: { name: 'gifs' },
        },
        {
          title: 'Coupons',
          icon: 'chart-bar',
          to: { name: 'coupons' },
        },
      ],
    }
  },
}
</script>

<style scoped>
.logo {
  height: 100%;
}
.navbar {
  position: fixed;
  width: 100%;
  padding-top: 1rem;
  justify-content: space-between;
}
.footer {
  bottom: 0;
  padding: 1rem;
}
</style>
