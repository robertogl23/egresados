import React, { useContext, useEffect } from "react";
import { AppContext } from "../../hooks/useContextApp";

const ListFilter = ({ data }) => {
	const {
		preguntas,
		setPreguntasFilter,
		preguntasFilter,
		setSelectUser,
		setIndexEgresado,
		correoEgresados,
		setCorreoEgresados,
	} = useContext(AppContext);
	function getHttp(id) {
		fetch(
			`http://localhost:4000/egresados/datos-egresados/${id}`
		)
			.then((res) => res.json())
			.then((data) => {
				setCorreoEgresados(data.correos)
			});
	}
	const handleClick = (e) => {
		if (!preguntasFilter) {
			return setPreguntasFilter(false);
		}
		const d =
			preguntas[
				data.findIndex(
					(ele) => ele.trim() === e.target.innerText
				)
			];

		const elements = document.getElementsByClassName(
			"hola"
		);
		const elements2 = document.getElementById(e.target.id);
		for (e of elements) {
			e.classList.remove("hola");
		}
		elements2.classList.add("hola");

		setSelectUser(true);
		setPreguntasFilter([d]);
		setIndexEgresado(elements2.id);
		getHttp(elements2.id);
	};
	return (
		<div className='claselista'>
			<ul>
				{!data
					? "no hay información"
					: data.map((e, i) => (
							<li
								key={i}
								id={i}
								className='borderx2 dedito'
								onClick={handleClick}
							>
								<div id={i} className='cont-list'>
									{e}
								</div>
							</li>
					  ))}
			</ul>
		</div>
	);
};

export default ListFilter;
