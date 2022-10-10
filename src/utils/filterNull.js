const filterNull = array => {
	array = [...array].filter(Boolean); //get rid of empty 



	return array;
};

export default filterNull;
