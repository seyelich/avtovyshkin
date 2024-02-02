import type { TableProps } from 'antd'
import { Table } from 'antd'
import type { TCar } from 'utils/constants'
import { cars, taxCoef } from 'utils/constants'
import { PriceTableFooter } from './TableFooter'

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
      footer={() => (
        <PriceTableFooter
          priceShort={`${tax ? '72 (Семьдесят два)' : '60 (Шестьдесят)'} рублей 00`}
          priceLong={`${tax ? '96 (Девяносто шесть)' : '80 (Восемьдесят)'} рублей 00`}
        />
      )}
    />
  )
}
