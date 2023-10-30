import { Inter } from 'next/font/google'

import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopLevelDomain from '@/TopLevelDomain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let loading = false;

  function searchForDomain(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: Search for domain

    if (loading) return;
    if (!validateInput) return;

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }

  function validateInput(event: React.KeyboardEvent<HTMLInputElement>) {
    const input = event.currentTarget.value

    // if the input is longer than 63 characters, don't allow it
    if (input.length > 63) {
      event.currentTarget.value = input.slice(0, 63)

      displayErrorMessage('The domain name can\'t be longer than 63 characters.')

      return false;
    }

    // if the input is shorter than 3 characters, don't allow it
    if (input.length < 3 && input.length > 0) {
      displayErrorMessage('The domain name can\'t be shorter than 3 characters.')

      return false;
    }

    // if the input contains a space, don't allow it
    if (input.includes(' ')) {
      event.currentTarget.value = input.replace(/ /g, '')

      displayErrorMessage('The domain name can\'t contain spaces.')

      return false;
    }

    // if the input contains special characters, don't allow it
    if (input.match(/[^a-zA-Z0-9.-]/g)) {
      event.currentTarget.value = input.replace(/[^a-zA-Z0-9.-]/g, '')

      displayErrorMessage('The domain name can\'t contain special characters.')

      return false;
    }

    // if the input contains two dots in a row, don't allow it
    if (input.match(/\.\./g)) {
      event.currentTarget.value = input.replace(/\.\./g, '.')

      displayErrorMessage('The domain name can\'t contain two dots in a row.')

      return false;
    }

    // if the input starts with a dot, don't allow it
    if (input.startsWith('.')) {
      event.currentTarget.value = input.slice(1)

      displayErrorMessage('The domain name can\'t start with a dot.')

      return false;
    }

    // if the input ends with a dot, don't allow it
    if (input.endsWith('.')) {
      displayErrorMessage('The domain name can\'t end with a dot.')

      return false;
    }

    // if the input contains two dashes in a row, don't allow it
    if (input.match(/--/g)) {
      event.currentTarget.value = input.replace(/--/g, '-')

      displayErrorMessage('The domain name can\'t contain two dashes in a row.')

      return false;
    }

    // if the input starts with a dash, don't allow it
    if (input.startsWith('-')) {
      event.currentTarget.value = input.slice(1)

      displayErrorMessage('The domain name can\'t start with a dash.')

      return false;
    }

    // if the input ends with a dash, don't allow it
    if (input.endsWith('-')) {
      displayErrorMessage('The domain name can\'t end with a dash.')

      return false;
    }

    // if the input is empty, don't allow it
    if (input.length === 0) {
      displayErrorMessage('The domain name can\'t be empty.')

      return false;
    }

    displaySuccessMessage('You are now good to go! Press enter to search.')

    return true;
  }

  function displayErrorMessage(message: string) {
    const errors = document.getElementById('errors');

    if (!errors) return;

    errors.innerHTML = message;
    errors.classList.add('text-red-400');
    errors.classList.remove('text-green-600');
  }

  function displaySuccessMessage(message: string) {
    const errors = document.getElementById('errors');

    if (!errors) return;

    errors.innerHTML = message;
    errors.classList.add('text-green-600');
    errors.classList.remove('text-red-400');
  }

  function removeMessage(event: React.FocusEvent<HTMLInputElement>) {
    const errors = document.getElementById('errors');
    const input = event.currentTarget.value;

    if (!errors) return;
    if (input !== '') return;

    errors.innerHTML = 'Search for a domain, and we will tell you if its available and how much it costs at various registrars.';
    errors.classList.remove('text-green-600');
    errors.classList.remove('text-red-400');
  }

  function setLoading(state: boolean) {
    loading = state;

    const loader = document.getElementById('loader');
    const input = document.getElementById('domain') as HTMLInputElement;
    const errors = document.getElementById('errors');
    const stats = document.getElementById('stats');

    if (!input) return;
    if (!loader) return;
    if (!errors) return;
    if (!stats) return;

    if (state) {
      loader.classList.remove('hidden');
      input.classList.add('bg-gray-200', 'cursor-not-allowed', 'outline-none');

      errors.classList.add('animate__fadeOutUp');
      errors.classList.remove('animate__fadeInDown');

      stats.classList.add('animate__fadeOutLeft');
      stats.classList.remove('animate__fadeInLeft');
    } else {
      loader.classList.add('hidden');
      input.classList.remove('bg-gray-200', 'cursor-not-allowed', 'outline-none');

      errors.classList.add('animate__fadeInDown');
      errors.classList.remove('animate__fadeOutUp');

      stats.classList.add('animate__fadeInLeft');
      stats.classList.remove('animate__fadeOutLeft');
    }
  }

  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between relative p-6 ${inter.className}'}
    >
      <div 
        className='max-w-2xl w-full mx-auto py-6'
        id='search-container'
      >
        <form
          onSubmit={searchForDomain}
        >
          <div
            className='relative'
          >
            <input 
              className='w-full bg-gray-100 border border-gray-300 rounded-xl py-4 px-6 animate__animated animate__fadeInDown'
              placeholder='example.com'
              type='search'
              id='domain'
              onKeyUp={validateInput}
              onBlur={removeMessage}
            />

            <div
              className='absolute top-0 flex justify-center w-full hidden cursor-not-allowed'
              id='loader'
            >
              <FontAwesomeIcon
                className='animate-spin text-lg mt-5 text-gray-400'
                icon={faCircleNotch}
              />
            </div>
          </div>

          <p
            className='text-gray-400 text-xs mt-2 animate__animated animate__fadeInDown px-2 duration-200'
            id='errors'
          >
            Search for a domain, and we will tell you if its available and how much it costs at various registrars.
          </p>
        </form>
      </div>


      <div
        className='absolute bottom-0 left-0 p-5 animate__animated'
        id='stats'
      >
        <span
          className='text-xs text-gray-400'
        >
          Search through {new TopLevelDomain().getTLDInfos().length} TLDs &middot; And 213 registrars
        </span>

        <span
          className='text-xs text-gray-400 block mt-2'
        >
          Need info about a taken domain? Visit <a href='https://digga.dev' className='underline'>digga.dev</a> for more info.
        </span>
      </div>
    </main>
  )
}
