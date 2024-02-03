import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import { Header } from 'components/Header'
import { MainPage } from 'pages/MainPage'
import { CatalogPage } from 'pages/CatalogPage'
import { PricePage } from 'pages/PricePage'
import { ContactsPage } from 'pages/ContactsPage'
import { AutoPage } from 'pages/AutoPage'
import { SignInForm } from 'components/Forms/Auth/SignIn'
import { SignUpForm } from 'components/Forms/Auth/SignUp'
import { Footer } from 'components/Footer'
import './App.css'

const routes = [
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/catalog',
    element: <CatalogPage />,
  },
  {
    path: '/catalog/:id',
    element: <AutoPage />,
  },
  {
    path: '/price',
    element: <PricePage />,
  },
  {
    path: '/contacts',
    element: <ContactsPage />,
  },
  {
    path: '/signin',
    element: <SignInForm />,
  },
  {
    path: '/signup',
    element: <SignUpForm />,
  },
]

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <BrowserRouter>
        <Header />
        <Layout.Content style={{ padding: '20px 25px' }}>
          <Routes>
            {routes.map((el) => (
              <Route key={el.path} {...el} />
            ))}
          </Routes>
        </Layout.Content>
      </BrowserRouter>
      <Footer />
    </Layout>
  )
}

export default App
