<template>
  <li>
    <NuxtLink class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail" :alt="`Thumbnail card of ${name}`" />
        <div class="card_body">
          <h3>{{ name }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    id:{
      type: Number,
      required:true
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>
