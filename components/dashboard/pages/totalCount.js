import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TotalCount() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from the server
    axios.get('/api/getAll')
      .then((response) => {
        const updatedProfiles = response.data.profiles.map((profile) => {
          // Increase the event counts based on interests
          const interests = profile.eventInterest;
          const updatedEventCounts = {
            "TechFusion": 0,
            "Code-N-Tackle": 0,
            "Film_Fiesta": 0,
            "Riddle-Arcade": 0,
          };

          interests.forEach((interest) => {
            updatedEventCounts[interest] += 1;
          });

          // Update the event counts in the profile
          profile.eventCounts = updatedEventCounts;

          return profile;
        });

        // Update state with the modified profiles
        setProfiles(updatedProfiles);

        console.log(updatedProfiles)
        
      })
      .catch((error) => {
        console.error('Error fetching profiles', error);
      });
  }, []);

  return (
    <div>
      {/* Display the updated profiles */}
      {profiles.map((profile) => (
        <div key={profile._id}>
          <h2>Name: {profile.Name}</h2>
          <p>Email: {profile.email}</p>
          {/* Display event counts */}
          <p>Event Counts:</p>
          <ul>
            {Object.entries(profile.eventCounts).map(([eventName, count]) => (
              <li key={eventName}>
                {eventName}: {count}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TotalCount;
