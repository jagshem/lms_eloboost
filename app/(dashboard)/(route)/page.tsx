import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg mt-4">Welcome to your dashboard</p>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
