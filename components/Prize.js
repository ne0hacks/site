export default function Prize({ icon, title, children }) {
  return (
    <div className="bg-black bg-opacity-5 p-5 rounded-xl">
      <img src={icon} alt={title} className="w-16 h-16 pb-2" />
      <h3 className="mb-1 font-bold text-3xl font-inter">{title}</h3>
      <p className="opacity-100">{children}</p>
    </div>
  );
}
