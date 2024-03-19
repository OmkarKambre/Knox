import React, { useState } from "react";
import './Service1.css'; // Import your CSS file for styling

function Service1() {
  const [percentage, setPercentage] = useState('');
  const [city, setCity] = useState('');
  const [caste, setCaste] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rank: percentage,
          category: caste,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Received Recommendations:', data.recommendedColleges);
        setRecommendations(data.recommendedColleges);
      } else {
        console.error('Failed to fetch recommendations');
      }
    } catch (error) {
      console.error('Error in fetch:', error);
    }
  };

  return (
    <div>
      <div className="container">
        <center>
          <h1 style = {{color:"white"}} className="heading">MHT CET COLLEGE PREDICTOR</h1>
        </center>
        <br />
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label>Percentage</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your percentage"
                value={percentage}
                onChange={(e) => setPercentage(e.target.value)}
              />
            </div>

            <div className="col">
              <label>City</label>
              <select
                className="form-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option>Select your city</option>
                <option>Mumbai</option>
                <option>Pune</option>
                <option>Nashik</option>
              </select>
            </div>
          </div>

          <div className="mb-3">
            <label>Caste</label>
            <select
              className="form-select"
              value={caste}
              onChange={(e) => setCaste(e.target.value)}
            >
              <option>Select your caste</option>
              <option>GOPENH</option>
              <option>GOPENS</option>
              <option>GSCH</option>
              <option>GSTH</option>
              <option>GVJH</option>
              <option>GNT1H</option>
              <option>GNT2H</option>
              <option>GOBCH</option>
              <option>LOPENH</option>
              <option>LSCH</option>
              <option>LSTH</option>
              <option>LOBCH</option>
              <option>PWDC</option>
              <option>GOPENO</option>
              <option>GSCO</option>
              <option>GVJO</option>
              <option>GNT2O</option>
              <option>GOBCO</option>
              <option>LOPENO</option>
              <option>LOBCO</option>
              <option>DEFS</option>
              <option>TFWS</option>
            </select>
          </div>

          <center>
            <button className="btn btn-outline-success" type="submit">
              Get Recommendations
            </button>{' '}
          </center>
        </form>

        {recommendations.length > 0 && (
          <div>
            <h2>College Recommendations:</h2>
            <ul>
              {recommendations.map((college) => (
                <li key={college._id}>{college.name} - {college.branch}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export { Service1 };
