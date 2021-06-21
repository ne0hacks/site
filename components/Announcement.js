import { VscMegaphone } from "react-icons/vsc";
export default function Announcement() {
  return (
    <div className="bg-white bg-opacity-50 shadow-lg rounded-xl p-4">
      <div className="flex flex-row items-center space-x-8">
        <VscMegaphone size={35} color="#f11d28" />
        <div className="flex flex-col">
          <h4 className="font-bold">NeoHacks has been rescheduled!</h4>
          <p className="text-sm">
            New date: July 30 - August 1. Join us for a weekend of fun and
            learning!
          </p>
        </div>
      </div>
    </div>
  );
}
