export const getBanners = () => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/banners/trending`, {
		method: "GET",
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const getActionMovies = () => {
	return fetch(
		`https://mflix2210.herokuapp.com/api/v1/movie?category=action`,
		{
			method: "GET",
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getComedyMovies = () => {
	return fetch(
		`https://mflix2210.herokuapp.com/api/v1/movie?category=comedy`,
		{
			method: "GET",
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getThrillerMovies = () => {
	return fetch(
		`https://mflix2210.herokuapp.com/api/v1/movie?category=thriller`,
		{
			method: "GET",
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};
export const getRomanticMovies = () => {
	return fetch(
		`https://mflix2210.herokuapp.com/api/v1/movie?category=romantic`,
		{
			method: "GET",
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const getAMovie = (id) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/movie/${id}`, {
		method: "GET",
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const search = (id) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/movies?search=${id}`, {
		method: "GET",
	})
		.then((res) => res.json())
		.catch((err) => console.log(err));
};

export const signin = (data) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/signin`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const addMovie = (data, token) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/create/movie`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const updateMovie = (data, token, id) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/movie/update/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const deleteMovie = (id, token) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/movie/delete/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const signout = () => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/logout`, {
		method: "GET",
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};

export const isAuthenticated = () => {
	if (typeof window == "undefined") {
		return false;
	}
	if (localStorage.getItem("user")) {
		return true;
	} else {
		return false;
	}
};

export const getABanners = () => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/banners`, {
		method: "GET",
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
export const updateABanners = (id, token) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/banner/update/${id}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
export const deleteABanners = (id, token) => {
	return fetch(
		`https://mflix2210.herokuapp.com/api/v1/banner/delete?id=${id}`,
		{
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
export const createABanner = (data, token) => {
	return fetch(`https://mflix2210.herokuapp.com/api/v1/banner/create`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => console.log(err));
};
