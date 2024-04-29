import React from 'react'
import ReactDOM from 'react-dom/client'
import Body from './Views/Body'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
// const router = createBrowserRouter([])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
