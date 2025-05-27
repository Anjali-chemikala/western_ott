import React, { useState, useRef } from 'react';
import { 
  FaUser, 
  FaUserPlus, 
  FaCog, 
  FaGem, 
  FaSignOutAlt, 
  FaHistory, 
  FaDownload, 
  FaEdit, 
  FaTrash,
 
} from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.scss';
import Navbar from '../pages/Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const MAX_PROFILES = 5;

const ProfileMenu = () => {
  const [profiles, setProfiles] = useState([{ name: 'Anjali', isActive: true }]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProfileName, setNewProfileName] = useState('');
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleAddProfile = () => {
    if (!newProfileName.trim()) {
      toast.error('Profile name cannot be empty!');
      return;
    }

    const exists = profiles.some(p => p.name.toLowerCase() === newProfileName.toLowerCase());
    if (exists) {
      toast.error('Profile already exists!');
      return;
    }

    if (profiles.length >= MAX_PROFILES) {
      toast.warn('You can only add up to 5 profiles.');
      return;
    }

    const newProfile = { name: newProfileName.trim(), isActive: false };
    setProfiles([...profiles, newProfile]);
    toast.success('Profile added!');
    setNewProfileName('');
    setShowAddModal(false);
  };

  const handleEdit = (index) => {
    const newName = prompt('Edit profile name:', profiles[index].name);
    if (!newName) return;

    const exists = profiles.some((p, i) => i !== index && p.name.toLowerCase() === newName.toLowerCase());
    if (exists) {
      toast.error('Another profile with this name already exists!');
      return;
    }

    const updatedProfiles = [...profiles];
    updatedProfiles[index].name = newName;
    setProfiles(updatedProfiles);
    toast.success('Profile updated!');
  };

  const handleDelete = (index) => {
    const updated = profiles.filter((_, i) => i !== index);
    setProfiles(updated);
    toast.info('Profile deleted!');
  };

  const setActive = (index) => {
    const updated = profiles.map((p, i) => ({
      ...p,
      isActive: i === index,
    }));
    setProfiles(updated);
  };

  const MenuItem = ({ icon, label, onClick }) => (
    <div className="menu-item" onClick={onClick} style={{ cursor: 'pointer' }}>
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </div>
  );

  return (
    <div className='ma'>
      <Navbar />
      <div className='mainprofile'>
        <div className="profile-menu">
          <ToastContainer position="top-center" autoClose={2000} />
          <h2>Welcome</h2>

          <div className="profile-icons-wrapper">
            

            <div className="profile-icons" ref={scrollRef}>
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className={`profile-icon ${profile.isActive ? 'active' : ''}`}
                  onClick={() => setActive(index)}
                >
                  <FaUser />
                  <span>{profile.name}</span>
                  <div className="actions">
                    <FaEdit
                      title="Edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(index);
                      }}
                    />
                    <FaTrash
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(index);
                      }}
                    />
                  </div>
                </div>
              ))}

              {profiles.length < MAX_PROFILES && (
                <div className="profile-icon add-profile" onClick={() => setShowAddModal(true)}>
                  <FaUserPlus />
                  <span>Add Profile</span>
                </div>
              )}
            </div>
          </div>

          <div className="menu-list">
            <MenuItem icon={<FaCog />} label="Account Settings" onClick={() => navigate('/accountsettings')} />
            <MenuItem icon={<FaGem />} label="Subscription Plan" onClick={() => navigate('/activeplan')} />
            <MenuItem icon={<FaHistory />} label="History" onClick={() => navigate('/history')} />
            <MenuItem icon={<FaDownload />} label="Downloads" onClick={() => navigate('/downloads')} />
            <MenuItem icon={<FaSignOutAlt />} label="Sign Out" onClick={() => navigate('/signin')} />
          </div>
        </div>
      </div>

      <Footer />

      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Add New Profile</h3>
            <input
              type="text"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              placeholder="Enter profile name"
              autoFocus
            />
            <div className="modal-buttons">
              <button onClick={handleAddProfile}>Add</button>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
