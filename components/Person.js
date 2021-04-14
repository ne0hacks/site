export default function Person({ src, name, role, pronouns }) {
  return (
    <div className="flex flex-row space-x-3 items-center">
      <div>
        <img src={src} alt={name} className="rounded-full w-20 h-20" />
      </div>
      <div>
        <p className="text-xl text-black dark:text-white font-inter font-bold">
          {name}
        </p>
        <p className="text-gray-500 dark:text-white text-lg font-inter">
          {role} <span className="text-blue-500 font-inter">{pronouns}</span>
        </p>
      </div>
    </div>
  );
}
