import React from "react";
import useSWR from "swr";
import PieChart from "../charts/PieChart";
import { Box } from "../grid/Box";
import { Grid } from "../grid/Grid";
import Card from "../shared/Card";
import BarChart from "../charts/BarChart";
import Loading from "../shared/Loading";
const fetcher = (...args) =>
	fetch(...args).then((res) => res.json());
const GridDashBoard2 = () => {
	const { data, error } = useSWR(
		"http://localhost:4000/empleadores/data/dashboard",
		fetcher
	);
	if (error) return <div>failed to load</div>;
	if (!data) return <Loading typeSpinner={"Grid"} />;
	return (
		<Grid columns={6} rows={2}>
			
           
		</Grid>
		
	);
};

export default GridDashBoard2;