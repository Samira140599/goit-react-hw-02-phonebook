import PropTypes from 'prop-types';

function Filter({ handlerFilter, filterValue }) {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handlerFilter}
      ></input>
    </>
  );
}

Filter.propTypes = {
  handlerFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default Filter;
