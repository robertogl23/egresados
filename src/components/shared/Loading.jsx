import React from "react";
import Loader from "react-loader-spinner";
const Loading = ({typeSpinner}) => {
	return (
		<div className='content-loading'>
			<Loader
				type={typeSpinner}
				color='#4e4e4e'
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</div>
	);
};

export default Loading;
