export const setSelectedTrip = (trip) => ({
    type: "set_selected_trip",
    payload: trip,
});

export const addTripToSelected = (trip) => (dispatch) => {
    // Check if the trip is already selected
    dispatch({
        type: "add_trip_to_selected",
        payload: trip,
    });

    // Dispatch a success message
    dispatch(showMsg(`Trip to ${trip.place} added successfully!`, "success"));
};

export const removeTripFromSelected = (tripId) => (dispatch) => {
    dispatch({
        type: "remove_trip_from_selected",
        payload: tripId,
    });

    // Dispatch a message on successful removal
    dispatch(showMsg(`Trip removed successfully!`, "info"));
};

export const showMsg = (msg, msgType) => ({
    type: "show_msg",
    alert: { msg, type: msgType },
});
