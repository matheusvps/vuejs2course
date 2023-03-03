new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        armazene(event){
            this.valor=event.target.value
    },
    exibirAlerta() {
        alert("Estou te alertando!")
    }
    }
})