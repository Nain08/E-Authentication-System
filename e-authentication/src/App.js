import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/Sign';
function App() {
	const user = localStorage.getItem("token");
	return (
		<>
		
		<Routes>
			{user&&<Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</>
	);
}

export default App;
