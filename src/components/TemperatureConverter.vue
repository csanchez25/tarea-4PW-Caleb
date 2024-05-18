<template>
  <div class="converter-box">
    <h1>Temperature Converter</h1>
    <div class="converter">
      <input v-model.number="value" @input="clearResult" placeholder="Enter value" />
      <select v-model="fromUnit" @change="clearResult">
        <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
      </select>
      <select v-model="toUnit" @change="clearResult">
        <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
      </select>
      <button @click="convert">Convert</button>
    </div>
    <p v-if="showResult">{{ value }} {{ fromUnit }} = {{ result }} {{ toUnit }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      fromUnit: 'celsius',
      toUnit: 'fahrenheit',
      result: null,
      showResult: false,
      units: ['celsius', 'kelvin', 'fahrenheit'],
    };
  },
  methods: {
    convert() {
      let valueInCelsius;
      if (this.fromUnit === 'celsius') valueInCelsius = this.value;
      if (this.fromUnit === 'kelvin') valueInCelsius = this.value - 273.15;
      if (this.fromUnit === 'fahrenheit') valueInCelsius = (this.value - 32) * (5 / 9);

      if (this.toUnit === 'celsius') this.result = valueInCelsius.toFixed(2);
      if (this.toUnit === 'kelvin') this.result = (valueInCelsius + 273.15).toFixed(2);
      if (this.toUnit === 'fahrenheit') this.result = (valueInCelsius * (9 / 5) + 32).toFixed(2);
      this.showResult = true;
    },
    clearResult() {
      this.showResult = false;
      this.result = null;
    },
  },
};
</script>

<style>
.converter-box {
  background-color: #222;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.7);
  margin: 60px 0;
}

h1 {
  color: #0f0;
}

.converter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

input, select, button {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

input, select {
  background-color: #333;
  color: #0f0;
}

button {
  background-color: #0f0;
  color: #000;
  cursor: pointer;
}

button:hover {
  background-color: #0b0;
}

p {
  font-size: 18px;
  font-weight: bold;
}
</style>