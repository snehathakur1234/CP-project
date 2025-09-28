import { useEffect, useState ,useRef} from "react";
import Ava_tar from "../Common_Components/Ava_tar";
import "./profile.css"
import Applications from "./Applications";

function Profile()
{
    useEffect(()=>{
    },[]);

    const[card,setCard]=useState(false);
    const cardRef = useRef(null);
    const buttonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // if click is NOT inside dropdown and NOT inside button → close it
      if (
        cardRef.current &&
        !cardRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setCard(false);
      }
    }

    if (card) {
      // dropdown is open → attach listener
      document.addEventListener("click", handleClickOutside);
    }

    // cleanup → remove listener when dropdown closes/unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [card])

    return(<>
      <div className="Profile">
        <button ref ={buttonRef} onClick={()=>setCard(!card)}><Ava_tar/></button>
        {card && <div className="cardCom" ref={cardRef}>
          <h3>Dr. Sudarshan Kumar</h3>
          <p>Rector - Student Affairs</p>
          <p>Hostel Management System</p>
          <div className="profile-actions">
            <button className="profile-btn">Settings</button>
            <button className="profile-btn logout">Logout</button>
          </div>
        </div>
        }
      </div>
    </>);

}

export default Profile;