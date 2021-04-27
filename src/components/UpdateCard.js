const Card = ({ update }) => {
	return (
		<div className="UpdateCard">
			<div>
				<img alt={update.title} src={update.urlToImage} />
			</div>
			<h2>{update.title}</h2>
			<p>{update.description}</p>
		</div>
	);
};

export default Card;
