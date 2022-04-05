import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

import { toast } from "react-toastify";
import {
	getABanners,
	updateABanners,
	isAuthenticated,
	deleteABanners,
	createABanner,
} from "../../data";

function AdminBanners() {
	const [banners, setBanners] = useState([]);
	const [reload, setReload] = useState(false);
	const [photo, setPhoto] = useState(null);

	const history = useHistory();
	const token = JSON.parse(localStorage.getItem("token"));
	const user = JSON.parse(localStorage.getItem("user"));
	const auth = isAuthenticated();

	useEffect(() => {
		getABanners().then((data) => {
			setBanners(data.banners);
		});
	}, [reload]);

	const createBanner = () => {
		const formData = new FormData();

		formData.append("photo", photo);
		if (photo !== null) {
			createABanner(formData, token).then((data) => {
				if (data.success) {
					toast.success("Banner Added", {
						position: "top-center",
						autoClose: 1000,
						theme: "light",
					});
					setReload(true);
				}
				setTimeout(() => {
					setReload(false);
				}, 1000);
			});
		} else {
			toast.error("Add Banner", {
				position: "top-center",
				theme: "colored",
				autoClose: 1000,
			});
		}
	};

	const updateBanner = (id) => {
		updateABanners(id, token).then((data) => {
			if (data.success) {
				toast.success("updated status", {
					position: "top-center",
					autoClose: 1000,
					theme: "light",
				});
				setReload(true);
			}
			setTimeout(() => {
				setReload(false);
			}, 1000);
		});
	};

	const deleteBanner = (id) => {
		deleteABanners(id, token).then((data) => {
			if (data.success) {
				toast.success(data.message, {
					position: "top-center",
					autoClose: 1000,
					theme: "light",
				});
				setReload(true);
			}
			setTimeout(() => {
				setReload(false);
			}, 1000);
		});
	};

	return (
		<>
			{auth && user.role === "admin" ? (
				<div className="container">
					<button
						data-mdb-toggle="modal"
						data-mdb-target="#exampleModal"
						className="btn btn-danger btn-sm  float-end ms-2"
					>
						Add Banner
					</button>
					<div className="card">
						<div className="list-group">
							{banners.length !== 0 &&
								banners.map((banner, i) => (
									<div
										key={i}
										className="list-group-item list-group-item-action "
									>
										<div className="d-flex w-100 justify-content-between">
											<img
												src={banner.photo.secure_url}
												width="150px"
												alt="bannerimage"
											/>
											<span
												className={
													banner.is_featured ===
													"true"
														? "badge  badge-success rounded-pill h-25 m-2"
														: "badge  badge-danger rounded-pill h-25 m-2"
												}
											>
												{banner.is_featured}
											</span>

											<span
												type="button"
												className="btn btn-link btn-rounded btn-sm fw-bold h-25 m-2"
												onClick={() => {
													updateBanner(banner._id);
												}}
											>
												Update
											</span>

											<span className="">
												<i
													style={{
														cursor: "pointer",
													}}
													className="fas fa-trash  fa-1x"
													onClick={() => {
														deleteBanner(
															banner._id
														);
													}}
												></i>
											</span>
										</div>
									</div>
								))}
						</div>
					</div>

					<div
						className="modal fade"
						id="exampleModal"
						aria-labelledby="exampleModalLabel"
						aria-hidden="true"
					>
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5
										className="modal-title"
										id="exampleModalLabel"
									>
										Add Banner
									</h5>
									<button
										type="button"
										className="btn-close"
										data-mdb-dismiss="modal"
										aria-label="Close"
									></button>
								</div>
								<div className="modal-body">
									{photo !== null ? (
										<img
											src={URL.createObjectURL(photo)}
											width="100px"
											className="m-2"
											alt="bannerimage"
										/>
									) : (
										""
									)}
									<input
										type="file"
										className="form-control"
										id="customFile"
										onChange={(e) =>
											setPhoto(e.target.files[0])
										}
									/>
								</div>
								<div className="modal-footer">
									<button
										type="button"
										className="btn btn-primary"
										data-mdb-dismiss="modal"
									>
										Close
									</button>
									<button
										type="button"
										className="btn btn-success"
										onClick={createBanner}
										data-mdb-dismiss="modal"
									>
										Add
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				history.push("/")
			)}
		</>
	);
}

export default AdminBanners;
