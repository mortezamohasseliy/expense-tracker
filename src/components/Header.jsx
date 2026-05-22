export default function Header() {
  return (
    <section className="w-full h-auto flex space-x-5 text-left">
      <div className="w-12.5 h-12.5 bg-indigo-500 rounded-lg text-white flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M17 8V5a1 1 0 0 0-1-1H6a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
            <path d="M20 12v4h-4a2 2 0 0 1 0-4z" />
          </g>
        </svg>
      </div>
      <div>
        <h1 className="capitalize text-2xl font-bold">smart expense tracker</h1>
        <p className="capitalize text-sm text-gray-600">
          track where every dollar goes.
        </p>
      </div>
    </section>
  );
}
