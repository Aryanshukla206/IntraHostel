import { useState } from 'react';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CaptainCard from '../components/CaptainCard';
import PlayerCard from '../components/PlayerCard';

const initialCaptains = [
    { id: 'captain-1', name: 'Arpit Mahajan', team: 'Team Dragons', purse: 10000000, players: [] },
    { id: 'captain-2', name: 'Anas Jaman', team: 'Team Spartans', purse: 10000000, players: [] },
    { id: 'captain-3', name: 'Raj Sehwag', team: 'Team Phoenix', purse: 10000000, players: [] },
    { id: 'captain-4', name: 'Kuldeep Upadhyay', team: 'Team Titans', purse: 10000000, players: [] },
];

const initialPlayers = [
    { id: 'player-1', name: 'Sajal Patel', role: 'All-rounder', basePrice: 500000, currentPrice: 5500000 },
    { id: 'player-2', name: 'Arpit Pandey', role: 'All-rounder', basePrice: 500000, currentPrice: 550000 },
    { id: 'player-3', name: 'Saksham Rai', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-4', name: 'Jatin Prajapati', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-5', name: 'Manish Jaiswal', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-6', name: 'Aryan Yadav', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-7', name: 'Sumit Tiwari', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-8', name: 'Khirus Pegu', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-9', name: 'Aryan Shukla', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-10', name: 'Nishant Shekhar Jha', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-11', name: 'Pradyumn Attri', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-12', name: 'Stanzin Norboo', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-13', name: 'Soumya Ranjan Hota', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-14', name: 'Naman Manhas', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-15', name: 'Razzaq', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-16', name: 'Kumar Abhishek', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-17', name: 'Suyash Shekhar', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-18', name: 'Stanzin kunphel', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-19', name: 'Gaurav', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-20', name: 'Aman Rao', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-21', name: 'Rachagorla Naveen Kumar', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-22', name: 'Raunak Raj', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-23', name: 'Bairu Manikanta Goud', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-24', name: 'Nishant Chaudhary', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-25', name: 'Akash Chahar', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-26', name: 'Sahil', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-27', name: 'Prabhakar', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-28', name: 'Harsh', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-29', name: 'Saurabh Verma', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },
    { id: 'player-30', name: 'Arpit B', role: 'All-rounder', basePrice: 500000, currentPrice: 500000 },

].map((player, index) => ({
    ...player,
    id: `player-${index + 1}`,
    basePrice: player.basePrice || 500000,
    currentPrice: player.currentPrice || 600000,
}));

// function CricketAuction() {
//     const [captains, setCaptains] = useState(initialCaptains);
//     const [players, setPlayers] = useState(initialPlayers);
//     const [activeId, setActiveId] = useState(null);

//     const handleDragStart = (event) => {
//         setActiveId(event.active.id);
//     };

//     const handleDragEnd = (event) => {
//         const { active, over } = event;

//         if (!over) return;

//         const player = players.find(p => p.id === active.id);
//         const captain = captains.find(c => c.id === over.id);

//         if (player && captain) {
//             if (captain.purse < player.currentPrice) {
//                 toast.error('Insufficient funds!');
//                 return;
//             }

//             if (captain.players.length >= 7) {
//                 toast.error('Team is full!');
//                 return;
//             }

//             setCaptains(captains.map(c => {
//                 if (c.id === captain.id) {
//                     return {
//                         ...c,
//                         purse: c.purse - player.currentPrice,
//                         players: [...c.players, player]
//                     };
//                 }
//                 return c;
//             }));

//             setPlayers(players.filter(p => p.id !== player.id));
//         }

//         setActiveId(null);
//     };

//     const handleBid = (playerId) => {
//         setPlayers(players.map(player => {
//             if (player.id === player.id) {
//                 return {
//                     ...player,
//                     currentPrice: player.currentPrice + 50000
//                 };
//             }
//             return player;
//         }));
//     };

