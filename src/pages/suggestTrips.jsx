import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addPlace, deletePlace } from '../store/todoRedux';
import { Card, Input } from 'antd';

const TripSuggestions = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const predefinedSuggestions = [
            { id: '1', place: 'Bali', country: 'Indonesia', image: "https://res.klook.com/image/upload/q_85/c_fill,w_1360/v1654586251/blog/wsnqunszlajd5ypjo29l.webp", price: 12000, days: 1 },
            { id: '2', place: 'Paris', country: 'France', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7cx8p54FTlCPtGnwH7LgDedCWmFgOUj5O1w&s", price: 25000, days: 1 },
            { id: '3', place: 'Ladakh', country: 'India', image: "https://grandholidayparkvacation.com/uploads/62208357b184e_1646297943.jpg", price: 15000, days: 1 },
            { id: '4', place: 'Dubai', country: 'UAE', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9SUlHR9wpgK67Mb_Z4fMZadB0fBGWckyYQ&s", price: 18000, days: 1 },
            { id: '5', place: 'Barcelona', country: 'Spain', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ejPPJNCJNkEZczg_tEqSxAZObUPRxLqgKQ&s", price: 22000, days: 1 }
        ];
        setSuggestions(predefinedSuggestions);
    }, []);

    const handleCardClick = (trip) => {
        const dateRange = [new Date(), new Date(new Date().setDate(new Date().getDate() + trip.days))]; // Example: setting date range for days
        const serializedTrip = {
            Journey_From: "Your Starting Location", // This should be updated to get actual user input
            destination: trip.place,
            "No.of.Passengers": 1, // Replace with user input as needed
            Date: dateRange.map(date => date.toISOString()), // Formatting dates to ISO strings
            ...trip // Spread other trip details if needed
        };

        dispatch(deletePlace()); // Clear previous place
        dispatch(addPlace(serializedTrip)); // Add new trip details
    };

    const filteredSuggestions = useMemo(
        () => suggestions.filter((trip) => trip.place.toLowerCase().includes(search.toLowerCase())),
        [suggestions, search]
    );

    return (
        <div className="trip-suggestions w-83 m-5">
            <h2 className='text-2xl font-bold'>Explore Popular Destinations</h2><br />
            <Input
                placeholder="Search for destinations"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <div className="trips-container flex justify-center pt-4 pb-4 underline text-4xl font-bold">
                {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((trip) => (
                        <Card
                            className='trip-card'
                            key={trip.id}
                            title={trip.place}
                            style={{ width: '300px', margin: '10px' }}
                            onClick={() => handleCardClick(trip)}
                        >
                            <img src={trip.image} alt={`${trip.place} in ${trip.country}`} style={{ width: '100%', height: 'auto' }} />
                            <p><strong>Country:</strong> {trip.country}</p>
                            <p><strong>Price:</strong> ₹{trip.price}</p>
                            <p><strong>Days:</strong> {trip.days}</p>
                        </Card>
                    ))
                ) : (
                    <p>No suggestions found.</p>
                )}
            </div>
        </div>
    );
};

export default TripSuggestions;
