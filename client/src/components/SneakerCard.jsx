const SneakerCard = (props) => {

    return (
        <div className="card sneaker-card">
            <div className="img-wrapper">
                <img alt="sneaker img" src={props.image} />
            </div>
            <div className="info-wrapper">
                <h4>{props.name}</h4>
                <h5>`${props.price}`</h5>
            </div>
        </div>
    )
}

export default SneakerCard