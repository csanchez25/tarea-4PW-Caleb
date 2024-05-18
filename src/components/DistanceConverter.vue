
<template>
  <div class="converter-box">
    <h1>Distance Converter</h1>
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
      fromUnit: 'meters',
      toUnit: 'kilometers',
      result: null,
      showResult: false,
      units: ['meters', 'kilometers', 'centimeters', 'miles', 'yards', 'feet', 'inches'],
    };
  },
  methods: {
    convert() {
      const conversionRates = {
        meters: 1,
        kilometers: 0.001,
        centimeters: 100,
        miles: 0.000621371,
        yards: 1.09361,
        feet: 3.28084,
        inches: 39.3701,
      };
      const valueInMeters = this.value / conversionRates[this.fromUnit];
      this.result = (valueInMeters * conversionRates[this.toUnit]).toFixed(3);
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
