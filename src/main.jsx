import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataContext, DataProvider } from './components/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider >
      <DataContext.Consumer>
        {
          ({
            userData,
            setUserData,
            userToken,
            setUserToken
          }) => (

            <App info={{userData,
              setUserData,
              userToken,
              setUserToken}} />
          )
        }
      </DataContext.Consumer>
    </DataProvider>
  </React.StrictMode>,
)