import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import ru from 'antd/locale/ru_RU'

const theme = {
  components: {
    Button: {
      colorPrimary: 'rgb(51, 102, 153)',
    },
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={ru} theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
