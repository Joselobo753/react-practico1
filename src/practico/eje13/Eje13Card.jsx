const Eje13Card = ({ quote }) => {
  const { character, quote: quoteText, image } = quote;

  return (
    <div className="card col-3 m-2 border border-success">
      <img src={image} className="card-img-top w-50" alt={character} />
      <div className="card-body">
        <h5 className="card-title">{character}</h5>
        <p className="card-text">{quoteText}</p>
      </div>
    </div>
  );
};

export default Eje13Card;