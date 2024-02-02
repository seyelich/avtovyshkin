import { GithubFilled } from '@ant-design/icons'
import { Layout } from 'antd'
import Link from 'antd/es/typography/Link'

export const Footer = () => (
  <Layout.Footer style={{ height: 'fit-content', backgroundColor: '#369', color: 'white', textAlign: 'center' }}>
    <p>Все права защищены © 2024</p>
    <p>Автовышкин - аренда автовышек</p>
    <p>+7 (3822) 33-44-62, +7 (913) 853-44-62, 334462@mail.ru</p>
    <p>
      Разработка сайта - Чепурина Елизавета - <GithubFilled />{' '}
      <Link href="https://github.com/seyelich" style={{ color: 'white' }}>
        seyelich
      </Link>
    </p>
  </Layout.Footer>
)
