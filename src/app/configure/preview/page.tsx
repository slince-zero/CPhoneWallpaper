import { db } from '@/db'
import { notFound } from 'next/navigation'
import DesignPreview from './DesignPreview'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}
const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams
  console.log(id, '33333')

  if (!id || id !== 'string') {
    return notFound()
  }
  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if (!configuration) {
    return notFound()
  }

  return <DesignPreview />
}

export default Page
