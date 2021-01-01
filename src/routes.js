import Product from './components/Product'
import Services from './components/Services'
import Login from './components/Login'
import About from './components/About'

export default[
    {path: '/', component: Product},
    {path: '/add', component: Services},
    {path: '/add', component: Login},
    {path: '/add', component: About}
]