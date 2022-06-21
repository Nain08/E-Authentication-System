import { Route, Router, Navigate, Switch, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';
import SignUp from './Components/Sign';
import Header from './Components/Sign/Header';
function App() {
	const user = localStorage.getItem("token");

	return (
			<>
			<Routes>
    <Route path="/" exact element={<> <Header /><Home /> </>} />
    <Route path="/signup" exact element={<><Header /> <SignUp /></>} />
    <Route path="/login" exact element={<><Header /> <Login /></>} />
</Routes>
			</>
			);
}

			export default App;
