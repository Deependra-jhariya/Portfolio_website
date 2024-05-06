import React from "react";
import "./styles.css";
import yoga from "../../assets/yoga.webp";
import advisecube from "../../assets/advisecube.webp";
import HRMS_INFO from "../../assets/HRMS_INFO.webp";
import TMS from "../../assets/TMS.png";
import Kodie from "../../assets/Kodie.png";
const Project = () => {
  return (
    <div className="project-list">
      <div className="project-item">
        <h2>YOGA MOBILE APPLICATION</h2> {/* Project name */}
        <img src={yoga} alt="Yoga not found" />
        <p>
          {" "}
          Convenient access to yoga: Users can practice yoga from the comfort of
          their own home or any location of their choice.Flexible scheduling:
          Yoga apps allow users to practice at their own pace and fit sessions
          into their busy schedules.
        </p>{" "}
        {/* Project description */}
      </div>
      <div className="project-item">
        <h2>ADVISECUBE</h2>
        <img src={advisecube} alt="Advisecube not found" />
        <p>
          Diverse finance courses: The e-learning app offers a wide range of
          finance courses covering topics such as investment strategies,
          financial planning, accounting principles, risk management, and more.
          Interactive quizzes: Users can engage with the material through
          interactive quizzes that reinforce learning and assess understanding
          of key concepts covered in the courses.
        </p>
      </div>
      <div className="project-item">
        <h2>HRMS INFO</h2>
        <img src={HRMS_INFO} alt="HRMS not found" />
        <p>
        Centralized data management: HRMS INFO allows for the storage and management of employee data from
 multiple companies in a single, centralized system.
 Company profiles: Each company can have its own profile within the HRMS INFO, including information such
 as company name, address, contact details, and organizational structure.
 Employee database: The HRMS INFO stores comprehensive employee information, including personal
 details, job roles, departmental assignments, and employment history.
        </p>
      </div>
      <div className="project-item">
        <h2>TMS</h2>
        <img src={TMS} alt="TMS not found" />
        <p>
        Tour creation: Employees can use the Tour Management System (TMS) to create new tours, specifying
 details such as destination, duration, purpose, and budget.
 Itinerary planning: TMS facilitates the planning of tour itineraries, allowing employees to schedule activities,
 accommodations, transportation, and other logistics.
        </p>
      </div>
      <div className="project-item">
        <h2>Kodie</h2>
        <img src={Kodie} alt="Kodie not found" />
        <p>
        Kodie is a cutting-edge mobile app developed to address the challenges faced by property owners, tenants,
 and contractors in managing rental properties efficiently. It is built on the premise of making property
 management more accessible, collaborative, and streamlined. Whether you are an individual property owner,
 a tenant seeking the perfect rental, or a contractor offering services, Kodie is designed to cater to your
 unique needs.
        </p>
      </div>
    </div>
  );
};
export default Project;
