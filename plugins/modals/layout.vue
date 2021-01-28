<template>
  <div modal="true">
    <div v-if="visible" :data-modal="name" class="modal">
      <div
        aria-modal="true"
        data-reach-dialog-content="true"
        tabindex="-1"
        class="modal_mask"
      >
        <div class="modal_body">
          <slot :payload="payload" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VMdal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      payload: null,
      visible: false,
    }
  },
  beforeMount() {
    // open event
    VMdal.EventBus.$on('open', (params) => {
      if (this.name === params.name) {
        this.open(params)
      }
    })

    VMdal.EventBus.$on('close', (params) => {
      if (this.name === params.name) {
        this.close()
      }
    })
  },
  methods: {
    close() {
      this.visible = false
    },
    open(params) {
      this.visible = true
      // todosomething
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: unset;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-top: 10px;
  padding-bottom: 10px;
  &_body {
    background: rgb(239, 239, 243);
  }
}
</style>
