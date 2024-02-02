import { Tabs } from 'antd'
import Title from 'antd/es/typography/Title'
import { AutoCard } from 'components/Cards/AutoCard'
import { cars } from 'utils/constants'

export const MainPage = () => (
  <div style={{ margin: '0 50px' }}>
    <Title>Выберите высоту автовышки</Title>
    <Tabs
      items={cars.map((el) => ({
        key: el.height.toString(),
        children: <AutoCard key={el.height} item={el} grid />,
        label: el.height,
      }))}
    />
  </div>
)
