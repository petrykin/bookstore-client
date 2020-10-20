import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => (
	<div>
		<h1>Dashboard</h1>
		<p>This is the dashboard</p>

		<Link to="/posts" className="button">
			View Posts
		</Link>
	</div>
)

export default DashboardPage;