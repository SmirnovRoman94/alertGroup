<template>
   <div class="range-slider">
       <div class="number">
            <span @change="slider"><input v-model.number="minPrice" type="number"  min="0" max="100"/> <span class="def">-</span>  <input  v-model.number="maxPrice" type="number"  min="0" max="100"/></span>
       </div>
       <div class="range">
           <div class="range_item">
                <input @change="slider" v-model.number="minPrice" min="0" max="100" step="1" type="range" />
                <input @change="slider" v-model.number="maxPrice" min="0" max="100" step="1" type="range" />
           </div>
       </div>
  </div>
</template>

<script>

export default {
  props: {
  },
  data() {
    return {
        minPrice: "1",
        maxPrice: "100",
    }
  },
  
  methods: {
    slider: function() {
      if (this.minPrice > this.maxPrice) {
        var tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.$emit('maxPrice', this.maxPrice)
      this.$emit('minPrice', this.minPrice)
    },
  }
}
</script>

<style lang="scss" scoped>
.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 70px;
}
.def{
    margin: auto;
    padding: 0 5px;
}
.range{
    position: relative;
    width: 100%;
    padding-top: 58px;
}
.range_item{
    position: absolute;
    width: 100%;
}
.range-slider svg,
.range-slider input[type=range] {
  position: absolute;
  left: 0;
  bottom: 0;
}
.number{
    position: absolute;
    width: 100%;
    span{
        display: flex;
    }
}
input[type=number] {
  
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
    font-size: 16px;
    -moz-appearance: textfield;
    padding: 6px 30px 5px 30px;
    height: 40px;
    margin-bottom: 0;
}

input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type=number]:invalid,
input[type=number]:out-of-range {
  border: 2px solid #ff6347;
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin-bottom: 0;
  padding: 0;
  background-color: #434343;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  background: #70D24E;
  border-radius: 1px;
  box-shadow: none;
  border: 0;
}

input[type=range]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  box-shadow: 0px 0px 0px #000;
  border: 1px solid #fff;
  height: 16px;
  width: 16px;
  border-radius: 16px;
  background: #70D24E;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}


</style>