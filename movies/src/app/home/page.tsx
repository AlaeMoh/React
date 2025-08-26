import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/home.css'
export default function page() {

      const movies = [
    {
      id: 1,
      title: "The Bad Guys 2",
      description:
        "The now-reformed Bad Guys are trying (very, very hard) to be good, but instead find themselves hijacked into a high-stakes, globe-trotting heist, masterminded by a new team of criminals they never saw coming: The Bad Girls.",
      rating: 7.8,
      year: 2025,
      image:
        "https://i.ytimg.com/vi/kxO6oo5gbZ4/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Guardians of the Galaxy 3",
      description:
        "Still reeling from the loss of Gamora, Peter Quill rallies his team for one final mission.",
      rating: 8.4,
      year: 2023,
      image:
        "https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
    },
  ];
  return ( 
     <div
      id="movieCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`carousel-item position-relative text-white ${
              index === 0 ? "active" : ""
            }`}
            style={{ height: "90vh" }}
          >
            {/* Background image */}
            <img
              src={movie.image}
              alt={movie.title}
              className="w-100 h-100 object-fit-cover position-absolute top-0 start-0"
            />
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)",
              }}
            ></div>

            {/* Content */}
            <div className="position-relative z-1 container h-100 d-flex flex-column justify-content-center">
              <div className="d-flex align-items-center mb-3">
                <span className="badge bg-purple me-3 px-3 py-2 fw-bold">
                  FEATURED
                </span>
                <span className="text-warning me-3 fw-semibold">
                  <i className="bi bi-star-fill"></i> {movie.rating}
                </span>
                <span className="text-light">{movie.year}</span>
              </div>

              <h1 className="display-4 fw-bold mb-3">{movie.title}</h1>

              <p className="text-light mb-4" style={{ maxWidth: "600px" }}>
                {movie.description}
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-lg btn-primary px-4 shadow">
                  <i className="bi bi-play-fill"></i> Watch Now
                </button>
                <button className="btn btn-lg btn-dark px-4 shadow">
                  <i className="bi bi-plus-lg"></i> Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#movieCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>


    </div>
//   <div id="movieCarousel" className="carousel slide" data-bs-ride="carousel">
//   <div className="carousel-inner">

//     {/* <!-- Slide 1 --> */}
//     <div className="slide1 carousel-item active position-relative text-white" >
//       {/* <!-- Background image --> */}
//       <img src="https://image.tmdb.org/t/p/original/7GbZSjYGM2qFy2RZBx1hTpn7qND.jpg" 
//            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" alt="Movie Background">
//             </img>
//       <div className="div1 position-absolute top-0 start-0 w-100 h-100" >
//       </div>

//       {/* <!-- Content --> */}
//       <div className="position-relative z-1 container h-100 d-flex flex-column justify-content-center">
//         {/* <!-- Featured + Rating + Year --> */}
//         <div className="d-flex align-items-center mb-3">
//           <span className="badge bg-purple me-3 px-3 py-2 fw-bold">FEATURED</span>
//           <span className="text-warning me-3 fw-semibold"><i className="bi bi-star-fill"></i> 7.8</span>
//           <span className="text-light">2025</span>
//         </div>

//         {/* <!-- Title --> */}
//         <h1 className="display-4 fw-bold mb-3">The Bad Guys 2</h1>

//         {/* <!-- Description --> */}
//         <p className=" description text-light mb-4" >
//           The now-reformed Bad Guys are trying (very, very hard) to be good, but
//           instead find themselves hijacked into a high-stakes, globe-trotting
//           heist, masterminded by a new team of criminals they never saw coming:
//           The Bad Girls.
//         </p>

//         {/* <!-- Buttons --> */}
//         <div className="d-flex gap-3">
//           <button className="btn btn-lg btn-primary px-4 shadow">
//             <i className="bi bi-play-fill"></i> Watch Now
//           </button>
//           <button className="btn btn-lg btn-dark px-4 shadow">
//             <i className="bi bi-plus-lg"></i> Add to Watchlist
//           </button>
//         </div>
//       </div>
//     </div>

//     {/* <!-- Slide 2 --> */}
//     <div className="slide1 carousel-item position-relative text-white" >
//       <img src="https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" 
//            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" alt="Movie Background">
//             </img>
//       <div className="div1 position-absolute top-0 start-0 w-100 h-100">
//       </div>

//       <div className="position-relative z-1 container h-100 d-flex flex-column justify-content-center">
//         <div className="d-flex align-items-center mb-3">
//           <span className="badge bg-purple me-3 px-3 py-2 fw-bold">FEATURED</span>
//           <span className="text-warning me-3 fw-semibold"><i className="bi bi-star-fill"></i> 8.4</span>
//           <span className="text-light">2023</span>
//         </div>

//         <h1 className="display-4 fw-bold mb-3">Guardians of the Galaxy 3</h1>
//         <p className="text-light mb-4">
//           Still reeling from the loss of Gamora, Peter Quill rallies his team for one final mission.
//         </p>

//         <div className="d-flex gap-3">
//           <button className="btn btn-lg btn-primary px-4 shadow">
//             <i className="bi bi-play-fill"></i> Watch Now
//           </button>
//           <button className="btn btn-lg btn-dark px-4 shadow">
//             <i className="bi bi-plus-lg"></i> Add to Watchlist
//           </button>
//         </div>
//       </div>
//     </div>

//   </div>

//   {/* <!-- Controls --> */}
//   <button className="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon"></span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
//     <span className="carousel-control-next-icon"></span>
//   </button>
// </div>
  )
}
