import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="text-center py-8">
        <Link to="/">
          <h1 className="m-0 text-4xl text-white md:text-2xl">Jubilee Hall Intra Sports Championship 2025</h1>
        </Link>
      </div>
      <nav className="flex justify-center gap-8 py-4 flex-wrap md:gap-4">
        <Link to="/" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Home</Link>
        <Link to="/cricket" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Cricket</Link>
        <Link to="/cricket-auction" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Player Auction</Link>
        <Link to="/badminton" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Badminton</Link>
        <Link to="/tableTennis" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Table Tennis</Link>
        <Link to="/chess" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Chess</Link>
        <Link to="/carrom" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Carrom</Link>
        <Link to="/athletics" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Athletics</Link>
        <Link to="/volleyball" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Volleyball</Link>
        <Link to="/tugOfWar" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Tug of War</Link>
        <Link to="/ludo" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Ludo</Link>
        <Link to="/armWrestling" className="text-white no-underline font-medium px-4 py-2 rounded-md transition-colors hover:bg-white/10">Arm Wrestling</Link>
      </nav>
    </header>
  );
}

export default Header;