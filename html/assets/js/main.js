import Vue from 'vue'
import App from './app.vue'
export default new Vue({
    el: '#app',
    components: { App }
});
const latticeType = "";
const latticeParams={};

latticrCalculation(latticeType, latticeParams);


function latticeCalculation(latticetype, latticeparams){
if(latticetype == "oblique"){
    const latticeConstantA = latticeparams[0];
    const latticeConstantB = latticeparams[1];
    const unitAngle = latticeparams[2];
    const latticeAngle = unitAngle == "rad" ?  latticeparams[3] : 0.0174533 * latticeparams[3];
}
}