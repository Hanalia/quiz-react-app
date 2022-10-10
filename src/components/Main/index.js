import React, { useState } from 'react';
import PropTypes from 'prop-types';



import { filterNull } from '../../utils';


const Main = ({ startQuiz }) => {

	const [processing, setProcessing] = useState(false);
	const [error, setError] = useState(null);


	const fetchLocalData = async () => {
		setProcessing(true);

		if (error) setError(null);

		const results = require("../../data/data.json");
		console.log({ results })

		const processedData = results.map((element) => ({
			...element, options: filterNull([
				element.correct_answer,
				...element.incorrect_answers,
			])
		}))

		setProcessing(false);
		startQuiz(
			processedData,
		);

	};


	return (
		<div className='prose max-w-md w-full'>
			<h3 className='text-center'>나에게 맞는 영양제 추천받기</h3>
			<h5 className='text-center text-gray-400'> Skiip</h5>

			<button
				className='w-full h-10 mt-20 text-sm rounded-md text-white bg-purple-700'
				onClick={fetchLocalData}
			>
				{processing ? '잠시만 기다려 주세요' : '시작하기'}
			</button>
			<br />
		</div>
	);
};

Main.propTypes = {
	startQuiz: PropTypes.func.isRequired,
};

export default Main;
