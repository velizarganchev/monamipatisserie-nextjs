//import '../styles/globals.css'
//import 'bootstrap/dist/css/bootstrap.min.css'
//import '../styles/custom.scss'
import '../node_modules/papercss/dist/paper.css'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}
