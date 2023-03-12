<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <!-- O nome da propriedade é case sensitive (usuarioNome!=usuarionome)-->
        <p>Nome do usuário: <strong> {{ inverterNome() }}</strong></p>
        <p> Idade é <strong> {{ idade }}</strong></p>
        <button @click="reiniciarNome"> Reiniciar Nome</button>
        <button @click="reiniciarFn()"> Reiniciar Nome (Callback)</button>

    </div>
</template>

<script>
import barramento from '@/barramento.js'

export default {
    props:{
        nome:{
        type: String,
        //O required true torna obrigatório que as condições da propriedade sejam cumpridas
        //required: true,
        //default: 'Anônimo' : caso nenhuma propriedade seja passada, o componente assume o valor"Pedro"
        /*default : function(){
            return Array(10).fill(0).join(',')
        }*/
        // O default pode retornar uma função, como a colocada acima
        },
        reiniciarFn: Function,
        idade: Number
    },
    methods:{
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            //const antigo = this.nome
            //const novo = 'Pedro'
            //Na linha abaixo, um evento é disparado por meio do $emit. 
            this.$emit('nomeMudou','Pedro')
        }
    },
    created: function() {
        var instanciaVue = this;
        barramento.quandoIdadeMudar(function(idade) {
        instanciaVue.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
