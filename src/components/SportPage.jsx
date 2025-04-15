function SportPage({ sport }) {
  return (
    <div className="max-w-7xl mx-auto  rounded-lg px-8 md:px-4">
      <div className=" backdrop-blur-md text-center font-bold bg-white/20 mb-5 rounded-2xl max-w-96 mx-auto p-3">
        <h1 className="font-extrabold text-2xl">{sport.title}</h1>
        <p className="text-xl text-gray-300  mt-1 ">{sport.description}</p>
      </div>

      <section className="mb-12 text-center backdrop-blur-md rounded-2xl bg-white/20 p-4 ">
        <h2 className="text-white text-2xl font-extrabold  mb-6">Participants</h2>
        <div className="overflow-x-auto  rounded-lg shadow-md">
          <table className="w-full  border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">S.no</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Name</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Room</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Contact</th>
                {sport.id === 'athletics' && <th className="p-4 text-left border-b border-gray-200 bg-gray-50 font-semibold text-gray-700">Event</th>}
              </tr>
            </thead>
            <tbody>
              {sport.participants.map((participant) => (
                <tr key={participant.id} className=" cursor-pointer text-white">
                  <td className="p-4 text-left border-b border-gray-200">{participant.id}</td>
                  <td className="p-4 text-left border-b border-gray-200">{participant.name}</td>
                  <td className="p-4 text-left border-b border-gray-200">{participant.room}</td>
                  <td className="p-4 text-left border-b border-gray-200">{participant.contact}</td>
                  {sport.id === 'athletics' && <td className="p-4 text-left border-b border-gray-200">{participant.event}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12 text-center backdrop-blur-md rounded-2xl bg-white/20 p-4 ">
        <h2 className="text-white text-2xl font-extrabold  mb-6">Fixtures</h2>
        <div className="overflow-x-auto  rounded-lg shadow-md">
          <table className="w-full  border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Round</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Date</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Time</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Player 1</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Player 2</th>
                <th className="p-4 text-left border-b border-gray-200  font-extrabold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {sport.fixtures.map((match) =>
                <tr key={match.id} className=" cursor-pointer text-white">
                  <td className="p-4 text-left border-b border-gray-200">{match.round}</td>
                  <td className="p-4 text-left border-b border-gray-200">{match.date}</td>
                  <td className="p-4 text-left border-b border-gray-200">{match.time}</td>
                  <td className="p-4 text-left border-b border-gray-200">{match.player1}</td>
                  <td className="p-4 text-left border-b border-gray-200">{match.player2}</td>
                  <td className="p-4 text-left border-b border-gray-200">{match.status}</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

export default SportPage;