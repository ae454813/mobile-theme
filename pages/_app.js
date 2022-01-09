import '../styles/globals.css'
import 'antd/dist/antd.css';
import Page from '../components/layouts/page';


function MyApp({ Component, pageProps }) {
  return(
    <Page>
      <Component {...pageProps} />
      </Page>
  ) 
}

export default MyApp
