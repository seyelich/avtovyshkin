import type { TableProps } from 'antd'
import { Table } from 'antd'
import Text from 'antd/es/typography/Text'
import { PriceTableFooter } from './TableFooter'
import { cars, taxCoef } from 'utils/constants'
import type { TCar } from 'utils/constants'

export const PriceTable = ({ tax }: { tax?: boolean }) => {
  const columns: TableProps<TCar>['columns'] = [
    {
      title: 'Максимальная высота, м',
      dataIndex: 'height',
      key: 'height',
    },
    {
      title: 'Характеристики автовышки',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Цена аренды, руб./час',
      dataIndex: 'price',
      key: 'price',
      render: (val) => (tax ? val * taxCoef : val),
    },
    {
      title: 'Марка авто',
      dataIndex: 'brand',
      key: 'brand',
    },
  ]

  return (
    <Table
      dataSource={cars}
      columns={columns}
      pagination={false}
      rowKey={'height'}
      scroll={{ x: true }}
      bordered
      footer={() => (
        <PriceTableFooter
          priceShort={<Text strong>{tax ? '72 (Семьдесят два)' : '60 (Шестьдесят)'} рублей 00</Text>}
          priceLong={<Text strong>{tax ? '96 (Девяносто шесть)' : '80 (Восемьдесят)'} рублей 00</Text>}
        />
      )}
    />
  )
}
