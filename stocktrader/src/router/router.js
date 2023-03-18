import Vue from 'vue'
import Router from 'vue-router'

import Home from './src/components/stocks/HomeComp'
import Portfolio from './components/portfolio/PortfolioComp'
import Stocks from './components/stocks/StocksComp'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/portfolio', component: Portfolio },
        { path: '/stocks', component: Stocks },
    ]
})