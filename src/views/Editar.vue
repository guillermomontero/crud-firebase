<template>
  <div>
    <h1>Editar</h1>
    {{ id }} - {{ tarea }}
    <form @submit.prevent="editarTarea(tarea)">
      <input type="text" v-model="tarea.nombre">
      <button>Editar</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Editar',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState(['tarea'])
  },
  methods: {
    ...mapActions(['getTarea', 'editarTarea']),
  },
  created() {
    this.getTarea(this.id);
  }
}
</script>