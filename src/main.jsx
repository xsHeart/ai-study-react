import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import counterReducer from './store'

import 'virtual:uno.css'

let store = createStore(counterReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
