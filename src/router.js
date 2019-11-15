import Vue from 'vue'
import Router from 'vue-router'
import EventView from './views/EventView'

Vue.use(Router)

export default new Router({
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
	routes: [
    {
			path: '/',
			name: '',
      redirect: '/eventView'
    },
		{
			path: '/eventView',
			name: 'eventView',
			component: EventView,
    },
		{
			path: '/bussinessView',
			name: 'bussinessView',
			component: () => import(/* webpackChunkName: "bussinessView" */ './views/BussinessView'),
    }
	]
})
