import logo from 'assets/images/logo.png'
import { Flex, Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { NavLink } from 'react-router-dom'
import { ClockCircleOutlined, EnvironmentFilled, PhoneFilled } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import Paragraph from 'antd/es/typography/Paragraph'

export const Header = () => {
  const items: MenuProps['items'] = [
    {
      key: '/',
      label: <NavLink to={'/'}>Главная</NavLink>,
    },
    {
      key: '/catalog',
      label: <NavLink to={'/catalog'}>Автовышки</NavLink>,
    },
    {
      key: '/price',
      label: <NavLink to={'/price'}>Прайс-лист</NavLink>,
    },
    {
      key: '/contacts',
      label: <NavLink to={'/contacts'}>Контакты</NavLink>,
    },
  ]

  return (
    <Layout.Header
      style={{ width: '100%', height: 'fit-content', backgroundColor: '#369', padding: 0, color: 'white' }}
    >
      <Flex style={{ padding: '15px 25px' }} justify="space-between" align="center">
        <Link to={'/'}>
          <img src={logo} alt={'logo'} />
        </Link>
        <Flex>
          <ClockCircleOutlined style={{ fontSize: 50 }} />
          <div>
            <Paragraph color="white">Круглосуточно</Paragraph>
            <Paragraph>Без выходных</Paragraph>
          </div>
        </Flex>
        <Flex>
          <EnvironmentFilled style={{ fontSize: 50 }} />
          <div>
            <Paragraph>Томская область,</Paragraph>
            <Paragraph>г. Томск, г. Северск</Paragraph>
          </div>
        </Flex>
        <Flex>
          <PhoneFilled style={{ fontSize: 50 }} />
          <div>
            <Paragraph>+7 (913) 853-44-62</Paragraph>
            <Paragraph>+7 (3822) 33-44-62</Paragraph>
          </div>
        </Flex>
      </Flex>
      <Menu mode="horizontal" items={items} />
    </Layout.Header>
  )
}
