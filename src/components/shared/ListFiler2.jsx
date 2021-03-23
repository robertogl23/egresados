import React, { useContext } from "react";
import { AppContext } from "../../hooks/useContextApp";

const ListFiler2 = ({ data }) => {
	const {
		preguntas2,
		setPreguntasFilter2,
		indexEmple,
		setindexEmple,
		setSelectEmple,
        setNombreEmple,
        setCorreoeEmple,
        setTelEmple,
        setEmpresaEmple

	} = useContext(AppContext);
	function getHttp(id) {
		fetch(
			`http://localhost:4000/empleadores/datos-egresados/${id}`
		)
			.then((res) => res.json())
			.then((data) => {
                console.log(data);
                setCorreoeEmple(data.correos)
                setTelEmple(data.tel)
                setNombreEmple(data.nombre)
            });
	}
	const handleClick = (e) => {
		if (!preguntas2) {
			return setPreguntasFilter2(false);
		}
		const d =
			preguntas2[
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

		setSelectEmple(true);
		setPreguntasFilter2([d]);
		setindexEmple(elements2.id);
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

export default ListFiler2;
