import React, { useState } from 'react';

import Layout from '../Layout';
import Loader from '../Loader';
import FinalLoader from '../FinalLoader';

import Main from '../Main';
import Quiz from '../Quiz';
import Result from '../Result';

import { shuffle } from '../../utils';
import { Fragment } from 'react';

const App = () => {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [countdownTime, setCountdownTime] = useState(null);
	const [isQuizStarted, setIsQuizStarted] = useState(false);
	const [isQuizCompleted, setIsQuizCompleted] = useState(false);
	const [resultData, setResultData] = useState(null);

	const startQuiz = (data, countdownTime) => {
		setLoading(true);
		setCountdownTime(countdownTime);

		setTimeout(() => {
			setData(data);
			setIsQuizStarted(true);
			setLoading(false);
		}, 1000);
	};

	const endQuiz = resultData => {
		setLoading(true);
		setIsQuizCompleted(true);
		setTimeout(() => {
			setIsQuizStarted(false);

			setResultData(resultData);
			setLoading(false);
		}, 5000);
	};

	const replayQuiz = () => {
		setLoading(true);

		const shuffledData = shuffle(data);
		shuffledData.forEach(element => {
			element.options = shuffle(element.options);
		});

		setData(shuffledData);

		setTimeout(() => {
			setIsQuizStarted(true);
			setIsQuizCompleted(false);
			setResultData(null);
			setLoading(false);
		}, 1000);
	};

	const resetQuiz = () => {
		setLoading(true);

		setTimeout(() => {
			setData(null);
			setCountdownTime(null);
			setIsQuizStarted(false);
			setIsQuizCompleted(false);
			setResultData(null);
			setLoading(false);
		}, 1000);
	};

	return (
		<Layout>
			{loading && !isQuizCompleted && <Loader />}
			{loading && isQuizCompleted && <FinalLoader />}
			{!loading && !isQuizStarted && !isQuizCompleted && (
				<Main startQuiz={startQuiz} />
			)}
			{!loading && isQuizStarted && (
				<Quiz data={data} countdownTime={countdownTime} endQuiz={endQuiz} />
			)}
			{!loading && isQuizCompleted && (
				<Result {...resultData} replayQuiz={replayQuiz} resetQuiz={resetQuiz} />
			)}
		</Layout>
	);
};

export default App;
