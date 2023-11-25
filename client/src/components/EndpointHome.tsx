import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

function EndpointHome() {
  return (
    <>
      <p className="text-xl font-extralight">Your endpoint is</p>
      <div className="flex gap-4 items-center mb-4">
        <h2 className="text-3xl font-light">
          https://for-requests.github.io/jkdlafdafdsafdjo
        </h2>
        <button className="flex gap-2 items-center py-2 px-2 text-neutral-300 text-xs font-light border border-neutral-700 hover:bg-[#3B3636] transition-colors">
          Copy <DocumentDuplicateIcon className="text-neutral-300 w-4" />
        </button>
      </div>
      <button className="mb-4 bg-[#5D3163] hover:bg-[#46244A] py-3 px-4 text-neutral-300 font-medium rounded-full transition-colors">
        Generate Test Request
      </button>
      <div>
        <p className="font-light">
          You can send webhooks and HTTP requests to this endpoint.
        </p>
        <ul className="list-disc">
          <li className="font-light ml-8 text-sm">
            Create new bins for another endpoint
          </li>
          <li className="font-light ml-8 text-sm">Requests appear instantly</li>
          <li className="font-light ml-8 text-sm">
            Endpoints expire after 1 month
          </li>
        </ul>
      </div>
    </>
  );
}

export default EndpointHome;
