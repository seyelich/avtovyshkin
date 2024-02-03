import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ConfigProvider } from 'antd'
import ru from 'antd/locale/ru_RU'

const theme = {
  components: {
    Button: {
      colorPrimary: 'linear-gradient(to bottom, #3378b0 5%, #0061a7 100%)',
    },
    Table: {
      headerBg: 'linear-gradient(to top, #369, #3498db)',
      headerColor: 'white',
      borderColor: 'rgb(71, 146, 221)',
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
