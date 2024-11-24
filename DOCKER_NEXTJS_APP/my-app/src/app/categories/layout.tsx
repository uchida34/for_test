import Link from "next/link"

export default function CategoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="grid grid-cols-4 text-white font-bold p-5 h-full">
      <div className="text-2xl">
        <p>gategoies</p>
        <ul className="grid gap-4 p-5 list-disc">
          <li>
            <Link href={`/categories/map`}>map</Link>
          </li>
          <li>
            <Link href={`/categories/reduce`}>reduce</Link>
          </li>
          <li>
            <Link href={`/categories/index`}>index</Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  )
}
