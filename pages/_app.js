import PropTypes from 'prop-types'
import Meta from '../components/Meta'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Layout title={pageProps.title}>
        {/* eslint-disable-next-line */}
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
}

export default MyApp
