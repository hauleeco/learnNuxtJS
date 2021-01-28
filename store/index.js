import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      deck: [],
    },
    mutations: {
      setDecks(state, deck) {
        state.deck = deck
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context){
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setDecks', [
              {
                _id: 1,
                name: 'Learn English',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                thumbnail: 'https://wallpapercave.com/wp/wp5390915.jpg',
              },
              {
                _id: 2,
                name: 'Learn Chinese',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                thumbnail: 'https://wallpapercave.com/wp/wp5390915.jpg',
              },
              {
                _id: 3,
                name: 'Learn Japanese',
                description:
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                thumbnail: 'https://wallpapercave.com/wp/wp5390915.jpg',
              },
            ],)
            resolve()
          }, 1500)
          //  reject (new Error());
        })
      },
      setDecks(vuexContext, deck) {
        vuexContext.commit('setDecks', deck)
      },
    },
    getters: {
      decks(state) {
        return state.deck
      },
    },
  })
}

export default createStore
