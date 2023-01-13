//import '../styles/globals.css'
//import '../styles/custom.scss'
//import 'bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/papercss/dist/paper.css'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}
