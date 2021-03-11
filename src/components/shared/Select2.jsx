import React from 'react'

const Select2 = () => {
    const { preguntas2, setPreguntasFilter2, indexEmple , setindexEmple} = useContext(
		AppContext
	);
	function getHttp(i) {
		
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
    }

export default Select2
