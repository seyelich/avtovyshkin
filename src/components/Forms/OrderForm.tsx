import { Button, Form, Input, notification } from 'antd'

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
    form.validateFields().then(() => {
      openNotification()
      form.resetFields()
    })
  }

  return (
    <>
      <Form form={form} onFinish={submit} layout="vertical" style={{ width: '25%' }}>
        <Form.Item name="name" label="Ваше имя" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="tel" label="Телефон" rules={[{ required: true }]}>
          <Input type="tel" />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" style={{ width: '100%' }}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
      {contextHolder}
    </>
  )
}
