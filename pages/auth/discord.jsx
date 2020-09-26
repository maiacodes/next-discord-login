import Axios from 'axios'
import { withRouter } from 'next/router'
import React from 'react'


export class DiscordAuth extends React.Component {
    constructor(props) {
        super(props);
    }
    
	render() {
		return (<div>
			<p>Please wait...</p>
		</div>
		)
	}
	
	async componentDidMount() {
        const router = this.props.router
        const reqCode = router.query.code
		const response = await Axios.post('/api/auth', {
            service: 'discord',
            code: reqCode
        }).catch((error) => {
            alert(error)
            return
        })
		window.location.replace(response.data.redirect_to)
    }
}

// Prevents Next from hydrating the page, meaning that we can use the 'query' object.
export async function getServerSideProps(content) {
    return {props: {}}  
}


export default withRouter(DiscordAuth);