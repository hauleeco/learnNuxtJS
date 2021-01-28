<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>

      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :key="deck._id"
          :id="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="test_body">
        <h2>Create a new Deck</h2>
        <deck-form @submit="onSubmit" />
      </div>
    </v-modal>
  </div>
</template>

<script>
import axios from 'axios'

import DeckForm from '@/components/Decks/DeckForm.vue'
import DeckList from '@/components/Decks/DeckList.vue'
export default {
  components: {
    DeckList,
    DeckForm,
  },
  computed:{
    decks() {
      return this.$store.getters.decks
    }
  },
  // created() {
  //   console.log('this.decks ', this.decks)
  //   this.$store.dispatch('setDecks', this.decks)
  // },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
    },
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    onSubmit(deckData) {
      axios
        .post(
          'https://nuxt-learning-english-fb06a-default-rtdb.firebaseio.com/decks.json',
          deckData
        )
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>

<style lang="scss">
.decks-list {
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck {
    display: block;
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}
.modal_body {
  background: rgb(201, 197, 190);
  padding: 1rem;
}
</style>
