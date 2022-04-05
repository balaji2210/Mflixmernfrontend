import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getBanners } from "../data";

import "./Banner.css";

function Banner() {
	const [banners, setBanner] = useState([]);

	useEffect(() => {
		getBanners().then((data) => {
			setBanner(data.banners);
		});
	}, []);

	// console.log(banners);

	return (
		<>
			<div className="container-fluid banner">
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-mdb-ride="carousel"
					data-mdb-interval="2000"
				>
					<div className="carousel-inner shadow-5">
						{banners &&
							banners.map((banner, i) => (
								<div
									className={`carousel-item ${
										i === 0 ? "active" : ""
									} `}
									key={i}
								>
									<img
										src={banner.photo.secure_url}
										className="d-block w-100  rounded carousel"
										alt="Wild Landscape"
									/>
								</div>
							))}
					</div>
					<button
						className="carousel-control-prev"
						type="button"
						data-mdb-target="#carouselExampleControls"
						data-mdb-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-mdb-target="#carouselExampleControls"
						data-mdb-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default Banner;
