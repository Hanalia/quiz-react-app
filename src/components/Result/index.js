import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';

import Stats from './Stats';
import QNA from './QNA';

const Result = ({
	totalQuestions,
	correctAnswers,
	timeTaken,
	questionsAndAnswers,
	replayQuiz,
	resetQuiz
}) => {
	const [activeTab, setActiveTab] = useState('Stats');

	const handleTabClick = (e, { name }) => {
		setActiveTab(name);
	};

	return (
		<div className='flex flex-col gap-8 items-center justify-center'>
			<h3>
				○○○ 님의 분석 결과는 아래와 같습니다.
			</h3>

			<div> 결과1 </div>
			<div> 결과2 </div>
			<div> 결과3 </div>
			<div> 결과4 </div>


		</div>
	);
};

Result.propTypes = {
	totalQuestions: PropTypes.number.isRequired,
	correctAnswers: PropTypes.number.isRequired,
	timeTaken: PropTypes.number.isRequired,
	questionsAndAnswers: PropTypes.array.isRequired,
	replayQuiz: PropTypes.func.isRequired,
	resetQuiz: PropTypes.func.isRequired
};

export default Result;
