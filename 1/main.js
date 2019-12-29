new Vue({
    el: '#app',
    data: {
        title: "Hello vue",
        styleCSS: ''
    },
    methods: {
        changeText() {
           this.title = 'тайтл this.title'
        }
    }
});


