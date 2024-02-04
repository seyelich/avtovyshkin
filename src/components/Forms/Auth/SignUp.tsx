import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { AuthForm } from '.'

export const SignUpForm = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()

  const submit = () => {
    form.validateFields().then((values) => {
      form.resetFields()
      navigate('/')
      console.log(values)
    })
  }

  return (
    <AuthForm onSubmit={submit}>
      <Form.Item
        name="password"
        label="Повторите пароль"
        rules={[{ required: true, message: 'Пожалуйста, повторите пароль' }]}
      >
        <Input type="password" prefix={<LockOutlined className="site-form-item-icon" />} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Зарегистироваться
        </Button>
      </Form.Item>
    </AuthForm>
  )
}
