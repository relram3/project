import React, { Component } from "react";
import "../styles/profile.css";
import profileImage from "../imgs/Bayarjargal_Sereenen.png";

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <h1 className="profile-title">ATTORNEY PROFILE</h1>
        <div className="profile-content">
          <div className="profile-text">
            <p className="profile-paragraph">
              Attorney Sereenen has been practicing in Immigration & Asylum Law,
              Criminal Defense & Expungement, DUI/Traffic & Divorce areas, since
              he graduated Southern Illinois School of Law. While he was a
              candidate of Juris Doctorate, he emphasized his legal study on
              Immigration Law and International Law areas. Also, he focused on
              Patent Law, as a former electrical engineer. He earned his
              Bachelor of Science in Electrical Engineering with highest honor
              of the school he graduated. Mr. Sereenen also enjoys his solid
              background and success in business sector. He worked as a CEO
              successfully in a mining company in Mongolia for several years,
              before he settled down in USA. While Mr. Sereenen was in the law
              school, he successfully published his academic article in Illinois
              Bar Association’s “Globe” magazine, in Immigration Law. Also, he
              was selected one of the 2 winners of a prestigious scholarship
              award in Patent Law, in his senior year in the law school.
            </p>
          </div>
          <img
            src={profileImage}
            alt="ProfileImage"
            className="profile-image"
          />
        </div>
      </div>
    );
  }
}

export default Profile;
