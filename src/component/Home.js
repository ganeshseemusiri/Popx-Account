import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <h2 className="heading">Account Settings</h2>
       <div className="profile-bg-container">
         <div className="profile-container">
          <img className="profile"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
          />
          <div>
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="home-text">
          Lorem ipsum dolor sit amet, consectetur Sadipscing Elitr.
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        <hr  class="dotted-line"/>
      </div>
      
       </div>
       
    </div>
  );
}

export default Home;