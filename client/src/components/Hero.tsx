import { Link } from 'react-router-dom';
import { Header } from './Header';

export function Hero() {
  return (
    <>
      <Header />
      <div className="m-auto max-w-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#316920] via-[#6EA85D] to-[#25693E] dark:from-[#1DB8AB] dark:via-[#316355] dark:to-[#1DB853] sm:text-6xl">
            Examine webhooks & review HTTP requests
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
            For Requests provides URL endpoints so software engineers can
            inspect data from HTTP requests and webhooks in a user friendly
            interface.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/bins"
              className="bg-[#5D0066] hover:bg-[#750080] dark:bg-[#5D3163] dark:hover:bg-[#46244A] py-3 px-4 text-neutral-50 dark:text-neutral-300 font-medium rounded-full transition-colors"
            >
              Get started
            </Link>
            <a
              href="#"
              className="py-3 px-4 text-neutral-800 hover:bg-zinc-50 dark:text-neutral-300 font-medium rounded-full dark:hover:bg-[#3B3636] transition-colors"
            >
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
