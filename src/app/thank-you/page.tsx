import { Suspense } from 'react'
import ThankYou from './ThankYou'

const Page = () => {
  return (
    // 当组件中有需要异步加载的数据时，Suspense 可以显示一个备用的 UI（通常是一个加载指示器）直到数据加载完成
    <Suspense>
      <ThankYou />
    </Suspense>
  )
}

export default Page
