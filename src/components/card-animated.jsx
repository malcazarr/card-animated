import './card-animated.css';

const CardAnimated = (data) =>{
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-title">{data.title}</div>
                {data.content}
                <button className="card-button" onClick={data.buttonAction}>{data.textButton}</button>
            </div>
        </div>
    )
}

export default CardAnimated;