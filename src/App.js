import App from 'rmw-shell'
import config from './config'
import configureStore from './store'

const Main = () => < App appConfig = {
    { configureStore, ...config } }
/>

export default Main