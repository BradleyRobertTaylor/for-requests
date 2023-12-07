import { Link, useMatch, useParams } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import BinsDropdown from './BinsDropdown';
import { useFetchBins } from '../hooks/useFetchBins';
import { useCopy } from '../hooks/useCopy';
import { BASE_URL } from '../constants/routes';

const Header = () => {
  const { data: bins } = useFetchBins();

  const match = useMatch('/bins/*');
  const { binPath } = useParams();

  const { handleCopy, isCopied } = useCopy(binPath);

  return (
    <>
      <header>
        <nav
          className={classNames(
            'flex justify-between rounded-2xl items-center px-10 py-4 text-neutral-800 dark:text-neutral-300',
            match ? 'bg-neutral-100 dark:bg-[#110D0D]' : ''
          )}
        >
          <Link to="/">
            <div className="flex gap-2 items-center text-inherit text-xl leading-5 font-logo">
              <img className="logo w-8" />
              <div>
                <span className="text-2xl">F</span>or
                <span className="text-2xl">R</span>equests
              </div>
            </div>
          </Link>
          {match && (
            <>
              <div className="flex items-center justify-end gap-4 w-full mr-10">
                <span className="ml-px block pl-4 text-sm font-medium leading-6 text-neutral-800 dark:text-neutral-300">
                  URL Endpoint
                </span>
                <div className="w-96">
                  <input
                    type="text"
                    id="url"
                    readOnly
                    value={binPath ? `${BASE_URL}/${binPath}` : 'Select a bin'}
                    className="block w-full bg-neutral-100 dark:bg-[#171212] rounded-full border-0 px-4 py-1.5 text-neutral-800 dark:text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-300 dark:ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-300 dark:focus:ring-neutral-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button
                  onClick={handleCopy}
                  className="bg-[#5D0066] dark:bg-[#5D3163] hover:bg-[#750080] dark:hover:bg-[#46244A] py-2 px-3 text-neutral-50 dark:text-neutral-300 font-medium text-sm rounded-full transition-colors"
                >
                  {isCopied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <BinsDropdown bins={bins} />
            </>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
