import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import type { ReactNode } from 'react'

type TCustomuttonProps = {
  height?: number
  title: string | ReactNode
  action?: string
  path: string
}

export const CustomButton = ({ height, title, action, path }: TCustomuttonProps) => {
  const navigate = useNavigate()
  return (
    <Button type="primary" size="large" onClick={() => navigate(path, { state: { height, action } })}>
      {title}
    </Button>
  )
}
