import PropTypes from "prop-types";
import { FilterInput } from "./Filter.styled";

export const Filter = ({ filter, change }) => {
  return (
    <FilterInput type="text" value={filter} onChange={change} name="filter" />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};
