import React,{useState} from "react";
import { AppContext } from "../hooks/useContextApp";
import AppRouter from "../router/AppRouter";

const App = () => {
	
	const [preguntasFilter, setPreguntasFilter] = useState([])
	const [loading, setLoading] = useState(false)
	const [indexEgresado, setIndexEgresado] = useState()
	const [preguntas, setPreguntas] = useState([null])
	const [preguntas2, setPreguntas2] = useState([null])
	const [preguntasFilter2,setPreguntasFilter2] = useState([])
	const [selectUser, setSelectUser] = useState(false)
	const [indexEmple, setindexEmple] = useState ()
	

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
					setSelectUser,
					preguntas2,
					setPreguntasFilter2,
					indexEmple,
					setindexEmple,

				 }}>
					<AppRouter/>
					
				
				</AppContext.Provider>
			
		</div>
	);
};

export default App;
