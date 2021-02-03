import React from "react";
import loading from "../../img/LOGO_TESI.png";
const Loading = () => {
	return (
		<div className='content-loading'>
			<div>
				<img
					className='loading-icon'
					src={loading}
					alt='loading'
				/>
			</div>
			<div>
				<span className="title-loadding">Sistema de Egresados y Empleadores</span>
			</div>
			
		</div>
	);
};

export default Loading;
