import { Tabs } from 'antd'
import { AutoCard } from 'components/Cards/AutoCard'
import { PageTemplate } from 'pages'
import { cars } from 'utils/constants'

export const MainPage = () => (
  //@TODO: fix mobile cards
  <PageTemplate title="Выберите высоту автовышки">
    <Tabs
      items={cars.map((el) => ({
        key: el.height.toString(),
        children: <AutoCard key={el.height} item={el} grid />,
        label: el.height,
      }))}
    />
  </PageTemplate>
)
