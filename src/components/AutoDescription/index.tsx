import { useSize } from 'hooks/useSize'
import { Descriptions } from 'antd'
import type { DescriptionsProps } from 'antd'
import type { TCar } from 'utils/constants'

type TAutoDescriptionProps = {
  item: TCar
}

export const AutoDescription = ({ item }: TAutoDescriptionProps) => {
  const { width } = useSize()

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
      children:
        typeof item.sizeCradle[0 || 1] === 'string' ? (
          <div>
            <p>Длина: {item.sizeCradle[0]}</p>
            <p>Ширина: {item.sizeCradle[1]}</p>
          </div>
        ) : (
          <div>
            <p>
              Длина:
              <p>- слож.: {item.sizeCradle[0][0]}</p>
              <p>- разлож.: {item.sizeCradle[0][1]}</p>
            </p>
            <p>
              Ширина:
              <p>- слож.: {item.sizeCradle[1][0]}</p>
              <p>- разлож.: {item.sizeCradle[1][1]}</p>
            </p>
          </div>
        ),
    },
    {
      key: 'special',
      label: 'Особенности',
      children: item.special,
    },
  ]

  return (
    <Descriptions
      size={width < 450 ? 'small' : 'default'}
      labelStyle={{ width: width < 425 ? 157 : 'auto', color: 'black' }}
      style={{ maxWidth: 500 }}
      items={items}
      bordered
      column={1}
      title="Технические характеристики"
    />
  )
}
