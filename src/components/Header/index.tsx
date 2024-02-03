import { Flex, Layout } from 'antd'
import { ClockCircleOutlined, EnvironmentFilled, PhoneFilled } from '@ant-design/icons'
import Link from 'antd/es/typography/Link'
import { Link as RouterLink } from 'react-router-dom'
import { HeaderMenu } from './HeaderMenu'
import logo from 'assets/images/logo.png'
import styles from './index.module.css'

export const Header = () => (
  <Layout.Header
    style={{
      height: 'fit-content',
      backgroundColor: 'rgba(51, 102, 153, .5)',
      padding: 0,
      color: 'white',
      position: 'relative',
    }}
  >
    <HeaderMenu>
      <RouterLink to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
        <img className={styles.logo} src={logo} alt={'logo'} />
      </RouterLink>
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
          <Link style={{ color: 'white', fontWeight: 'bold' }} href="tel:+79138534462">
            +7 (913) 853-44-62
          </Link>
          <Link style={{ color: 'white', fontWeight: 'bold' }} href="tel:+73822334462">
            +7 (3822) 33-44-62
          </Link>
        </Flex>
      </Flex>
    </HeaderMenu>
  </Layout.Header>
)
