<template>
    <div>
        <p>Choose Bravais lattices</p>
        <form >
            <template v-for="lattice in bravaisLattices" >
                <label v-bind:for="lattice">{{lattice}}</label>
                <input type="radio" name="chooseBravaisLattice" v-bind:id="lattice" :value="lattice" v-model="choosenBravaisLattice" />
                <br>
        </template>
        <p>You choosed "{{choosenBravaisLattice}}"</p>
        </form>

        <form v-if="choosenBravaisLattice.toString() == 'oblique'">
            <p>Input lattice parameter</p>
            <label>a
                <input type="number" id="lattice-constant-a" v-model="latticeConstantA" />
            </label>
            <label>b
                <input type="number" id="lattice-constant-b" v-model="latticeConstantB" />
            </label>
            <br>
            <label>theta [{{choosenUnitAngle}}]
                <input type="number" id="lattice-Constant-Theta" v-model="latticeConstantTheta" />
            </label>
            <br>
            <label>rad
                <input type="radio" name="chooseUnitAngle" v-model="choosenUnitAngle" checked value="rad"/>
            </label>
            <label>deg
                <input type="radio" name="chooseUnitAngle" v-model="choosenUnitAngle" value="deg"/>
            </label>
            <br>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "Hello Vue !!!",
      bravaisLattices: [
        "oblique",
        "rectangular",
        "centerRectanglar",
        "hexiagonal",
        "square"
      ],
      choosenBravaisLattice: "",
      latticeConstantA: 0,
      latticeConstantB: 0,
      choosenUnitAngle: "rad",
      latticeConstantTheta: 0
    };
  },
  methods: {}
};
</script>