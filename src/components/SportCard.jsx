import { Link } from 'react-router-dom';

function SportCard({ sport }) {
  return (
    <Link to={`/${sport.id}`} className="backdrop-blur-xl  bg-white/20 rounded-lg p-6 shadow-md transition-all duration-300 flex flex-col gap-4 no-underline text-inherit hover:-translate-y-1 hover:shadow-lg">
      <h2 className="m-0 font-bold text-primary">{sport.title}</h2>
      <p className="m-0 font-semibold text-gray-200">{sport.description}</p>
      <div className="flex gap-4 mt-auto">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{sport.participants.length} Participants</span>
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{sport.fixtures.length} Rounds</span>
      </div>
    </Link>
  );
}

export default SportCard;