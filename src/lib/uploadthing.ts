import { OurFileRouter } from '@/app/api/uploadthing/core'
// 这个函数用于生成React的工具函数和Hooks，以便在React组件中使用文件上传功能
import { generateReactHelpers } from '@uploadthing/react'

export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>()
