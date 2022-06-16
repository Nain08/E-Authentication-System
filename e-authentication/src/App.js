import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './Components/Main';
import Login from './Components/Login';
import SignUp from './Components/Sign';
import EmailVerify from './Components/EmailVerify';
function App() {
	const user = localStorage.getItem("token");
	return (
		<>
		
		<Routes>
			{user&&<Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<SignUp />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
		</>
	);
}

export default App;
