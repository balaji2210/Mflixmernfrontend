import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { deleteMovie, isAuthenticated } from "../../data";

function AdminListGroup({ movies, setReload }) {
  const history = useHistory();

  const token = JSON.parse(localStorage.getItem("token"));
  const auth = isAuthenticated();
  const user = JSON.parse(localStorage.getItem("user"));

  const deleteAMovie = (id) => {
    deleteMovie(id, token).then((data) => {
      if (data.success) {
        toast.success(data.message, {
          position: "top-center",
          theme: "light",
          autoClose: 1000,
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
        <div className="list-group mb-5">
          {movies &&
            movies.map((movie, i) => (
              <div key={i} className="list-group-item list-group-item-action ">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{movie.title}</h5>
                </div>
                <img
                  alt="sjshdj"
                  width="80px"
                  className="img-fluid"
                  src={movie.photo.secure_url}
                />
                <span className="col-md-6 offset-6">
                  <i
                    style={{ cursor: "pointer" }}
                    className="fas fa-edit  fa-2x"
                    onClick={() => {
                      history.push(`/admin/movie/edit/${movie._id}`);
                    }}
                  ></i>
                </span>
                <span className="float-end">
                  <i
                    style={{ cursor: "pointer" }}
                    className="fas fa-trash  fa-2x"
                    onClick={() => {
                      deleteAMovie(movie._id);
                    }}
                  ></i>
                </span>
              </div>
            ))}
        </div>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default AdminListGroup;
