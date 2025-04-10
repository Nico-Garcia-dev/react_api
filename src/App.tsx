import { useEffect, useState } from "react";
import EmployeeCard from "./components/employeeCard";

import "./App.css";

function App() {
	const [employee, setEmployee] = useState(null);

	useEffect(() => {
		fetch("http://localhost:3310/api/employees")
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
				setEmployee(data.message[0]);
			});
	}, []);

	return (
		<>
			<main>
				{employee ? <EmployeeCard employee={employee} /> : <p>Loading...</p>}
			</main>
		</>
	);
}

export default App;
