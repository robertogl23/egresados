import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../hooks/useContextApp";
const Select1Styled = styled.select`
	width: 85%;
`;
const Select1 = ({ options }) => {
	const { setPreguntasFilter, setLoading,setPreguntas,indexEgresado} = useContext(
		AppContext
	);
	function getHttp(i) {
		setLoading(true);
		fetch(`http://localhost:4000/egresados/respuesta/${i}`)
			.then((res) => res.json())
			.then((data) => {
				setPreguntas(data.data)
				setPreguntasFilter([data.data[indexEgresado]]);
                setLoading(false)
				console.log(data.data[0]);
			});
	}
	function handleChange(e) {
		getHttp(e.target.value);
	}

	useEffect(() => {
		getHttp(0)
	}, [setPreguntas,setPreguntasFilter,setLoading])

	return (
		<Select1Styled onChange={handleChange}>
			{!options
				? "no hay opciones"
				: options.map((e, i) => (
						<option key={i} value={i}>
							{e}
						</option>
				  ))}
		</Select1Styled>
	);
};

export default Select1;
