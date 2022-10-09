import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import he from 'he';

import "./quiz.css";
import { getLetter } from '../../utils';

const Quiz = ({ data, countdownTime, endQuiz }) => {
	const [questionIndex, setQuestionIndex] = useState(0);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [userSlectedAns, setUserSlectedAns] = useState(null);
	const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);
	const [timeTaken, setTimeTaken] = useState(null);

	const [activeIndex, setActiveIndex] = useState(null);


	const handleItemClick = (e, i) => {
		setActiveIndex(i)
		setUserSlectedAns(e.target.value);
	};


	const handleNext = () => {
		setActiveIndex(null)
		let point = 0;
		if (userSlectedAns === he.decode(data[questionIndex].correct_answer)) {
			point = 1;
		}

		const qna = questionsAndAnswers;
		qna.push({
			question: he.decode(data[questionIndex].question),
			user_answer: userSlectedAns,
			correct_answer: he.decode(data[questionIndex].correct_answer),
			point
		});

		if (questionIndex === data.length - 1) {
			console.log({ qna })
			return endQuiz({
				totalQuestions: data.length,
				correctAnswers: correctAnswers + point,
				timeTaken,
				questionsAndAnswers: qna
			});
		}

		setCorrectAnswers(correctAnswers + point);
		setQuestionIndex(questionIndex + 1);
		setUserSlectedAns(null);
		setQuestionsAndAnswers(qna);
	};


	return (
		<div className='m-20 flex flex-col justify-center'>
			<div className='heading'>
				{he.decode(data[questionIndex].question)}
			</div>
			<div className='flex flex-col '>
				{data[questionIndex].options.map((option, i) => {
					const letter = getLetter(i);
					const decodedOption = he.decode(option);
					console.log({ decodedOption })
					return (
						<button
							className='flex justify-between items-center p-5 focus:bg-teal-200'
							value={decodedOption}
							active={userSlectedAns === decodedOption}
							onClick={event => handleItemClick(event, i)}
						>
							<span>{decodedOption}</span>
							<CheckCircleOutlineIcon className={activeIndex == i ? "icon text-teal-400 focus:black" : "icon text-gray-400 focus:black"} />
						</button>
					);

				})}
			</div>
			<div className='flex justify-center items-center'>
				<button
					className="next flex h-12 text-blue-700 justify-between items-center w-full p-1 focus:bg-teal-200"
					onClick={handleNext}
				>
					Next

				</button>
			</div>
		</div >
	);
};

Quiz.propTypes = {
	data: PropTypes.array.isRequired,
	countdownTime: PropTypes.number.isRequired,
	endQuiz: PropTypes.func.isRequired
};

export default Quiz;
