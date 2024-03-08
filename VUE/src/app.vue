<script setup>
import { reactive } from 'vue';

const estado = reactive({
  primeiroNumero: '',
  segundoNumero: '',
  operacoes: {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => (b !== 0 ? a / b : 'Divisão por zero'),
  },
  resultado: 0,
});

const calcularResultado = () => {
  const { primeiroNumero, segundoNumero, operacaoMatematica } = estado;
  estado.resultado = estado.operacoes[operacaoMatematica](parseFloat(primeiroNumero), parseFloat(segundoNumero));
};
</script>

<template>
  <div class="container ">
    <h1 class="fnt">Calculadora Aritmética VueJs</h1>

    <input type="text" v-model="estado.primeiroNumero" @input="calcularResultado" />
    <input type="text" v-model="estado.segundoNumero" @input="calcularResultado" />

    <select v-model="estado.operacaoMatematica" @change="calcularResultado">
      <option value="soma">Soma</option>
      <option value="subtracao">Subtração</option>
      <option value="multiplicacao">Multiplicação</option>
      <option value="divisao">Divisão</option>
    </select>

    <p>Resultado: {{ estado.resultado }}</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 320px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 5px;
}

.fnt {
  font-size: 1.2em;
}

input {
  margin: 10px 0;
  padding: 8px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-align: center;

}

select {
  margin: 10px 0;
  padding: 8px;
  width: 320px;
  border: 1px solid #ccc;
  border-radius: 3px;
  display: flex;
  align-items: center;
  text-align: center;

}

.result {
  font-size: 1.2em;
  margin-top: 10px;
}
</style>