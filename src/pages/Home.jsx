import { sports } from '../data/sportsData';
import SportCard from '../components/SportCard';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-4">
      {/* <section className="text-center mb-16">
        <h1 className="text-5xl text-primary mb-4 md:text-3xl">Welcome to Jubilee Edition</h1>
        <p className="text-xl text-gray-600">Celebrating sports excellence and competitive spirit</p>
      </section> */}

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8">
        {Object.values(sports).map(sport => (
          <SportCard key={sport.id} sport={sport} />
        ))}
      </section>
    </div>
  );
}

export default Home;