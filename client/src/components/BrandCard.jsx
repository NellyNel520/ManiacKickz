const BrandCard = (props) => {
    return (
        <div className="card brand-card" onclick={props.onClick}>
            <div className="img-wrapper">
                <img alt="brand img" src={props.image} />
            </div>
            <div className="info-wrapper flex-col">
                <h3>{props.brand}</h3>
            </div>
        </div>
    )
}
export default BrandCard