import React from "react";
import { AppContext } from "../hooks/useContextApp";
import AppRouter from "../router/AppRouter";

const App = () => {
	

	return (
		<div className='app'>
		
				<AppContext.Provider value={{ data:[] }}>
					<AppRouter/>
					
				
				</AppContext.Provider>
			
		</div>
	);
};

export default App;
