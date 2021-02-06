import { useSession } from 'next-auth/client'
import Image from 'next/image'
import { NavBar } from '@/components'
import { ReactNode } from 'react'

export default function Home() {
  const [session] = useSession()
  return (
    <div className="divide-y divide-gray-100">
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-8 sm:py-12 sm:gap-x-8 md:py-16">
          <div className="relative z-10 col-start-1 row-start-1 px-4 pt-40 pb-3 bg-gradient-to-t from-black sm:bg-none">
            <h1 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
              Idea Factory - Decentralized Funding Pools for Ideas
            </h1>
          </div>
          <div className="col-start-1 row-start-2 px-4 sm:pb-16">
            <div className="flex items-center my-5 text-sm font-medium sm:mt-2 sm:mb-4">
              <div className="p-10">
                  Idea Factory is a defi protocol built to provide Funding Pools for Ideas.
                By leveraging UMA synthetic tokens, Idea Factory is able to calculate the worth of an idea, and generate rewards for that idea.
                More info to come...
              </div> 
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </>
  )
}

Home.layoutProps = {
  meta: {
    title: 'Idea Factory',
    description: 'Decentralized Funding Pools for Ideas'
  },
  Layout: HomeLayout,
}
