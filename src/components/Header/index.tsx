import { useState } from 'react'
import { Flex, Layout, Menu } from 'antd'
import { ClockCircleOutlined, EnvironmentFilled, MenuOutlined, PhoneFilled } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
import { NavLink } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import logo from 'assets/images/logo.png'
import type { MenuProps } from 'antd'
import styles from './index.module.css'

export const Header = () => {
  const [open, setOpen] = useState(false)
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
    <Layout.Header style={{ height: 'fit-content', backgroundColor: '#369', padding: 0, color: 'white' }}>
      <Flex style={{ padding: '15px 25px' }} justify="space-between" align="center">
        <RouterLink to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
          <img className={styles.logo} src={logo} alt={'logo'} />
        </RouterLink>
        <MenuOutlined className={styles.menuBtn} onClick={() => setOpen(!open)} />
        <Flex className={styles.info}>
          <ClockCircleOutlined style={{ fontSize: 50 }} />
          <Flex vertical gap={10} justify="center" style={{ marginLeft: 10 }}>
            <p className={styles.par}>Круглосуточно</p>
            <p className={styles.par}>Без выходных</p>
          </Flex>
        </Flex>
        <Flex className={styles.info}>
          <EnvironmentFilled style={{ fontSize: 50 }} />
          <Flex vertical gap={10} justify="center" style={{ marginLeft: 10 }}>
            <p className={styles.par}>Томская область,</p>
            <p className={styles.par}>г. Томск, г. Северск</p>
          </Flex>
        </Flex>
        <Flex className={styles.info}>
          <PhoneFilled style={{ fontSize: 50 }} />
          <Flex vertical justify="center" style={{ marginLeft: 10 }}>
            <Link style={{ color: 'white' }} href="tel:+79138534462">
              +7 (913) 853-44-62
            </Link>
            <Link style={{ color: 'white' }} href="tel:+73822334462">
              +7 (3822) 33-44-62
            </Link>
          </Flex>
        </Flex>
      </Flex>
      {open && <Menu mode="vertical" items={items} className={styles.menuMob} />}
      <Menu mode="horizontal" items={items} className={styles.menu} />
    </Layout.Header>
  )
}
