import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { addMovie } from "../../data";

function AdminAddMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [director, setDirector] = useState("");
  const [cast, setCast] = useState("");
  const [url, setUrl] = useState("");
  const [photo, setPhoto] = useState(null);

  const token = JSON.parse(localStorage.getItem("token"));

  let cate = ["action", "comedy", "thriller", "romance"];

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("language", language);
    formData.append("director", director);
    formData.append("cast", cast);
    formData.append("url", url);
    formData.append("photo", photo);
    addMovie(formData, token).then((data) => {
      if (data.success) {
        toast.success("Movie Added", {
          autoClose: 1000,
          theme: "light",
          position: "top-center ",
        });
      }
    });
  };

  return (
    <div className="text-center  container mt-5">
      <h2 className="text-warning">ADD MOVIE</h2>
      <div className="col-md-6 offset-md-3">
        <div className="card mb-5">
          <form onSubmit={handelSubmit}>
            <div className="form-outline mb-2 p-3">
              <span className="fs-2">Title</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control border border-dark "
              />
            </div>
            <div className="form-outline mb-2 p-3">
              <span className="fs-2">Description</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control border border-dark"
                rows="4"
              ></textarea>
            </div>
            <div className="form-outline mb-2 p-2">
              <span className="fs-2">Category</span>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={"Select Category"}
              >
                <option value="select">Select Category</option>
                {cate.map((c, i) => (
                  <option value={c} key={i}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-outline mb-2 p-2">
              <span className="fs-2">Language</span>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="form-control border border-dark "
              />
            </div>
            <div className="form-outline mb-2 p-2">
              <span className="fs-2">Director</span>
              <input
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
                className="form-control border border-dark "
              />
            </div>
            <div className="form-outline mb-2 p-2">
              <span className="fs-2">Cast</span>
              <input
                type="text"
                value={cast}
                onChange={(e) => setCast(e.target.value)}
                className="form-control border border-dark "
              />
            </div>
            <div className="form-outline mb-2 p-2">
              <span className="fs-2">Url</span>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="form-control border border-dark "
              />
            </div>

            <div>
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  className="m-1  float-start"
                  width="85px"
                  alt="hjshd"
                />
              )}
            </div>
            <div className="form-outline mb-5 p-2">
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                type="file"
                className="form-control border border-dark"
                id="customFile"
              />
            </div>

            <button type="submit" className="btn btn-danger btn-lg mb-4 ">
              ADD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminAddMovie;
