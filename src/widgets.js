import React from "react";
import "./widgets.css";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";

import SearchIcon from "@material-ui/icons/Search";

function Widgets(){
	return(
		<div className="widgets">
			<div className="widgets_input">
				<SearchIcon className="widgets_searchIcon"/>
				<input placeholder="Search Twitter" type="text"/>
			</div>

			<div className="widgets_widgetContainer">
				<h2>What's happening</h2>

				<TwitterTweetEmbed tweetId={"1509191720747085824"}/>
				<TwitterTimelineEmbed sourceType="profile"
				 screenName="NetflixIndia"
				 options= {{ height : 400 }}/>

				<TwitterShareButton
				url={"https://instagram.com/kartxkanand"}
				options={{ text: '#hello there'}}/>
			</div>


		</div>
	)
}

export default Widgets;