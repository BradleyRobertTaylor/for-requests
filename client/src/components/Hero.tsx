import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="px-6 lg:px-8 flex justify-center items-center">
      <div className="m-auto max-w-2xl py-28 lg:py-40">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1DB8AB] via-[#316355] to-[#1DB853] sm:text-6xl">
            Examine webhooks & review HTTP requests
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            For Requests provides URL endpoints so software engineers can
            inspect data from HTTP requests and webhooks in a user friendly
            interface.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/bins"
              className="bg-[#5D3163] hover:bg-[#46244A] py-3 px-4 text-neutral-300 font-medium rounded-full transition-colors"
            >
              Get started
            </Link>
            <a
              href="#"
              className="py-3 px-4 text-neutral-300 font-medium rounded-full hover:bg-[#3B3636] transition-colors"
            >
              Github <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
