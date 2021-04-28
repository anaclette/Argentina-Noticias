import React, { useState, useEffect } from 'react';
import Card from './components/UpdateCard';
import Logo from './components/Logo';
import SearchInput from './components/SearchInput';
import LogoImg from './components/assets/Argentina_Logo.png';
import './App.css';
import './components/assets/Logo.scss';
import './components/UpdateCard.scss';
import './components/SearchInput.scss';

const App = () => {
	const [ news, setNews ] = useState([]);
	const [ value, setValue ] = useState('');
	const [ search, setSearch ] = useState(0);

	useEffect(
		() => {
			fetch(`https://newsapi.org/v2/top-headlines?${!search ? 'country=ar&' : 'q=' + search}
apiKey=f7bf0c1fb67a4ba7bee83979f5c511b3`)
				.then((res) => res.json())
				.then((data) => {
					setNews(data.articles);
				});
		},
		[ search ]
	);

	const handleChange = (e) => {
		setValue(e.target.value);
	};
	const handleClick = () => {
		setSearch(search + 1);
	};

	return (
		<div>
			<div className="Header">
				<Logo logo={LogoImg} />
				<SearchInput handleChange={handleChange} value={value} handleClick={handleClick} />
			</div>
			<div className="App">{news.map((update) => <Card update={update} key={update.title} />)}</div>
		</div>
	);
};

export default App;
