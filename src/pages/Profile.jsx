import React, { useEffect, useState } from 'react';
import '../assets/css/profile.css';
import EventCard from '../components/EventCard';
import PersonalDetails from '../components/PersonalDetails';
import axiosInstance from '../axios';

const Profile = () => {
  const [appState, setAppState] = useState({
    loading: true,
    profile: null,
  });

  useEffect(() => {
    axiosInstance.get('account_detail/').then((res) => {
      const profileData = res.data;
      console.log(res.data);
      setAppState({ loading: false, profile: profileData });
      console.log(res.data);
    });
  }, [setAppState]);

  if(appState.loading) return <p>Loading Profile Data</p>;
  return (
    <div className='pr-container body-ContactUs'>
      <div className='container'>
        <div style={{ paddingTop: '3vw' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div
              className='mt-4 h1 heading-res'
              style={{ fontWeight: '300', lineHeight: '1.2' }}
            >
              My Profile
            </div>
          </div>
          <div className='row mt-5'>
            {/* Name and Initials */}
            <div className='col-12 col-md-6 nameContainer d-flex justify-content-center align-items-center'>
              <div className='circle'>
                <p className='initials'>JD</p>
              </div>
              <div className='mt-4 name h2'>{ appState.profile.name }</div>
            </div>
            {/* Personal Details */}
            <div className='col-12 col-md-6 pl-5'>
              <PersonalDetails name={ appState.profile.email } icon='fa fa-envelope' />
              <PersonalDetails name='SE' icon='fa fa-graduation-cap' />
              <PersonalDetails name={ appState.profile.level } icon='fa fa-cubes' />
              <PersonalDetails name={ appState.profile.phone_no } icon='fa fa-phone' />
            </div>
          </div>
        </div>
        <div style={{ marginTop: '6vw' }}>
          <div className='d-flex justify-content-center align-items-center'>
            <div
              className='h1 heading-res'
              style={{ fontWeight: '300', lineHeight: '1.2' }}
            >
              My Events
            </div>
          </div>
          <div className='mt-5'>
            <div className='row'>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
                <EventCard name="Reverse Coding" events={appState.profile.events.RC}/>
              </div>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
                <EventCard name="NationalCoding Contest" events={appState.profile.events.NCC}/>
              </div>
            </div>
            <div className='row pb-5 margin-bot'>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
                <EventCard name="Network Tresure Hunt" events={appState.profile.events.NTH}/>
              </div>
              <div className='col-12 col-md-4 d-flex justify-content-center'>
                <EventCard name="InQuizitive" events={appState.profile.events.Quiz}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
