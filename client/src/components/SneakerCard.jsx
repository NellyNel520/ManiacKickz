

const SneakerCard = (props) => {

	return (
		<div className="card sneaker-card" key={props.key} onClick={props.onClick}>
			<div className="img-wrapper">
				<img alt="sneaker img" src={props.image} />
			</div>
			<div className="info-wrapper flex-col">
				<h4>{props.name}</h4>
				<h5>${props.price}</h5>
			</div>
			
		</div>
	);
};
// onclick => view more details

export default SneakerCard;
