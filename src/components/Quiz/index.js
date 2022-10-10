import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CheckIcon from '@mui/icons-material/Check';
import he from 'he';
import "./quiz.css";

const Quiz = ({ data, endQuiz }) => {


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
		<div key={questionIndex} className='prose max-w-md fadeIn w-full flex flex-col justify-center'>
			<h3 className='whitespace-pre-line leading-snug'>
				{data[questionIndex].question}
			</h3>
			<p className='whitespace-pre-line text-gray-400 text-xs'>
				{data[questionIndex].subQuestion}
			</p>
			<div className='flex flex-col '>
				{data[questionIndex].options.map((option, i) => {
					const decodedOption = he.decode(option);
					console.log({ decodedOption })
					return (
						<button
							className={`option flex justify-between items-center p-5 ${activeIndex === i ? "bg-purple-200" : ''}`}
							value={decodedOption}
							active={userSlectedAns === decodedOption}
							onClick={event => handleItemClick(event, i)}
						>
							<span className='font-semibold'>{decodedOption}</span>
							<CheckIcon
								className={`icon rounded-full text-xs text-white  ${activeIndex === i ? "bg-purple-700" : 'bg-gray-300'}`}
							/>
						</button>
					);

				})}
			</div>
			<button
				className="h-10 mt-20 text-sm rounded-md text-white bg-purple-700"
				onClick={handleNext}
			>
				다음

			</button>
		</div >
	);
};

Quiz.propTypes = {
	data: PropTypes.array.isRequired,
	endQuiz: PropTypes.func.isRequired
};

export default Quiz;
