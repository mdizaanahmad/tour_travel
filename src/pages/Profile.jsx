import { useAuth } from '../context/AuthContext';
import '../styles/Profile.css';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="profile-page"><p>Please log in to view your profile.</p></div>;
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <h1>My Profile</h1>
        <div className="profile-card">
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Member Since:</strong> 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
