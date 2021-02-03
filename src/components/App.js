import React,{useState,useEffect} from "react";
import useSWR from "swr";
import Home from "../pages/Home";
import Header from "./header/Header";
import { AppContext } from "../hooks/useContextApp";
import Loading from "./shared/Loading";
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const App = () => {
	const { data, error } = useSWR(
		"http://localhost:4000/egresados/data",
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data) return <Loading/>;
	return (
		<div className='app'>
			<AppContext.Provider value={{data}}>
				<Header />
				<Home />
			</AppContext.Provider>
		</div>
	);
};

export default App;
