import { Inter } from 'next/font/google'

import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  function searchForDomain(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: Search for domain
  }

  function validateInput(event: React.KeyboardEvent<HTMLInputElement>) {
    const input = event.currentTarget.value

    // if the input is longer than 63 characters, don't allow it
    if (input.length > 63) {
      event.currentTarget.value = input.slice(0, 63)

      toast.warn('The domain name can\'t be longer than 63 characters.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    // if the input contains a space, don't allow it
    if (input.includes(' ')) {
      event.currentTarget.value = input.replace(/ /g, '')

      toast.warn('The domain name can\'t contain spaces.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>

      <div 
        className='max-w-2xl w-full m-auto'
      >
        <form
          onSubmit={searchForDomain}
        >
          <input 
            className='w-full bg-gray-100 border border-gray-300 rounded-xl py-4 px-6 animate__animated animate__fadeInDown'
            placeholder='Search for a domain...'
            type='search'
            onKeyUp={validateInput}
          />
        </form>
      </div>
    </main>
  )
}
