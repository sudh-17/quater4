import Vue from 'vue'
import Router from 'vue-router'
import Left from './views/Left'

Vue.use(Router)

export default new Router({
	scrollBehavior() {
		return { x: 0, y: 0 }
	},
	routes: [
    {
			path: '/',
			name: '',
      redirect: '/left'
    },
		{
			path: '/left',
			name: 'left',
			component: Left,
    },
		{
			path: '/right',
			name: 'right',
			component: () => import(/* webpackChunkName: "right" */ './views/Right'),
    }
	]
})
