import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // Envolver globalmente la APP con el Layout
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
