import { useSize } from 'hooks/useSize'
import { useState } from 'react'
import { MailFilled, InstagramFilled, WhatsAppOutlined, FacebookFilled, MenuOutlined } from '@ant-design/icons'
import { Flex, Dropdown, Menu } from 'antd'
import Link from 'antd/es/typography/Link'
import { NavLink } from 'react-router-dom'
import type { FC, PropsWithChildren } from 'react'
import type { MenuProps } from 'antd'
import styles from './index.module.css'

export const HeaderMenu: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false)
  const { width } = useSize()

  const items: MenuProps['items'] = [
    {
      key: '/',
      label: (
        <NavLink style={{ color: width > 768 ? 'white' : 'black' }} to={'/'}>
          ГЛАВНАЯ
        </NavLink>
      ),
    },
    {
      key: '/catalog',
      label: (
        <NavLink style={{ color: width > 768 ? 'white' : 'black' }} to={'/catalog'}>
          АВТОВЫШКИ
        </NavLink>
      ),
    },
    {
      key: '/price',
      label: (
        <NavLink style={{ color: width > 768 ? 'white' : 'black' }} to={'/price'}>
          ПРАЙС-ЛИСТ
        </NavLink>
      ),
    },
    {
      key: '/contacts',
      label: (
        <NavLink style={{ color: width > 768 ? 'white' : 'black' }} to={'/contacts'}>
          КОНТАКТЫ
        </NavLink>
      ),
    },
  ]

  return (
    <>
      <Flex style={{ padding: '15px 25px' }} justify="space-between" align="center">
        {children}
        {width > 500 && (
          <Flex gap={10} style={{ position: width > 800 ? 'absolute' : 'unset', right: 30, bottom: 15 }}>
            <Link style={{ color: 'white', fontSize: 25 }} href="mailto:334462@mail.ru">
              <MailFilled />
            </Link>
            <Link
              style={{ color: 'white', fontSize: 25 }}
              href="https://api.whatsapp.com/send?phone=79138534462&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%90%D0%92%D0%A2%D0%9E%D0%92%D0%AB%D0%A8%D0%9A%D0%98%D0%9D%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D1%8B%D1%88%D0%BA%D0%B8..."
            >
              <InstagramFilled />
            </Link>
            <Link style={{ color: 'white', fontSize: 25 }} href="https://www.instagram.com/avtovyshkin/">
              <WhatsAppOutlined />
            </Link>
            <Link
              style={{ color: 'white', fontSize: 25 }}
              href="https://www.facebook.com/%20%D0%A1%D0%BF%D0%B5%D1%86%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%20-%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%20-101243761677384"
            >
              <FacebookFilled />
            </Link>
          </Flex>
        )}
        <Dropdown menu={{ items }}>
          <MenuOutlined className={styles.menuBtn} onClick={() => setOpen(!open)} />
        </Dropdown>
      </Flex>
      {width < 500 && (
        <Flex
          justify="center"
          gap={10}
          style={{
            position: width > 800 ? 'absolute' : 'unset',
            right: 30,
            bottom: 15,
            backgroundColor: 'rgb(51, 102, 153)',
          }}
        >
          <Link style={{ color: 'white', fontSize: 25 }} href="mailto:334462@mail.ru">
            <MailFilled />
          </Link>
          <Link
            style={{ color: 'white', fontSize: 25 }}
            href="https://api.whatsapp.com/send?phone=79138534462&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20%D0%90%D0%92%D0%A2%D0%9E%D0%92%D0%AB%D0%A8%D0%9A%D0%98%D0%9D%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D0%B0%D0%B2%D1%82%D0%BE%D0%B2%D1%8B%D1%88%D0%BA%D0%B8..."
          >
            <InstagramFilled />
          </Link>
          <Link style={{ color: 'white', fontSize: 25 }} href="https://www.instagram.com/avtovyshkin/">
            <WhatsAppOutlined />
          </Link>
          <Link
            style={{ color: 'white', fontSize: 25 }}
            href="https://www.facebook.com/%20%D0%A1%D0%BF%D0%B5%D1%86%D1%82%D0%B5%D1%85%D0%BD%D0%B8%D0%BA%D0%B0%20-%20%D0%A2%D0%BE%D0%BC%D1%81%D0%BA%20-101243761677384"
          >
            <FacebookFilled />
          </Link>
        </Flex>
      )}
      <Menu style={{ background: 'rgb(51, 102, 153)' }} mode="horizontal" items={items} className={styles.menu} />
    </>
  )
}
