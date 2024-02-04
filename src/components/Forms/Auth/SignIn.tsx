import { useNavigate } from 'react-router-dom'
import { Button, Form } from 'antd'
import { Link } from 'react-router-dom'
import { AuthForm } from '.'

export const SignInForm = () => {
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
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
          Войти
        </Button>
      </Form.Item>
      <p>
        Нет аккаунта?
        <Link to={'/signup'} style={{ width: '100%', marginLeft: 5 }}>
          Зарегистироваться
        </Link>
      </p>
    </AuthForm>
  )
}
