import Vue from 'vue'

export default new Vue({
    methods:{
        usuarioSelecionado(usuario){
            this.$emit('usuarioSelecionado',usuario)
        },
        quandoSelecionar(callback){
            this.$on('usuarioSelecionado',callback)
        }
    }
})