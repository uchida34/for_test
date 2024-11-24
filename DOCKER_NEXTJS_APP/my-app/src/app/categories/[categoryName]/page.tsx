import React from "react"

type Props = {
  params: { categoryName: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const Page: React.FC<Props> = async ({ params, searchParams }) => {
    // NOTE:警告が出るため await https://nextjs.org/docs/messages/sync-dynamic-apis
  const { categoryName } = await params
  const { pageNum } = await searchParams

  return (
    <div className="grid gap-5">
      <div className="text-2xl">{categoryName}</div>
      <div className="min-h-[40rem]">コンテンツ</div>
      <div>ページ数: {pageNum}</div>
    </div>
  )
}

export default Page
