import PropTypes from 'prop-types';
const Card7 = ({empleado}) => {
  const { id, pic, fullName, title, department } = empleado;
  return (
    <div className="card my-1 border-success bg-body-tertiary " key={id}>
    <div className="row no-gutters align-items-center">
      <div className="col-3 py-2 d-flex justify-content-center ml-3">
        <img src={pic} alt={fullName} className="rounded w-100" />
      </div>
      <div className="col-8">
        <div className="p-3">
          <h3>{fullName}</h3>
          <p>{title}</p>
          <hr />
          <p>{department}</p>
        </div>
      </div>
    </div>
  </div>
  );
}
Card7.propTypes = {
    empleado: PropTypes.shape({
      pic: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
    }).isRequired,
  };
export default Card7