
import React from 'react';
import Section from './Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const Academics: React.FC = () => {
  const sem1_cgpa = 8.15;
  const sem2_cgpa = 8.06;
  const average_cgpa = parseFloat(((sem1_cgpa + sem2_cgpa) / 2).toFixed(2));

  const data = [
    { name: 'Semester 1', CGPA: sem1_cgpa },
    { name: 'Semester 2', CGPA: sem2_cgpa },
    { name: 'Average', CGPA: average_cgpa },
  ];
  
  const colors = ['#3b82f6', '#2563eb', '#1e40af'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-800 p-2 border border-slate-700 rounded">
          <p className="label text-white">{`${label} : ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Section id="academics" title="Academic Progress">
        <div className="bg-slate-800/50 p-4 md:p-8 rounded-lg shadow-lg">
          <p className="text-center text-lg text-slate-400 mb-8">
            My academic performance reflects my dedication and consistency. Here is a summary of my Cumulative Grade Point Average (CGPA) on a 10-point scale.
          </p>
          <div style={{ width: '100%', height: 400 }}>
              <ResponsiveContainer>
                  <BarChart
                      data={data}
                      margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                      }}
                  >
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis domain={[0, 10]} stroke="#9ca3af" />
                      <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(30, 64, 175, 0.2)'}} />
                      <Legend />
                      <Bar dataKey="CGPA" fill="#8884d8" barSize={50} >
                        {data.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                      </Bar>
                  </BarChart>
              </ResponsiveContainer>
          </div>
        </div>
    </Section>
  );
};

export default Academics;