//     return (
//         <div className="max-w-7xl mx-auto px-8 py-8 md:px-4">
//             <ToastContainer position="top-right" />
//             <div className=" backdrop-blur-md text-center font-bold bg-white/20 mb-5 rounded-2xl max-w-96 mx-auto p-3">
//                 <h1 className="font-extrabold text-2xl">Cricket Player Auction</h1>
//                 <p className="text-2xl  text-gray-200  mt-1 ">Jubilee Hall Premier League</p>
//             </div>
//             <div className=" backdrop-blur-md text-center font-bold bg-white/20 mb-5 rounded-2xl max-w-96 mx-auto p-3">
//                 <h1 className="font-extrabold text-2xl"> Captains</h1>
//             </div>

//             <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
//                 <div className="flex flex-wrap gap-6 mb-12">
//                     {captains.map(captain => (
//                         <CaptainCard key={captain.id} captain={captain} />
//                     ))}
//                 </div>

//                 <div className=" backdrop-blur-md text-center font-bold bg-white/20 mb-5 rounded-2xl max-w-96 mx-auto p-3">
//                     <h1 className="font-extrabold text-2xl">Available Players</h1>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                     {players.map(player => (
//                         <PlayerCard
//                             key={player.id}
//                             player={player}
//                             onBid={handleBid}
//                             isDragging={player.id === activeId}
//                         />
//                     ))}
//                 </div>

//                 <DragOverlay>
//                     {activeId ? (
//                         <PlayerCard
//                             player={players.find(p => p.id === activeId)}
//                             onBid={handleBid}
//                             isDragging={true}
//                         />
//                     ) : null}
//                 </DragOverlay>
//             </DndContext>
//         </div>
//     );
// }
function CricketAuction() {
    const [captains, setCaptains] = useState(initialCaptains);
    const [players, setPlayers] = useState(initialPlayers);
    const [activeId, setActiveId] = useState(null);
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
        setSelectedPlayerId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setSelectedPlayerId(null);

        if (!over) return;

        const player = players.find(p => p.id === active.id);
        const captain = captains.find(c => c.id === over.id);

        if (player && captain) {
            if (captain.purse < player.currentPrice) {
                toast.error('Insufficient funds!');
                return;
            }

            if (captain.players.length >= 7) {
                toast.error('Team is full!');
                return;
            }

            setCaptains(captains.map(c => {
                if (c.id === captain.id) {
                    return {
                        ...c,
                        purse: c.purse - player.currentPrice,
                        players: [...c.players, player]
                    };
                }
                return c;
            }));

            setPlayers(players.filter(p => p.id !== player.id));
        }

        setActiveId(null);
    };

    const handleBid = (playerId) => {
        setPlayers(players.map(player => {
            // Fixed the comparison - was comparing player.id with player.id before
            if (player.id === playerId) {
                return {
                    ...player,
                    currentPrice: player.currentPrice + 50000
                };
            }
            return player;
        }));
    };
    const handlePlayerClick = (playerId) => {
        setSelectedPlayerId(playerId === selectedPlayerId ? null : playerId);
    };

    return (
        <div className="max-w-7xl mx-auto px-8 py-8 md:px-4">
            <ToastContainer position="top-right" />
            {/* ... (header elements remain same) */}

            <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
                {/* Captain cards section */}
                <div className="flex flex-wrap gap-6 mb-12">
                    {captains.map(captain => (
                        <CaptainCard key={captain.id} captain={captain} />
                    ))}
                </div>

                {/* Available players section */}
                <div className=" backdrop-blur-md text-center font-bold bg-white/20 mb-5 rounded-2xl max-w-96 mx-auto p-3">
                    <h1 className="font-extrabold text-2xl">Available Players</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {players.map(player => (
                        <PlayerCard
                            key={player.id}
                            player={player}
                            onBid={handleBid} // Make sure this is passed
                            onClick={() => handlePlayerClick(player.id)}
                            isSelected={player.id === selectedPlayerId}
                            isDragging={player.id === activeId}
                        />
                    ))}
                </div>

                {/* <DragOverlay>
                    {activeId ? (
                        <PlayerCard
                            player={players.find(p => p.id === activeId)}
                            isDragging={true}
                            isSelected={true}
                        />
                    ) : null}
                </DragOverlay> */}
            </DndContext>
        </div>
    );
}
export default CricketAuction;