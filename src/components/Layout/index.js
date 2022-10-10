import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const Layout = ({ children }) => {
	return (
		<div className='pt-15 p-10 flex items-center justify-center'>
			{children}
		</div>
	);
};

Layout.propTypes = {
	children: PropTypes.node
};

export default Layout;
