import { Button, Form, Input, notification } from 'antd'
import styles from './index.module.css'

export const OrderForm = () => {
  const [form] = Form.useForm()
  const [api, contextHolder] = notification.useNotification()

  const openNotification = () => {
    api['success']({
      message: 'Успешно',
      description: 'Сообщение успешно отправлено. Скоро менеджер свяжется с вами. Спасибо за обращение.',
    })
  }

  const submit = () => {
    form.validateFields().then((values) => {
      openNotification()
      form.resetFields()
      console.log(values)
    })
  }

  return (
    <>
      <Form form={form} onFinish={submit} layout="vertical" className={styles.form}>
        <Form.Item name="name" label="Ваше имя" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="tel"
          label="Телефон"
          rules={[
            {
              pattern: new RegExp('^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$'),
              message: 'Неверный формат номера телефона',
            },
            { required: true, message: 'Пожалуйста, введите Телефон' },
          ]}
        >
          <Input type="tel" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              pattern: new RegExp('([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z0-9_-]+)'),
              message: 'Неверный формат почты',
            },
            { required: true, message: 'Пожалуйста, введите Email' },
          ]}
        >
          <Input type="email" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  )
}
