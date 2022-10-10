import React from 'react';
import "./finalloader.css";

const FinalLoader = () => {
	return (
		<div className='prose flex flex-col justify-center items-center'>
			<h3 className='whitespace-pre-line'>
				결과를 분석하고 있습니다.
			</h3>
			<h6>
				잠시만 기다려 주세요</h6>
			<div className="pt-10 lds-ring flex items-center justify-center">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>

	);
};

export default FinalLoader;
