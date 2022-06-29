import { Route,Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/Sign';
import Header from './Components/Header';
import Main from './Components/Main';
import EmailVerify from './Components/EmailVerify';

function App() {
	const user = localStorage.getItem("token");

	return (
			<>
			<Routes>
				{user&&<Route path="/" exact element={<><Header /> <Main /></>} />}
				<Route path="/" exact element={<> <Header /><Home /> </>} />
				<Route path="/signup" exact element={<><Header /> <SignUp /></>} />
				<Route path="/login" exact element={<><Header /> <Login /></>} />
				<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
			</Routes>
			</>
			);
}

			export default App;
