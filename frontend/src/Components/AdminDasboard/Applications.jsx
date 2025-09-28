import { useEffect,useState } from "react";
import Card from "./Card";

function Applications()
{
    const [applications,setApplications] = useState([
        {
            id: 1,
            name: "Rajesh Kumar", 
            e_no: "E006",
            reason: "Family Emergency - Mother's Surgery", 
            startDate: "2024-01-26", 
            endDate: "2024-01-30",
            room: "A-105",
            status: "Pending",
            submittedDate: "2024-01-25"
        },
        {
            id: 2,
            name: "Priya Sharma", 
            e_no: "E007",
            reason: "Wedding Ceremony - Cousin's Marriage", 
            startDate: "2024-01-28", 
            endDate: "2024-02-02",
            room: "B-210",
            status: "Pending",
            submittedDate: "2024-01-25"
        },
        {
            id: 3,
            name: "Amit Singh", 
            e_no: "E008",
            reason: "Medical Checkup - Annual Health Exam", 
            startDate: "2024-01-27", 
            endDate: "2024-01-27",
            room: "C-315",
            status: "Pending",
            submittedDate: "2024-01-26"
        }
    ]);

    useEffect(()=>{
     
    },[]);

    return(<>
     <div className="App">
        {applications.length > 0 ? 
            applications.map((app) => 
                <Card 
                    key={app.id}
                    name={app.name}
                    e_no={app.e_no}
                    reason={app.reason}
                    startDate={app.startDate}
                    endDate={app.endDate}
                    room={app.room}
                    status={app.status}
                    submittedDate={app.submittedDate}
                />
            ) : 
            <div className="no-data">
                <p>No pending applications found</p>
            </div>
        }
     </div>
    </>);
}

export default Applications;