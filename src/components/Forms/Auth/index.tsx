import { LockOutlined } from '@ant-design/icons'
import { Form, Input } from 'antd'
import type { FC, PropsWithChildren } from 'react'

type TAuthFormProps = {
  onSubmit: () => void
}

export const AuthForm: FC<PropsWithChildren & TAuthFormProps> = ({ onSubmit, children }) => {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      onFinish={onSubmit}
      layout="vertical"
      style={{ width: '75%', margin: '100px auto', textAlign: 'center' }}
    >
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
      <Form.Item name="password" label="Пароль" rules={[{ required: true }]}>
        <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>
      {children}
    </Form>
  )
}
