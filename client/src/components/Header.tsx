import { Link, useMatch } from 'react-router-dom';
import { classNames } from '../utils/helpers';
import BinsDropdown from './BinsDropdown';
import { Bin } from '../types';
import Divider from './ui/Divider';

const bins: Bin[] = [
  { id: 1, binPath: '/fjdkaf92rie2wofudsafd' },
  { id: 2, binPath: '/fjdkaf92rie2wofudsafd' },
  { id: 3, binPath: '/fjdkaf92rie2wofudsafd' },
  { id: 4, binPath: '/fjdkaf92rie2wofudsafd' },
];

function Header() {
  const match = useMatch('/bins');

  return (
    <>
      <header>
        <nav
          className={classNames(
            'flex justify-between rounded-2xl items-center px-10 py-4 text-neutral-300',
            match ? 'bg-[#110D0D]' : '',
          )}
        >
          <Link to="/">
            <span className="text-xl leading-5 font-logo text-base-content">
              <span className="text-2xl">F</span>or
              <span className="text-2xl">R</span>equests
            </span>
          </Link>
          {match && (
            <>
              <div className="flex items-center justify-end gap-4 w-full mr-10">
                <span className="ml-px block pl-4 text-sm font-medium leading-6 text-neutral-300">
                  URL Endpoint
                </span>
                <div className="w-96">
                  <input
                    type="text"
                    id="url"
                    readOnly
                    value="http://forrequests.com/bins/fjdkaf92rie2wofudsafd"
                    className="block w-full bg-[#171212] rounded-full border-0 px-4 py-1.5 text-neutral-300 shadow-sm ring-1 ring-inset ring-neutral-700 focus:ring-2 focus:ring-inset focus:ring-neutral-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <button className="bg-[#5D3163] hover:bg-[#46244A] py-2 px-3 text-neutral-300 font-medium text-sm rounded-full transition-colors">
                  Copy
                </button>
              </div>
              <BinsDropdown bins={bins} />
            </>
          )}
        </nav>
      </header>
      {match && <Divider className="w-full h-[1px] bg-neutral-700 mt-4" />}
    </>
  );
}

export default Header;
