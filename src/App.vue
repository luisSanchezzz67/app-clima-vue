<script setup>
import Formulario from './components/formulario.vue'
import useClima from './composables/useClima'

const {obtenerClima} = useClima()


</script>

<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtenerClima="obtenerClima" />

  </div>
</template>
