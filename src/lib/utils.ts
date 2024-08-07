/**
 * clsx: 一个用于条件性地拼接 CSS 类名的库。clsx 可以接受多个参数，这些参数可以是字符串、对象或数组。它会根据条件合并这些类名为一个字符串。
 *
 * twMerge: 一个用于合并 Tailwind CSS 类名的库。它可以处理冲突的类名，并根据 Tailwind CSS 的规则进行优先级处理。
 */

import { type ClassValue, clsx } from 'clsx'
import { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'

/**
 *
 * cn 函数的目的是简化和优化 CSS 类名的合并过程，特别是在使用 Tailwind CSS 时。通过结合 clsx 和 twMerge，它不仅可以根据条件合并类名，还能处理 Tailwind CSS 类名的冲突问题。
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 举例：
 * 假设使用 cn 函数
 * const className = cn('bg-red-500', 'text-white', { 'p-4': true, 'm-2': false });
 * clsx 处理后：'bg-red-500 text-white p-4'（忽略掉了 m-2 因为条件为 false）。
 * twMerge 处理后：如果有任何冲突的 Tailwind CSS 类名（比如 bg-red-500 和 bg-blue-500 同时存在），它会根据 Tailwind CSS 的规则合并最终的类名。
 * 最终 className 将会是一个经过优化和合并的 CSS 类名字符串。
 */

/**
 *
 * @param price 1234.56
 * @returns $1,234.56
 * @description 美元格式化
 */
export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return formatter.format(price)
}


/**
 * @description 用于搜索引擎优化（SEO）和社交媒体分享的相关信息 生成 metadata
 */
export function constructMetadata({
  title = 'CaseCobra - custom high-quality phone cases',
  description = 'Create custom high-quality phone cases in seconds',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://casecobra.vercel.app/'),
  }
}
