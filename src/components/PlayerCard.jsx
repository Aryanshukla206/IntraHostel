import { useDraggable } from '@dnd-kit/core';

function PlayerCard({ player, onBid, isDragging, isSelected, onClick }) {
    // console.log('PlayerCard props:', player);
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: player.id,
        data: player
    });

    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    const handleBidClick = (e) => {
        console.log(player.id);
        e.stopPropagation();
        onBid(player.id);
    };


    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            onClick={onClick}
            onDoubleClick={handleBidClick}
            className={`backdrop-blur-xl bg-white/20 rounded-lg p-6 shadow-md transition-all duration-300 flex flex-col gap-4 no-underline text-inherit z-10 hover:-translate-y-1 hover:shadow-lg ${isSelected ? 'border-2 border-green-500' : ''
                } ${isDragging ? 'opacity-50' : ''}`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold">
                    {player.name[0]}
                </div>
                <div>
                    <h3 className="font-bold">{player.name}</h3>
                    <p className="text-sm text-gray-600">{player.role}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Base Price:</span>
                <span className="font-bold">₹{player.basePrice}</span>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Bid:</span>
                <div className="flex items-center gap-2">
                    <span className="font-bold">₹{player.currentPrice}</span>
                    <button
                        onClick={handleBidClick}
                        data-dnd-kit-disabled-draggable
                        className="bg-primary z-50 text-white px-2 py-1 rounded text-sm hover:bg-primary-dark transition-colors"
                    >
                        +₹50000
                    </button>

                </div>
            </div>
        </div>
    );
}

export default PlayerCard;