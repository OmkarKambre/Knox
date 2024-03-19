// Service3.jsx
import React from 'react';

function Service3() {
  const cardStyle = {
    marginBottom: '20px',
    marginLeft:'20px',
    marginRight:'20px',
    padding: '20px',
    border: '3px solid #ccc',
    borderRadius: '70px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const imgStyle = {
    height: '300px',
   borderRadius: '70px',
    width: '420px'
  };

  const textStyle = {
    fontSize: '18px',
    lineHeight: '1.5'
  };

  const collegeNameStyle = {
    fontFamily: 'Courier New, monospace',
    fontSize: '35px',
    fontWeight: 'bold',
    letterSpacing: '2px'
    
  };

  const sclgNameStyle ={
    marginLeft: '20px'
  }

  return (
    <div>
      {/* First Card */}
      <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/VJTI_Quadrangle.jpg/640px-VJTI_Quadrangle.jpg"
              alt="VJTI Quadrangle"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
            <h1 style={{ ...collegeNameStyle }}>VEERMATA JIJABAI TECHNICAL EDUCATION</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://vjti.ac.in/fees-and-registration-for-ay-2022-2023/'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://vjti.ac.in/tpo-details/'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div style={{ ...cardStyle, marginTop: '20px'}} >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2' }}>
            <h1 style={{ ...collegeNameStyle,  ...sclgNameStyle }}>COLLEGE OF ENGINEERING PUNE</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle }}>Fees Structure</h3>
              <p style={{marginLeft: '20px'}}><a href='https://www.coep.org.in/admissions/feestructure'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' , ...sclgNameStyle,}}>Placement Record</h3>
              <p style={{marginLeft: '20px'}}><a href='https://www.coep.org.in/placementcell'>Click here to check the Placement record</a></p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <img
              src="https://img.collegepravesh.com/2016/01/COEP-Pune.jpg"
              alt="COEP Pune"
              style={imgStyle}
            />
          </div>
        </div>
      </div>

       {/* Third Card */}
       <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://pict.edu/images/slider/home1/College%20Photo%2023%20Feb%202023.jpg"
              alt="Pune Institute of Computer Technology"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
            <h1 style={{ ...collegeNameStyle,  }}>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://pict.edu/fee-structure/'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://pict.edu/placement/'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Card */}
      <div style={{ ...cardStyle, marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2' }}>
            <h1 style={{ ...collegeNameStyle, ...sclgNameStyle,  }}>WALCHAND COLLEGE OF ENGINEERING</h1>
            <div style={textStyle}>
               <br></br>
               <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle }}>Fees Structure</h3>
              <p style={{marginLeft: '20px'}}><a href='http://www.walchandsangli.ac.in/docs/students/oct22/Fee%20Structure%20UG_PG_Diploma_2022_23_230123.pdf'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' , ...sclgNameStyle}}>Placement Record</h3>
              <p style={{marginLeft: '20px'}}><a href='http://www.walchandsangli.ac.in/trainingandplacement/trainingandplacement.asp'>Click here to check the Placement record</a></p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <img
              src="https://www.collegebatch.com/static/clg-gallery/walchand-college-of-engineering-sangli-249262.jpg"
              alt="Walchand College of Engineering"
              style={imgStyle}
            />
          </div>
        </div>
      </div>


      {/* Fifth Card */}
      <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://images.shiksha.com/mediadata/images/1499418924phpOpG948.jpeg"
              alt="KJ Somaiya College of Engineering"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
            <h1 style={{ ...collegeNameStyle,  }}>KJ SOMAIYA COLLEGE OF ENGINEERING</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://kjsce.somaiya.edu/en/admission/btech?vthmstablink=vtmhs3'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://kjsce.somaiya.edu/en/placement/highlight/'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Card */}
      <div style={{ ...cardStyle, marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2' }}>
            <h1 style={{ ...collegeNameStyle, ...sclgNameStyle  }}>SARDAR PATEL INSTITUTE OF TECHNOLOGY</h1>
            <div style={textStyle}>
               <br></br>
               <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle }}>Fees Structure</h3>
              <p style={{marginLeft: '20px'}}><a href='https://www.spit.ac.in/admissions-1/fees/'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' , ...sclgNameStyle}}>Placement Record</h3>
              <p style={{marginLeft: '20px'}}><a href='https://www.spit.ac.in/placements/'>Click here to check the Placement record</a></p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <img
              src="https://www.thefela.org/public/uploads/news/5720Pi7_Image_Sardar-Patel-College-of-Engineering.jpg"
              alt="Sardar Patel Institute of Technology"
              style={imgStyle}
            />
          </div>
        </div>
      </div>


      {/* Seventh Card */}
      <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://www.vit.edu/media/k2/items/src/878af4972e07916863ae909a162bf74b.jpg"
              alt="Vishwakarma Institute of Technology"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
            <h1 style={{ ...collegeNameStyle,  }}>VISHWAKARMA INSTITUTE OF TECHNOLOGY</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://www.vit.edu/admissions/fees-structure'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://www.vit.edu/placements/placements-statistics'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Eighth Card */}
      <div style={{ ...cardStyle, marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2' }}>
            <h1 style={{ ...collegeNameStyle, ...sclgNameStyle  }}>PIMPRI CHINCHWAD COLLEGE OF ENGINEERING</h1>
            <div style={textStyle}>
               <br></br>
               <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle }}>Fees Structure</h3>
              <p style={{marginLeft: '20px'}}><a href='http://www.pccoepune.com/fee-structure.php'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' ,...sclgNameStyle}}>Placement Record</h3>
              <p style={{marginLeft: '20px'}}><a href='http://www.pccoepune.com/top-placement-engineering-college-in-pune.php'>Click here to check the Placement record</a></p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <img
              src="https://lh3.googleusercontent.com/proxy/V5sdh3buczkrOa8slvkHpVj6oKibu5khoFIWqTH64UGDJqYYKOVpnxNugzknlrj788uCu9WAR1lNm5nLbRMPCF-kn-6CPCkY"
              alt="Pimpri Chinchwad College of Engineering"
              style={imgStyle}
            />
          </div>
        </div>
      </div>


     {/* Ninth Card */}
     <div style={cardStyle}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/26/full/20210226160425.jpg"
              alt="Dwarkadas J. Sanghavi College of Engineering"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
          <h1 style={{ ...collegeNameStyle,  }}>DWARKADAS J. SANGHAVI COLLEGE OF ENGINEERING</h1>
            <div style={textStyle}>
               <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://djsce.ac.in/docs/Admissions/Fees%20Structure-%20First%20Year%20B%20Tech%2023-24.pdf'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://www.djsce.ac.in/placements-hs'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Tenth Card */}
      <div style={{ ...cardStyle, marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '2' }}>
          <h1 style={{ ...collegeNameStyle, ...sclgNameStyle  }}>VISHWAKARMA INSTITUTE OF INFORMATION TECHNOLOGY</h1>
            <div style={textStyle}>
            <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle}}>Fees Structure</h3>
              <p style={{...sclgNameStyle}}><a href='https://www.viit.ac.in/images/Admissions/Fee-Structure/F-Y-B-Tech-2023-24.pdf'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif', ...sclgNameStyle }}>Placement Record</h3>
              <p style={{...sclgNameStyle}}><a href='https://www.viit.ac.in/placement-i2ic/placement-summary'>Click here to check the Placement record</a></p>
            </div>
          </div>
          <div style={{ flex: '1', marginLeft: '20px' }}>
            <img
              src="https://images.shiksha.com/mediadata/images/1553757803phpUJkYsj.jpeg"
              alt="Vishwakarma Institute of Information Technology"
              style={imgStyle}
            />
          </div>
        </div>
      </div>

      {/* Eleventh Card */}
      <div style={{ ...cardStyle, marginBottom: '20px', marginTop: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            <img
              src="https://5.imimg.com/data5/PG/KR/OU/SELLER-84183740/d-y-patil-medical-college-pune-courses-fees-structure-cutoff-seat-matrix-admission.jpg"
              alt="Dr. D. Y. Patil Institute of Technology Pimpri Chinchwad"
              style={imgStyle}
            />
          </div>
          <div style={{ flex: '2', marginLeft: '20px' }}>
            <h1 style={{ ...collegeNameStyle,  }}>Dr. D. Y. PATIL INSTITUTE OF TECHNOLOGY PIMPRI CHINCHWAD</h1>
            <div style={textStyle}>
              <br></br>
            <h3 style={{ fontFamily: 'Georgia, serif' }}>Fees Structure</h3>
              <p><a href='https://www.dypiemr.ac.in/admissions/fee-strucutre'>Click here to check the fee Structure</a></p>
              <br/>
              <h3 style={{ fontFamily: 'Georgia, serif' }}>Placement Record</h3>
              <p><a href='https://engg.dypvp.edu.in/special-placements.aspx'>Click here to check the Placement record</a></p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export { Service3 };
