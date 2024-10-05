import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePlace } from "../store/todoRedux";

const SelectedTrip = () => {
    const dispatch = useDispatch();

    // Access the selected trips array from the todo slice
    const selectedTrips = useSelector((state) => state.todo.selectplace);

    const handleRemoveTrip = (tripId) => {
        dispatch(deletePlace(tripId));
    };

    return (
        <div className="selected-trip" style={{ marginLeft: 100 }}>
            <h3 className="font-bold text-3xl underline">Selected Trips List</h3>
            {selectedTrips && selectedTrips.length > 0 ? (
                <ul
                    style={{
                        listStyle: "none",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        gap: "20px", // Adds spacing between cards
                        padding: "0",
                    }}
                >
                    {selectedTrips.map((trip, index) => (
                        <div className="trip-card-container" key={trip.placeId}>
                            {index !== 0 ? (
                                <li>
                                    <div
                                        className="trip-card"
                                        style={{
                                            margin: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "10px",
                                            padding: "20px",
                                            width: "400px", // Adjust the width to make it wider
                                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            backgroundColor: "#f8f9fa", // Light background color
                                        }}
                                    >
                                        <img
                                            src={trip.image}
                                            alt={trip.place}
                                            style={{
                                                width: "100%",
                                                height: "200px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                                marginBottom: "15px",
                                            }}
                                        />
                                        <h1 style={{ fontSize: "1.8em", margin: "10px 0", color: "#333" }}>{trip.place}</h1>
                                        <h3 style={{ fontSize: "1.3em", margin: "5px 0", color: "#666" }}>{trip.country}</h3>
                                        <p style={{ margin: "5px 0" }}>
                                            <strong>Price:</strong> ₹{trip.price}
                                        </p>
                                        <p style={{ margin: "5px 0" }}>
                                            <strong>Days:</strong> {trip.days}
                                        </p>

                                        {/* Displaying the places to visit */}
                                        {trip.view && trip.view.places && trip.view.places.length > 0 && (
                                            <div
                                                style={{
                                                    width: "100%",
                                                    marginTop: "10px",
                                                }}
                                            >
                                                <h4 style={{ color: "#333", marginBottom: "10px" }}>Places to Visit:</h4>
                                                <ul style={{ listStyle: "none", padding: 0 }}>
                                                    {trip.view.places.map((viewPlace, idx) => (
                                                        <li
                                                            key={idx}
                                                            style={{
                                                                marginBottom: "10px",
                                                                padding: "10px",
                                                                borderBottom: "1px solid #eee",
                                                            }}
                                                        >
                                                            <strong>{viewPlace.name}</strong>
                                                            <p style={{ margin: "3px 0", color: "#555" }}>{viewPlace.description}</p>
                                                            <p style={{ margin: "3px 0", color: "#777" }}>
                                                                <strong>Attractions:</strong> {viewPlace.attractions.join(", ")}
                                                            </p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        <button
                                            className="button"
                                            onClick={() => handleRemoveTrip(trip.placeId)}
                                            style={{
                                                backgroundColor: "#ff4d4d",
                                                color: "#fff",
                                                border: "none",
                                                padding: "10px 20px",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                marginTop: "20px",
                                                fontSize: "16px",
                                                transition: "background-color 0.3s ease",
                                            }}
                                            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff3333")}
                                            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No trips selected</p>
            )}
        </div>
    );
};

export default SelectedTrip;
