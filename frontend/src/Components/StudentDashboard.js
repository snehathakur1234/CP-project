import AddStudent from "./StudentDashboard/AddStudent";
import { useNavigate } from "react-router-dom";

function StudentDashboard()
{

    const navigate = useNavigate();
    return(
        <>
        <button onClick={()=>{navigate("/addStudent")}}> + </button>
        </>
    );
}

export default StudentDashboard;