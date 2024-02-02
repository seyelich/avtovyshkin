import { ClockCircleTwoTone, MailTwoTone, PhoneTwoTone } from '@ant-design/icons'
import { Card, Flex } from 'antd'
import Meta from 'antd/es/card/Meta'
import Title from 'antd/es/typography/Title'
import Link from 'antd/es/typography/Link'
import { OrderForm } from 'components/Forms/OrderForm'

export const ContactsPage = () => (
  <div style={{ margin: '0 50px' }}>
    <Title>Контакты</Title>
    <Flex justify="center" gap={50} align="center">
      <div style={{ width: '40%' }}>
        <Card>
          <Meta
            avatar={<ClockCircleTwoTone style={{ fontSize: 50 }} />}
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
            avatar={<PhoneTwoTone style={{ fontSize: 50 }} />}
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
            avatar={<MailTwoTone style={{ fontSize: 50 }} />}
            title="Пишите на почту:"
            description={<Link href="mailto:334462@mail.ru">334462@mail.ru</Link>}
          />
        </Card>
      </div>
      <OrderForm />
    </Flex>
  </div>
)
