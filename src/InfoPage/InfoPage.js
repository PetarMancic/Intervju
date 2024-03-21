import React from "react";
import { useNavigate } from "react-router-dom";
import "./InfoPage.css";
import Button from '@mui/material/Button';

const InfoPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="spoljni">
      
      <Button
  variant="contained"
  sx={{
    
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  }}
  onClick={goBack}
>
  Go Back
</Button>


        <div class="sectionInfo">
          <h1>Petar Mancic</h1>
          <p>Date of birth: 21/03/2001</p>
          <p>Nationality: Serbian</p>
          <p>Phone number: (+381) 0693200362 (Mobile)</p>
          <p>Email address: petarmancic@gmail.com</p>
          <p>Address: Ćirila i Metodija 31/27, 18300, Pirot, Serbia (Home)</p>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Education</h2>
          <p>
            <strong>01/10/2020 – CURRENT</strong>
          </p>
          <p>Nis, Serbia</p>
          <p>
            <strong>UNDERGRADUATE STUDENT OF ELECTRONIC ENGINEERING</strong>
          </p>
          <p>Faculty of Electronic Engineering</p>
          <p>
            <a href="https://www.elfak.ni.ac.rs/en">Website</a>
          </p>

          <p>
            <strong>01/10/2016 – 01/06/2020</strong>
          </p>
          <p>Pirot</p>
          <p>
            <strong>HIGH SCHOOL GRADUATE</strong>
          </p>
          <p>High school "Gimnazija Pirot"</p>
          <p>
            <a href="https://gimnazijapirot.edu.rs/">Website</a>
          </p>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Programming languages</h2>
          <ul>
            <li>Java</li>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Technology</h2>
          <ul>
            <li>React</li>
            <li>NestJS</li>
            <li>.NET</li>
          </ul>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>IDE's</h2>
          <ul>
            <li>Visual Studio</li>
            <li>Visual Studio Code</li>
          </ul>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Theoretical knowledge</h2>
          <ul>
            <li>Databases</li>
            <li>Computer architecture</li>
            <li>Operating systems</li>
          </ul>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Courses</h2>
          <ul>
            <li>WebFlow</li>
          </ul>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>EDUCATION AND TRAINING</h2>
          <p>Insert information about your education and training here...</p>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>LANGUAGE SKILLS</h2>
          <p>Insert information about your language skills here...</p>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>DIGITAL SKILLS</h2>
          <p>Insert information about your digital skills here...</p>
          <hr
            style={{ float: "left", width: "50%", size: "3", color: "black" }}
          />
        </div>

        <div class="section">
          <h2>Additional Information</h2>
          <ul>
            <li>Sport: football, tennis</li>
            <li>Playing chess</li>
            <li>
              Hard-working, organized, professional in carrying out work duties
            </li>
            <li>Prefering team work, individual work, adaptable to jobs</li>
            <li>Sociable, communicative, ambitious</li>
            <li>
              The possibility of improving and gathering new experience during
              the work relationship
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfoPage;
