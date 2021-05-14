export default function Workshop({ title, children, hostPfp, hostName }) {
  return (
    <div className="bg-black bg-opacity-5 p-5 rounded-xl">
      <h3 className="mb-1 font-bold text-3xl font-inter">{title}</h3>
      <p className="opacity-100">{children}</p>
      {hostName?.length && (
        <div className="flex flex-row items-center space-x-3 pt-2">
          <img
            src={hostPfp}
            alt="Workshop Host"
            className="w-7 h-7 rounded-full"
          />
          <p className="font-inter font-semibold">@{hostName}</p>
        </div>
      )}
    </div>
  );
}
