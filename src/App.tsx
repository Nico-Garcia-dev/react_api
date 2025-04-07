import { useState } from "react";
import EmployeeCard from "./components/employeeCard";

import "./App.css";

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

function App() {
	const getEmployee = () => {
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.results[0]);
			});
	};

	const [employee, setEmployee] = useState(sampleEmployee);

	return (
		<>
			<main>
				<EmployeeCard employee={employee} />
				<button type="button" onClick={getEmployee}>
					Get employee
				</button>
			</main>
		</>
	);
}

export default App;
