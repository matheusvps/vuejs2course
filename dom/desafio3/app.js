new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed:{
        resultado(){
            return this.valor==37? 'O valor e igual a 37' : 'O valor e diferente de 37'
        }
    },
    watch:{
        valor(_novo,_antigo){
            setTimeout( ()=> {
                this.valor=0
            },10000)
        }
    }
});