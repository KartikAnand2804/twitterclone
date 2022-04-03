import React from 'react';
import './sidebaroptions.css';

function SidebarOption({active, text, Icon}) {
	return(	

		<div className={`sidebarOptions ${active && 'sidebarOption--active'}`}>
		
		<Icon/>
		<h2>{text}</h2>


		</div>
	);
}

export default SidebarOption;