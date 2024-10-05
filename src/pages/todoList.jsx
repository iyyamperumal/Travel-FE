import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPlace } from '../store/todoRedux';
import { message, Button } from 'antd';
import UserForm from './tripDetails';

const TodoList = () => {
    const [editingTrip, setEditingTrip] = useState(null);
    const Data = [
        {
            placeId: "1",
            place: "Bali",
            image: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1654586251/blog/wsnqunszlajd5ypjo29l.webp",
            country: "Indonesia",
            price: 12000,
            days: 1,
            view: {
                places: [
                    {
                        name: "Ubud",
                        description: "Cultural heart of Bali known for rice terraces, temples, and arts.",
                        attractions: ["Tegalalang Rice Terrace", "Ubud Monkey Forest", "Campuhan Ridge Walk"]
                    },
                    {
                        name: "Seminyak",
                        description: "Trendy beach town famous for luxury resorts, shopping, and nightlife.",
                        attractions: ["Seminyak Beach", "Petitenget Temple", "Double Six Beach"]
                    },
                    {
                        name: "Tanah Lot",
                        description: "Iconic temple set on a rock formation, known for stunning sunsets.",
                        attractions: ["Tanah Lot Temple", "Sunset views", "Pura Batu Bolong"]
                    },
                    {
                        name: "Uluwatu",
                        description: "Cliffside area known for beaches, surfing, and the Uluwatu Temple.",
                        attractions: ["Uluwatu Temple", "Padang Padang Beach", "Kecak Dance Performances"]
                    },
                    {
                        name: "Nusa Penida",
                        description: "A secluded island with dramatic cliffs and crystal-clear waters.",
                        attractions: ["Kelingking Beach", "Angel’s Billabong", "Crystal Bay"]
                    }
                ]
            }
        },
        {
            placeId: "2",
            place: "Ladakh",
            image: "https://grandholidayparkvacation.com/uploads/62208357b184e_1646297943.jpg",
            country: "India",
            price: 4000,
            days: 1,
            view: {
                places: [
                    {
                        name: "Pangong Lake",
                        description: "A breathtaking high-altitude lake known for its crystal-clear waters and stunning mountain backdrop.",
                        attractions: ["Scenic Views", "Photography Spots", "Camping"]
                    },
                    {
                        name: "Nubra Valley",
                        description: "Desert valley surrounded by towering mountains and known for its double-humped camels.",
                        attractions: ["Camel Rides", "Diskit Monastery", "Hunder Sand Dunes"]
                    },
                    {
                        name: "Magnetic Hill",
                        description: "A place where gravity seems to be defied, causing cars to roll uphill.",
                        attractions: ["Magnetic Experience", "Scenic Drive"]
                    },
                    {
                        name: "Thiksey Monastery",
                        description: "A hilltop monastery resembling the Potala Palace and offering panoramic views of the valley.",
                        attractions: ["Buddhist Artifacts", "Stunning Views", "Monk Prayer Sessions"]
                    }
                ]
            }
        },
        {
            placeId: "3",
            place: "Dubai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9SUlHR9wpgK67Mb_Z4fMZadB0fBGWckyYQ&s",
            country: "UAE",
            price: 8000,
            days: 1,
            view: {
                places: [
                    {
                        name: "Burj Khalifa",
                        description: "The tallest building in the world, offering spectacular views from its observation decks.",
                        attractions: ["Observation Deck", "Dubai Fountain Show", "Sky Lounge"]
                    },
                    {
                        name: "Palm Jumeirah",
                        description: "An artificial island shaped like a palm tree, home to luxury hotels and attractions.",
                        attractions: ["Atlantis Hotel", "Aquaventure Waterpark", "The View at The Palm"]
                    },
                    {
                        name: "Dubai Mall",
                        description: "A massive shopping and entertainment destination with an aquarium, ice rink, and more.",
                        attractions: ["Shopping", "Dubai Aquarium", "Fashion Avenue"]
                    },
                    {
                        name: "Desert Safari",
                        description: "Experience the thrill of dune bashing, camel rides, and traditional Bedouin-style camps.",
                        attractions: ["Dune Bashing", "Camel Rides", "Traditional Shows"]
                    }
                ]
            }
        },
        {
            placeId: "4",
            place: "Paris",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cx8p54FTlCPtGnwH7LgDedCWmFgOUj5O1w&s",
            country: "France",
            price: 18000,
            days: 1,
            view: {
                places: [
                    {
                        name: "Eiffel Tower",
                        description: "Iconic symbol of Paris, offering breathtaking views from its observation decks.",
                        attractions: ["Observation Deck", "Champ de Mars", "Eiffel Tower Light Show"]
                    },
                    {
                        name: "Louvre Museum",
                        description: "World-famous museum home to thousands of artworks, including the Mona Lisa.",
                        attractions: ["Art Galleries", "Mona Lisa", "Glass Pyramid"]
                    },
                    {
                        name: "Notre-Dame Cathedral",
                        description: "A masterpiece of French Gothic architecture with stunning stained glass windows.",
                        attractions: ["Cathedral Tours", "Bell Towers", "Stained Glass Windows"]
                    },
                    {
                        name: "Montmartre",
                        description: "A historic area known for its artistic atmosphere, cafes, and the Basilica of the Sacré-Cœur.",
                        attractions: ["Basilica of the Sacré-Cœur", "Artists' Square", "Moulin Rouge"]
                    }
                ]
            }
        },
        {
            placeId: "5",
            place: "Barcelona",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ejPPJNCJNkEZczg_tEqSxAZObUPRxLqgKQ&s",
            country: "Spain",
            price: 20000,
            days: 1,
            view: {
                places: [
                    {
                        name: "Sagrada Familia",
                        description: "Antoni Gaudí's unfinished masterpiece and one of the most recognizable landmarks in Barcelona.",
                        attractions: ["Architecture Tours", "Stained Glass Windows", "Museum"]
                    },
                    {
                        name: "Park Güell",
                        description: "A whimsical park designed by Gaudí, offering colorful mosaics and panoramic views.",
                        attractions: ["Mosaic Bench", "Gaudí House Museum", "Panoramic Views"]
                    },
                    {
                        name: "La Rambla",
                        description: "A bustling street in central Barcelona filled with shops, cafes, and street performers.",
                        attractions: ["Shopping", "Cafes", "Street Performers"]
                    },
                    {
                        name: "Gothic Quarter",
                        description: "A maze of narrow medieval streets filled with history, bars, and unique boutiques.",
                        attractions: ["Cathedral of Barcelona", "Roman Walls", "Tapas Bars"]
                    }
                ]
            }
        }
    ];

    const selectedPlace = useSelector((state) => state.todo.selectplace);
    const selectedTrip = selectedPlace.length > 0 ? selectedPlace[0] : null;
    const placeDetails = selectedTrip ? Data.find((place) => place.place === selectedTrip.destination) : null;

    // Calculate total price based on days and passengers
    const totalPrice = (selectedTrip?.['No.of.Passengers'] || 0) * (placeDetails?.price || 0) * (selectedTrip?.totalDays || 0);

    const dispatch = useDispatch();

    const handleAddTrip = (place) => {
        dispatch(addPlace(place));
        message.success('Trip added to selected trips successfully!');
    };

    const handleEditTrip = () => {
        setEditingTrip(selectedTrip);
    };

    const handleFormSubmit = (updatedTrip) => {
        console.log("Updated Trip Details: ", updatedTrip);
        setEditingTrip(null);
        message.success('Trip details updated successfully!');
    };

    useEffect(() => {
        if (selectedPlace.length === 0) {
            console.log("No selected places: " + selectedPlace.length);
        }
    }, [selectedPlace]);

    return (
        <div className='p-5 bg-gray-100 min-h-screen'>
            <div className='bg-white shadow-md rounded-lg p-6 max-w-lg mx-auto mt-10'>
                <h1 className='text-2xl font-bold text-center mb-4'>Trip Voucher</h1>

                {selectedPlace.length === 0 ? (
                    <div className='text-center text-red-600'>
                        Please fill the form or select a trip from suggestions to see your trip details.
                    </div>
                ) : (
                    <div className='text-gray-700'>
                        <h2 className='text-xl font-semibold mb-2'>Welcome to {selectedTrip.destination} Plan</h2>
                        <img src={placeDetails?.image} alt={selectedTrip.destination} className='w-full h-48 object-cover rounded-lg mb-4' />
                        <p className='mb-2'><strong>Country:</strong> {placeDetails?.country}</p>
                        <p className='mb-2'><strong>No. of Passengers:</strong> {selectedTrip['No.of.Passengers']}</p>
                        <p className='mb-2'><strong>Total Days:</strong> {selectedTrip.totalDays || placeDetails?.days}</p>
                        <p className='mb-4'><strong>Total Price:</strong> ₹{totalPrice}</p>

                        {placeDetails && placeDetails.view ? (
                            <div className='bg-gray-50 p-4 rounded-lg shadow-sm'>
                                <h3 className='text-lg font-medium mb-3'>Places to Visit in {placeDetails.place}:</h3>
                                <ul className='list-disc pl-5 space-y-3'>
                                    {placeDetails.view.places.map((viewPlace, index) => (
                                        <li key={index} className='border-b py-2'>
                                            <h4 className='text-md font-semibold'>{viewPlace.name}</h4>
                                            <p className='text-sm'>{viewPlace.description}</p>
                                            <p className='text-xs text-gray-500'>Top Attractions: {viewPlace.attractions.join(', ')}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>No additional view information available for this place.</p>
                        )}

                        <div className='flex justify-center mt-6'>
                            <Button type='primary' className='mr-2' onClick={() => handleAddTrip(placeDetails)}>
                                Add to Selected Trips
                            </Button>
                            <Button type='default' className='mr-2' onClick={handleEditTrip}>
                                Edit Trip
                            </Button>
                        </div>
                    </div>
                )}

                {editingTrip && <UserForm initialValues={editingTrip} onFinish={handleFormSubmit} />}
            </div>
        </div>
    );
};

export default TodoList;