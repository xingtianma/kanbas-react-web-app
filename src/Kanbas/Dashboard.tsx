import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home"
              >
                <img src="/images/reactjs.jpg" width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2500/Home"
            >
              <img src="/images/fundies1.jpeg" alt="fundies1" width={200} />
              <div>
                <h5>CS2500</h5>
                <p className="wd-dashboard-course-title">
                  Fundamentals of Computer Science 1
                </p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/2510/Home"
            >
              <img src="/images/fundies2.jpeg" alt="fundies2" width={200} />
              <div>
                <h5>CS2510</h5>
                <p className="wd-dashboard-course-title">
                  Fundamentals of Computer Science 2
                </p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3500/Home"
            >
              <img src="/images/ood.jpeg" alt="ood" width={200} />
              <div>
                <h5>CS3500</h5>
                <p className="wd-dashboard-course-title">
                  Object Oriented Design
                </p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3000/Home"
            >
              <img src="/images/algo.jpeg" alt="algo" width={200} />
              <div>
                <h5>CS3000</h5>
                <p className="wd-dashboard-course-title">Algorithms</p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3650/Home"
            >
              <img src="/images/compsys.jpeg" alt="compsys" width={200} />
              <div>
                <h5>CS3650</h5>
                <p className="wd-dashboard-course-title">Computer Systems</p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/3800/Home"
            >
              <img src="/images/theory.png" alt="theory" width={200} />
              <div>
                <h5>CS3800</h5>
                <p className="wd-dashboard-course-title">
                  Theory of Computation
                </p>
                <button> Go </button>
              </div>
            </Link>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <Link
              className="wd-dashboard-course-link"
              to="/Kanbas/Courses/4550/Home"
            >
              <img src="/images/webdev.png" alt="webdev" width={200} />
              <div>
                <h5>CS4550</h5>
                <p className="wd-dashboard-course-title">Web Development</p>
                <button> Go </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
