<script setup>
import Formulario from './components/formulario.vue'
import Clima from './components/clima.vue'
import useClima from './composables/useClima'

const {obtenerClima, clima, mostrarClima} = useClima()


</script>

<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtenerClima="obtenerClima" />
    <Clima v-if="mostrarClima" />
  </div>
</template>
