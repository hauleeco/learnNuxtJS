<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/decks">Decks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Settings</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  background: rgb(216, 202, 11);
  color: rgb(131, 10, 10);
  height: 60px;
  nav,
  ul {
    height: 60px;
  }
  ul {
    align-items: center;
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 1.5rem;
      a {
        color: red;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &.nuxt-link-exact-active {
          color: yellow;
        }
      }
    }
  }
}
</style>
