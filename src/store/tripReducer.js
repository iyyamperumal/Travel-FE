// tripReducer.js

const initialState = {
    loading: false,
    alert: {
        msg: "",
        type: "",
    },
    selectedTrip: null,
    selectedTrips: [],
};

const tripReducer = (state = initialState, action) => {
    switch (action.type) {
        case "open_loading":
            return {
                ...state,
                loading: true,
            };
        case "stop_loading":
            return {
                ...state,
                loading: false,
            };
        case "show_msg":
            return {
                ...state,
                alert: action.alert,
            };
        case "set_selected_trip":
            return {
                ...state,
                selectedTrip: action.payload,
                alert: { msg: "", type: "" },
            };
        case "add_trip_to_selected":
            return {
                ...state,
                selectedTrips: [...state.selectedTrips, action.payload],
                alert: {
                    msg: `Trip to ${action.payload.place} added successfully!`,
                    type: "success",
                },
            };
        case "remove_trip_from_selected":
            return {
                ...state,
                selectedTrips: state.selectedTrips.filter(trip => trip.placeId !== action.payload),
                alert: {
                    msg: `Trip removed successfully!`,
                    type: "info",
                },
            };
        default:
            return state;
    }
};

export default tripReducer;
