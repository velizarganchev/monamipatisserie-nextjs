//import '../styles/globals.css'
//import '../styles/custom.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/papercss/dist/paper.css'
import Layout from '../components/Layout'
import store from '../redux/store'
import { Provider } from 'react-redux'


export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout >
        <Component {...pageProps} />  
      </Layout>
    </Provider>
  )
}
