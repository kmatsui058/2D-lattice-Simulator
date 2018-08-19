<template>
<div>
<p>Choose Bravais lattices</p>
<form >
    <template v-for="lattice in bravaisLattices" >
<label v-bind:id="lattice">{{lattice}}</label>
<input type="radio" name="chooseBravaisLattice" v-bind:id="lattice" :value="lattice" v-model="choosenBravaisLattice" />
<br v-bind:key="lattice">
</template>
<p>You choosed "{{choosenBravaisLattice}}"</p>
</form>

<form v-if="choosenBravaisLattice.toString() == 'oblique'">
    <p>Input lattice parameter</p>
    <label>a</label>
<input type="number" id="lattice-constant-a" v-model="latticeConstantA" />
    <label>b</label>
<input type="number" id="lattice-constant-b" v-model="latticeConstantB" />
<br>
    <label>theta [{{choosenUnitAngle}}]</label>
  

    <input type="number" id="lattice-Constant-Theta" v-model="latticeConstantTheta" />
<br>
  <label>rad</label>
        <input type="radio" name="chooseUnitAngle" v-model="choosenUnitAngle" checked value="rad"/>
    <label>deg</label>
    <input type="radio" name="chooseUnitAngle" v-model="choosenUnitAngle" value="deg"/>

<br>
</form>
</div>
</template>
<script>
export default {
    data() {
        return {
            message: "Hello Vue !!!",
            bravaisLattices: ["oblique", "rectangular","centerRectanglar", "hexiagonal", "square"],
            choosenBravaisLattice: "",
            latticeConstantA: 0,
            latticeConstantB: 0,
            choosenUnitAngle: "rad",
            latticeConstantTheta: 0,


        }
    },
    methods: {

    }
}
</script>