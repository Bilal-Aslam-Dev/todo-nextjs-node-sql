import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'

import store from '@/store/store'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
)

export default App
