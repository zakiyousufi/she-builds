import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeamCard from './TeamCard';

const Team = () => {
  const apiKey = 'patAWPWiTY8EuPuxk.d2ffb4c866f1252e08ebb15617a00274c14965091fab18bc316a3504768c9196';
  const apiUrl = `https://api.airtable.com/v0/appM5Y3VwbKk6cVLl/tbl4IysnJ5Q2jdZPN`;
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        setTeamData(response.data.records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teamData.map(record => (
          <TeamCard
            key={record.id}
            name={record.fields.name}
            image={record.fields.image ? record.fields.image[0].url : null}
            position={record.fields.position}
            bio={record.fields.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
