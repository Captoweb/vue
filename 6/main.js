Vue.component ('app-car', {
    data: function() {
       return {
          cars: [
            {model: "BMW"},
            {model: "Audi"},
            {model: "Mers"},
            {model: "Ford"}  
        ] 
       } 
    }, 
    template: '<div><div class="car" v-for="car in cars"><p>{{ car.model }}</p></div></div>'
});

new Vue ({
   el: '#app'
});

new Vue ({
   el: '#app2' 
});