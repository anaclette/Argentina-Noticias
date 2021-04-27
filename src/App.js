import React, { useState, useEffect } from 'react';
import Card from './components/UpdateCard';
// import Logo from './components/Logo'
import './components/assets/Logo.scss';
import LogoImg from './components/assets/Argentina_Logo.png';
import './App.css';
import './components/UpdateCard.scss';


const App = () => {
	const [ news, setNews ] = useState([]);

	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=ar&apiKey=f7bf0c1fb67a4ba7bee83979f5c511b3`)
			.then((res) => res.json())
			.then((data) => {
				setNews(data.articles);
			});
	}, []);

	return (
		<>
		{/* <Logo  /> */}
		<div className="Logo">
 			<img src={LogoImg} alt="Logo" />
 		</div>
		<div className="App">
			{news.map((update) => <Card update={update} key={update.title} />)}
		</div>
		</>
	);
};

export default App;
