<script setup>
import Formulario from './components/formulario.vue'
import Clima from './components/clima.vue'
import Spinner from './components/spinner.vue'
import Alerta from './components/alerta.vue'
import useClima from './composables/useClima'

const {obtenerClima, clima, cargando ,mostrarClima, error} = useClima()


</script>

<template>
  <h1 class="titulo">Buscador de clima</h1>
  <div class="contenedor buscador-clima">
    <Formulario @obtenerClima="obtenerClima" />
    <Spinner v-if="cargando" />
    <Alerta v-if="error">{{ error }}</Alerta>
    <Clima v-if="mostrarClima" :clima="clima" />
  </div>
</template>
