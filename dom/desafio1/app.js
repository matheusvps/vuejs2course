new Vue({
    el :'#desafio',
    data: {
        nome : 'Matheus Passos',
        idade : 19,
        img: '<a href="https://whatwillmatter.com/wp-content/uploads/2016/06/Success-road_254745814-1037x830.jpg"> Imagem</a>'
    },
    methods:{
        rand: function(){
            return Math.random()
        }
    }
})