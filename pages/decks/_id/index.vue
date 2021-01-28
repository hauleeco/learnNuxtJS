<template>
  <!-- <h1>Your Decks {{ $route.params.id }} is active</h1> -->
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck#{{ $route.params.id }}: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Add more card
          </button>
        </div>
        <hr class="device" />
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <v-modal name="CreateCardModal">
      <div class="modal_body">
        <h2>Create a new Deck</h2>
        <form action="">
          <div class="form_group">
            <label for="">Name:</label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter name Deck"
            />
          </div>

          <div class="form_group">
            <label for="">Description:</label>
            <textarea
              class="form_control"
              type="text"
              placeholder="Please enter description"
            />
          </div>

          <div class="form_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>

          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml_3" @click.prevent="createDeck">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import CardList from '~/components/Cards/CardList.vue'
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          deck: {
            _id: 1,
            name: `Learn English by ${context.params.id} `,
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            thumbnail: 'https://wallpapercave.com/wp/wp5390915.jpg',
          },
        })
      }, 1500)
    }).then((data)=>{
      return data
    })
    .catch((e)=>{
      console.log(e)
    })
  },
  methods: {
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
    },
  },
  validate({ params }) {
    return /^[0-9]$/.test(params.id)
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://vietstudio.vn/wp-content/uploads/2019/07/xu-huong-thiet-ke-shop-kinh-doanh-quan-ao-2019-4.jpg',
          keyword: 'sugar',
        },
        {
          _id: 2,
          picture:
            'https://vietstudio.vn/wp-content/uploads/2019/07/xu-huong-thiet-ke-shop-kinh-doanh-quan-ao-2019-4.jpg',
          keyword: 'sugar',
        },
        {
          _id: 3,
          picture:
            'https://vietstudio.vn/wp-content/uploads/2019/07/xu-huong-thiet-ke-shop-kinh-doanh-quan-ao-2019-4.jpg',
          keyword: 'sugar',
        },
        {
          _id: 4,
          picture:
            'https://vietstudio.vn/wp-content/uploads/2019/07/xu-huong-thiet-ke-shop-kinh-doanh-quan-ao-2019-4.jpg',
          keyword: 'sugar',
        },
        {
          _id: 5,
          picture:
            'https://vietstudio.vn/wp-content/uploads/2019/07/xu-huong-thiet-ke-shop-kinh-doanh-quan-ao-2019-4.jpg',
          keyword: 'sugar',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 3rem;
    img {
      width: 60%;
    }
  }
  .device {
    margin: 2rem 0;
  }
}
.modal_body {
  background: rgb(201, 197, 190);
  padding: 1rem;
}
</style>
