const SearchInput = ({ handleChange, value, handleClick }) => {
	return (
		<form>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleClick}>Buscar</button>
		</form>
	);
};

export default SearchInput;
