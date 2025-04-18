import { useDroppable } from '@dnd-kit/core';

function CaptainCard({ captain, onDrop }) {
    const { setNodeRef } = useDroppable({
        id: captain.id,
        data: captain
    });

    return (
        <div
            ref={setNodeRef}
            className="backdrop-blur-xl  bg-white/20 rounded-lg p-6 shadow-md transition-all duration-300 flex flex-col gap-4 no-underline text-inherit hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold">
                    {captain.name[0]}
                </div>
                <div>
                    <h3 className="text-xl font-bold">{captain.name}</h3>
                    <p className="text-gray-600">{captain.team}</p>
                </div>
            </div>

            <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Remaining Purse:</span>
                    <span className="text-lg font-bold text-green-400">₹{captain.purse}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-medium">Players:</span>
                    <span className="text-lg font-bold">{captain.players.length}/7</span>
                </div>
            </div>

            <div className="border-t pt-4">
                <h4 className="font-medium mb-2">Team Players:</h4>
                <div className="space-y-2">
                    {captain.players.map(player => (
                        <div key={player.id} className="bg-gray-50 p-2 rounded flex justify-between items-center">
                            <span>{player.name}</span>
                            <span className="text-sm text-gray-600">₹{player.currentPrice}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CaptainCard;