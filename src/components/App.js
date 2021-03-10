import React,{useState} from "react";
import { AppContext } from "../hooks/useContextApp";
import AppRouter from "../router/AppRouter";

const App = () => {
	
	const [preguntasFilter, setPreguntasFilter] = useState([])
	const [loading, setLoading] = useState(false)
	const [indexEgresado, setIndexEgresado] = useState()
	const [preguntas, setPreguntas] = useState([null])
	const [selectUser, setSelectUser] = useState(false)
	return (
		<div className='app'>
		
				<AppContext.Provider value={{
					preguntasFilter,
					setPreguntasFilter,
					loading,
					setLoading,
					indexEgresado,
					setIndexEgresado,
					preguntas,
					setPreguntas,
					selectUser,
					setSelectUser
				 }}>
					<AppRouter/>
					
				
				</AppContext.Provider>
			
		</div>
	);
};

export default App;
