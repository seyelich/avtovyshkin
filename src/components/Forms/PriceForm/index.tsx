import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Button, Flex, Form, InputNumber, Radio, Select } from 'antd'
import { cars, taxCoef } from 'utils/constants'
import { getPriceOfRoad } from 'utils'
import styles from './index.module.css'

const radioOptions = [
  { label: 'Цена без НДС', value: false, checked: true },
  { label: 'Цена с НДС', value: true },
]

const selectOptions = cars.map((el) => ({ value: el.height, label: el.height }))

export const PriceForm = () => {
  const [form] = Form.useForm()
  const [price, setPrice] = useState(0)
  const { state } = useLocation()

  const calculate = () => {
    form.validateFields().then((values) => {
      const { time, height, tax, length } = values
      const car = cars.find((el) => el.height === height)
      car && setPrice((time * car?.price + getPriceOfRoad(length)) * (tax ? taxCoef : 1))
      form.resetFields()
      console.log(values)
    })
  }

  return (
    <Flex style={{ width: '75%', maxWidth: 600 }} vertical>
      <Form
        form={form}
        initialValues={{ time: 2, height: state?.height ?? state?.height, tax: false, length: 0 }}
        layout="vertical"
        onFinish={calculate}
        onReset={() => setPrice(0)}
      >
        <Form.Item name="time" label="Время работы, ч" required>
          <InputNumber style={{ width: '100%' }} min={2} />
        </Form.Item>
        <Form.Item name="height" label="Высота, м" required>
          <Select options={selectOptions} />
        </Form.Item>
        <Form.Item name="tax" required>
          <Radio.Group options={radioOptions} />
        </Form.Item>
        <Form.Item name="length" label="Дорога, км" required>
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>
        <Form.Item>
          <div className={styles.btnContainer}>
            <Button type="primary" className={styles.btn} htmlType="submit">
              Рассчитать цену
            </Button>
            <Button className={styles.btn} htmlType="reset">
              Сбросить
            </Button>
          </div>
        </Form.Item>
      </Form>
      {price ? <p>Итого: {price} руб.</p> : null}
    </Flex>
  )
}
