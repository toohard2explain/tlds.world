import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function searchForDomain(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  // TODO: Search for domain
}

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div 
        className='max-w-2xl w-full m-auto'
      >
        <form
          onSubmit={searchForDomain}
        >
          <input 
            className='w-full bg-gray-100 border border-gray-200 rounded-lg py-4 px-6'
            placeholder='Search for a domain...'
            type='search'
          >
            
          </input>
        </form>
      </div>
    </main>
  )
}
