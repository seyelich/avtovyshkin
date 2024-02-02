import { ClockCircleTwoTone, MailTwoTone, PhoneTwoTone } from '@ant-design/icons'
import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import Link from 'antd/es/typography/Link'
import { OrderForm } from 'components/Forms/OrderForm'
import { PageTemplate } from 'pages'
import styles from './index.module.css'

export const ContactsPage = () => (
  <PageTemplate title="Контакты">
    <Flex justify="center" gap={50} align="center" className={styles.container}>
      <Flex gap={10} vertical className={styles.contacts}>
        <Card>
          <Meta
            avatar={<ClockCircleTwoTone className={styles.icon} />}
            //@TODO: fix big chars
            title="Мы рады вашим звонкам!"
            description={
              <>
                <p>7 дней в неделю</p>
                <p> 24 часа в сутки</p>
                <p> без выходных</p>
              </>
            }
          />
        </Card>
        <Card>
          <Meta
            avatar={<PhoneTwoTone className={styles.icon} />}
            title="Звоните нам по телефону:"
            description={
              <Flex vertical>
                <Link href="tel:+73822334462">+7 (3822) 33-44-62</Link>
                <Link href="tel:+79138534462">+7 (913) 853-44-62</Link>
              </Flex>
            }
          />
        </Card>
        <Card>
          <Meta
            avatar={<MailTwoTone className={styles.icon} />}
            title="Пишите на почту:"
            description={<Link href="mailto:334462@mail.ru">334462@mail.ru</Link>}
          />
        </Card>
      </Flex>
      <OrderForm />
    </Flex>
  </PageTemplate>
)
