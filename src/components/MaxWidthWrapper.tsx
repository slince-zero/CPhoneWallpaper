import { cn } from '@/lib/utils'

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      /**
       * 由于该函数是支持自定义 className 的，所以我们需要将传入的 className 和默认的 className 进行合并。
       * cn 函数在这里的作用主要是，通过组件的属性（如果有）传入的自定义类名，它会与前面的静态类名合并。
       */
      className={cn(
        'h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
