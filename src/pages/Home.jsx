import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOtherPlan } from "../apis";
import { showMsg } from "../store/action";
import UserForm from "./tripDetails";
import TodoList from "./todoList";
import { useSelector } from "react-redux";
import TripSuggestions from "./suggestTrips";


const Home = () => {
    const [plans, setPlans] = useState([]);
    const dispatch = useDispatch();

    const loadMyPlans = async () => {
        dispatch({ type: "open_loading" });
        try {
            const data = await getOtherPlan();
            setPlans(data);
        } catch (error) {
            console.error("Failed to load plans:", error.message);
            dispatch(showMsg(error.message, "error"));
        } finally {
            dispatch({ type: "stop_loading" });
        }
    };

    useEffect(() => {
        loadMyPlans();
    }, []);


    return (
        <div style={{ margin: 24 }}>
            <UserForm />
            <TodoList />
            <TripSuggestions />
        </div>
    );
};

export default Home;
