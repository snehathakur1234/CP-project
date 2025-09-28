function Card(props)
{
    return <>
    <div className="card">
        <div className="card-header">
            <h2>{props.name}</h2>
            <span className="enrollment-no">{props.e_no}</span>
        </div>
        <div className="card-content">
            <p><b>Room:</b> {props.room}</p>
            <p><b>Reason:</b> {props.reason}</p>
            <div className="date-info">
                <div className="date-item">
                    <b>Leave Start:</b> {props.startDate}
                </div>
                <div className="date-item">
                    <b>Expected Return:</b> {props.endDate}
                </div>
                <div className="date-item">
                    <b>Submitted:</b> {props.submittedDate}
                </div>
            </div>
            <div className="card-status">
                <span className={`status-badge ${props.status.toLowerCase()}`}>
                    {props.status}
                </span>
            </div>
        </div>
        <div className="card-actions">
            <button className="card-btn approve">Approve</button>
            <button className="card-btn reject">Reject</button>
            <button className="card-btn details">Details</button>
        </div>
    </div>
    </>;
}

export default Card;