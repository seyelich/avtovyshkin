import type { DescriptionsProps } from 'antd'
import { Descriptions } from 'antd'
import type { TCar } from 'utils/constants'

export const AutoDescription = ({ item }: { item: TCar }) => {
  const items: DescriptionsProps['items'] = [
    {
      key: 'brand',
      label: 'Марка машины',
      children: item.brand,
    },
    {
      key: 'machine',
      label: 'Установка',
      children: item.machine,
    },
    {
      key: 'height',
      label: 'Высота подъема, м.',
      children: item.height,
    },
    {
      key: 'power',
      label: 'Грузоподъемность, кг.',
      children: item.power,
    },
    {
      key: 'sizeTs',
      label: 'Габариты в транспортном положении, м.',
      // add description or change span
      children: (
        <div>
          <p>Длина: {item.sizeTs[0]}</p>
          <p>Ширина: {item.sizeTs[1]}</p>
          <p>Высота: {item.sizeTs[2]}</p>
        </div>
      ),
    },
    {
      key: 'width',
      label: 'Ширина с опорами, м.',
      children: item.width,
    },
    {
      key: 'mass',
      label: 'Масса, тонн',
      children: item.mass,
    },
    {
      key: 'sizeCradle',
      label: 'Габариты люльки, м.',
      // add description
      children: (
        <div>
          <p>Длина: {item.sizeCradle[0]}</p>
          <p>Ширина: {item.sizeCradle[1]}</p>
        </div>
      ),
    },
    {
      key: 'special',
      label: 'Особенности',
      children: item.special,
    },
  ]
  return <Descriptions items={items} bordered column={1} title="Технические характеристики" />
}
