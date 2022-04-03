import React, {useState} from "react";
import "./tweetbox.css";
import {Avatar, Button} from "@material-ui/core";
import db from "./firebase";

function TweetBox(){
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = e => {
		e.preventDefault();

		db.collection('posts').add({
			displayName: 'qzi',
			username: 'qazihere',
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar: '#'
		});

		setTweetMessage("");
		setTweetImage("");
	};

	return(
		<div className="tweetbox">
		<form>
			<div className="tweetbox_input">
				<Avatar src="https://avatars.alphacoders.com/avatars/view/184197"/>
				<input 
				onChange = {(e) => setTweetMessage(e.target.value)}
				value={tweetMessage} placeholder="What's happening?"/>
			</div>
			<input className="tweetboximageinput"
			onChange={e => setTweetImage(e.target.value)}
			 placeholder="Optional: Enter the image URL"
			 type="text"/>
			<Button onClick={sendTweet} type="submit" className="tweetboxbutton">Tweet</Button>
		</form>
		</div>
		)
}

export default TweetBox;