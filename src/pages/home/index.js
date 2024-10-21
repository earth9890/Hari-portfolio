import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

// Array of images for random selection
const imageArray = [
	"https://cdn-std.droplr.net/files/acc_1332117/Lzox86",
	"https://cdn-std.droplr.net/files/acc_1332117/l0YCgL",
	"https://cdn-std.droplr.net/files/acc_1332117/RAxMtm",
	"https://cdn-std.droplr.net/files/acc_1332117/pl6Usn",
	"https://cdn-std.droplr.net/files/acc_1332117/dWX5r2",
	"https://cdn-std.droplr.net/files/acc_1332117/G6NfN0",
	"https://cdn-std.droplr.net/files/acc_1332117/KHoSXW",
	"https://cdn-std.droplr.net/files/acc_1332117/fPkhcr"
];

// Function to select a random image from the array
const getRandomImage = () => {
	const randomIndex = Math.floor(Math.random() * imageArray.length);
	return imageArray[randomIndex];
};

export const Home = () => {
	// State to store the current image URL
	const [currentImage, setCurrentImage] = useState(getRandomImage());

	// Function to change the image without reloading the page
	const changeImage = () => {
		setCurrentImage(getRandomImage());
	};

	return (
		<HelmetProvider>
			<section id="home" className="home">
				<Helmet>
					<meta charSet="utf-8" />
					<title>{meta.title}</title>
					<meta name="description" content={meta.description} />
				</Helmet>
				<div className="intro_sec d-block d-lg-flex align-items-center">
					<div
						className="h_bg-image order-1 order-lg-2 h-100 position-relative"
						style={{ backgroundImage: `url(${currentImage})` }}
					>
						{/* Button to change the image */}
						<button className="reload-btn" onClick={changeImage}>
							Click here to see more photos
						</button>
					</div>
					<div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
						<div className="align-self-center ">
							<div className="intro mx-auto">
								<h2 className="mb-1x">{introdata.title}</h2>
								<h1 className="fluidz-48 mb-1x">
									<Typewriter
										options={{
											strings: [
												introdata.animated.first,
												introdata.animated.second,
												introdata.animated.third,
											],
											autoStart: true,
											loop: true,
											deleteSpeed: 10,
										}}
									/>
								</h1>
								<p className="mb-1x">{introdata.description}</p>
								<div className="intro_btn-action pb-5">
									<Link to="/portfolio" className="text_2">
										<div id="button_p" className="ac_btn btn">
											My Portfolio
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
									<Link to="/profiles">
										<div id="button_profile" className="ac_btn btn">
											Coding Profiles
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
									<a
										href="https://drive.google.com/file/d/1lJVqg5WczCMlBAiNURTAAUgdZ_v07meu/view?usp=sharing"
										target="_new"
										rel="noopener noreferrer"
									>
										<div id="button_r" className="ac_btn btn">
											Resume
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</a>
									<Link to="/about">
										<div id="button_about" className="ac_btn btn">
											About
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
									<Link to="/contact">
										<div id="button_contact" className="ac_btn btn">
											Contact Me
											<div className="ring one"></div>
											<div className="ring two"></div>
											<div className="ring three"></div>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</HelmetProvider>
	);
};
