import React from "react";
import "./Home.css";
// import profile from '../../assets/profile1.jpg'

const Home = () => {
  return (
    <div className="home  " id="home">
      <section class=" text-dark p-5 p-lg-3 pt-lg-5  text-sm-start ">
        <div class="container ">
          <div className="row ">
            <div className="grid ">
              <div class="col-md-5 pt-5 ">
                <div className="">
                  <h1 className="fw-bold">
                    Hello I am
                    <span class="text-warning fw-bold"> Mobile Developer </span>
                  </h1>
                  <p class="lead my-4 text-dark fw-bold">
                    I am using programming languages and development skills to
                    create, test, and develop applications on mobile devices
                  </p>
                  <button
                    class="btn btn-warning btn-lg mb-2"
                    data-bs-toggle="modal"
                    data-bs-target="#enroll"
                  >
                   Get Started
                  </button>
                </div>
                {/* <img
                  class="img-fluid    "
                  src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="profile"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

// <section
//       class="bg- text-dark p-5 p-lg-3 pt-lg-5 text-center text-sm-start"
//     >
//       <div class="container">
//         <div className='row '>
//             <div className='grid'>
//             <div class="d-sm-flex align-items-center justify-content-between ">
//           <div>
//             <h1>Hello I am <span class="text-warning"> Mobile Developer </span></h1>
//             <p class="lead my-4">
//               We focus on teaching our students the fundamentals of the latest
//               and greatest technologies to prepare them for their first dev role
//             </p>
//             <button
//               class="btn btn-primary btn-lg"
//               data-bs-toggle="modal"
//               data-bs-target="#enroll"
//             >
//               Start The Enrollment
//             </button>
//           </div>
//           <img style={{height:"500px"}}
//             class="img-fluid w-50   rounded  "
//             src="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=600" alt='profile'
//             />
//         </div>
//             </div>

//         </div>

//       </div>
//     </section>
