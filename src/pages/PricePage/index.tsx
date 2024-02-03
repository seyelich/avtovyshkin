import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Flex, Tabs } from 'antd'
import Text from 'antd/es/typography/Text'
import { OrderForm } from 'components/Forms/OrderForm'
import { PriceForm } from 'components/Forms/PriceForm/index'
import { PriceTable } from 'components/Tables/PriceTable'
import { PageTemplate } from 'pages'
import type { TabsProps } from 'antd'

const labelStyle = {
  background: 'linear-gradient(to top, #369, #3498db)',
  borderRadius: 20,
  padding: 10,
  height: 50,
  width: 150,
}

const items: TabsProps['items'] = [
  {
    key: 'noTax',
    label: (
      <Flex align="center" justify="center" style={labelStyle}>
        <Text style={{ color: 'white' }}>Без НДС</Text>
      </Flex>
    ),
    children: <PriceTable />,
  },
  {
    key: 'tax',
    label: (
      <Flex align="center" justify="center" style={labelStyle}>
        <Text style={{ color: 'white' }}>С НДС</Text>
      </Flex>
    ),
    children: <PriceTable tax />,
  },
  {
    key: 'calculate',
    label: (
      <Flex align="center" justify="center" style={labelStyle}>
        <Text style={{ color: 'white' }}>Рассчитать цену</Text>
      </Flex>
    ),
    children: (
      <Flex justify="center">
        <PriceForm />
      </Flex>
    ),
  },
  {
    key: 'order',
    label: (
      <Flex align="center" justify="center" style={labelStyle}>
        <Text style={{ color: 'white' }}>Заказать</Text>
      </Flex>
    ),
    children: (
      <Flex justify="center">
        <OrderForm />
      </Flex>
    ),
  },
]

export const PricePage = () => {
  const { state } = useLocation()

  useEffect(() => {
    document.title = 'Автовышкин - Прайс'
  }, [])

  return (
    <PageTemplate title="ПРАЙС-ЛИСТ">
      <Tabs
        defaultActiveKey={state?.action === 'calc' ? 'calculate' : state?.action ? 'order' : undefined}
        items={items}
        centered
      />
    </PageTemplate>
  )
}
