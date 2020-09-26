import Axios from 'axios'
// import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import React from 'react'

export default class Login extends React.Component {
	render() {
		return (<div>
			<p>Please wait...</p>
		</div>
		)
	}
	
	async componentDidMount() {
		const response = await Axios.get('/api/login').catch((error) => {
			alert(error)
			window.location.replace('/error')
		})
		window.location.replace(response.data.url)
	}
}
