export default function Workshop({ title, children, hostPfp, hostName, url, register, imgID }) {
  return (
    <div className="bg-black bg-opacity-5 p-5 rounded-xl">
      <h3 className="mb-1 font-bold text-3xl font-inter text-center">{title}</h3>
      <p className="text-center opacity-100">{children} <a className="text-center font-inter font-medium" target='_blank' href={url}>{register}</a></p>
      
      {hostName?.length && ( 
        <div className="flex flex-row items-center space-x-3 pt-2">
          <img
            id={imgID}
            src={hostPfp}
            alt="Workshop Host"
            className="w-7 h-7 rounded-full"
          />
          <p className="font-inter font-medium">Hosted by {hostName}</p>
        </div>
      )}
    </div>
  );
}
