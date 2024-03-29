import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/InicioApp'

import Usuario from './components/usuario/UsuarioApp'
import UsuarioLista from './components/usuario/UsuarioLista'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/MenuApp'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes : [{
        name:'inicio',
        path:'/',
        //component:Inicio
        components:{
            defaut:Inicio,
            menu: Menu  
        }
    },
    {
        //Isso faz com que a rota seja /usuario e alguma coisa
        path:'/usuario',
        component:Usuario,
        props:true,
        children:[
            {path:'', component:UsuarioLista},
            {path:':id', component:UsuarioDetalhe,props:true},
            {path:':id/editar', component:UsuarioEditar,props:true,
        name:'editarUsuario'}
        ]
    },{
        path:'/redirecionar',
        redirect:'/usuario'
    },{
        path:'*',
        redirect:'/'
    }]
})