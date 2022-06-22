import * as React from 'react'
import { Provider } from 'react-redux'

import store from '../store/'

import Counter from './Counter'
import './styles/App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}

export default App
