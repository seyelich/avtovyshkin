import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import ru from 'antd/locale/ru_RU'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={ru}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
