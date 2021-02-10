import React,{useContext} from "react";
import { AppContext } from "../../hooks/useContextApp";

const ListFilter = ({ data }) => {
    const { preguntas,setPreguntasFilter,preguntasFilter, setSelectUser,setIndexEgresado } = useContext(
		AppContext
	);
    const handleClick = (e) => {
		if(!preguntasFilter){
			return setPreguntasFilter(false)

		}
        const d = preguntas[data.findIndex( ele => ele.trim() === e.target.innerText)]
		setSelectUser(true)
        setPreguntasFilter([d])
        setIndexEgresado(data.findIndex( ele => ele.trim() === e.target.innerText))
    }
	return (
		<div className='claselista'>
			<ul>
				{!data
					? "no hay información"
					: data.map((e, i) => (
							<li key={i} id={i}  className='borderx2 dedito' onClick={handleClick}>
								<div className='cont-list'>{e}</div>
							</li>
					  ))}
			</ul>
		</div>
	);
};



export default ListFilter;
