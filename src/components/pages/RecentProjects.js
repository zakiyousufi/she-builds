import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecentProjects = () => {
  const apiKey = 'patAWPWiTY8EuPuxk.d2ffb4c866f1252e08ebb15617a00274c14965091fab18bc316a3504768c9196';
  const apiUrl = `https://api.airtable.com/v0/appM5Y3VwbKk6cVLl/tblsHhn8uGFv4QGZ2`;
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        });
        setProjectData(response.data.records);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center flex-col'>
      <h1 className="text-3xl font-bold mb-4">Recent Projects</h1>
      {projectData.length === 0 && <p>No RecentProjects</p>}
      <div className="flex flex-col w-full">
        {projectData.map(record => (
          <div key={record.title} className='mx-2.5'>
            <div className="flex flex-col h-full items-center bg-white p-4 py-4 rounded-md">
              <div className="w-full h-46 flex items-center">
                <img className="object-cover rounded w-96 h-46 cursor-pointer" src={record.fields.image ? record.fields.image[0].url : null} alt={record.fields.name} />
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-sky-500 text-xl mb-2">{record.fields.title}</div>
                <p className="text-gray-700 text-base">{record.fields.info}</p>
                <span className="text-slate-400 text-sm">{record.fields.createAt}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
