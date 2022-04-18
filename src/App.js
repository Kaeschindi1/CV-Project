import './App.css';
import {Row, Col, Breadcrumb} from 'react-bootstrap';

function App() {
  return (
    <div className="App">      
      <Breadcrumb>
        <Row>
          <Col xs lg='3'>
            <img className='ih' src='./logo2021.jpg' alt='not available'></img>
          </Col>
          <Col xs lg='6'>
            <h1>ESTHER KALU (WEBPAGE CV)</h1>
            <p><i>Residential address</i>: Plot 245 Mandela Estate, Port-Harcourt.
              <i>Phone Number</i>:+234XXXXX. <i>Email</i>:abc@gmail.com</p>
          </Col>
        </Row>
      </Breadcrumb>
      <hr></hr>
      <div className='PD'>
        <Row>
          <h2>Personal Data</h2>
        </Row>
        <Row>
          <Col xs lg='2'>
            <p>Sex:</p>
          </Col>
          <Col xs lg='3'>
            <p>Female</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg='2'>
            <p>State of Origin:</p>
          </Col>
          <Col xs lg='3'>
            <p>Abuja</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg='2'>
            <p>Nationality:</p>
          </Col>
          <Col xs lg='3'>
            <p>Nigeria</p>
          </Col>
        </Row>
        <Row>
          <Col xs lg='2'>
            <p>Languages Spoken:</p>
          </Col>
          <Col xs lg='3'>
            <p>English, Hausa and Yoruba</p>
          </Col>
        </Row>
      </div>
      <hr></hr>
      <div className='PD'>
        <Row>
          <h2>Education Background</h2>
        </Row>
        <Row>
        <table>
        <tr>
          <th>Certificate Acquired</th>
          <th>School Attended</th>
          <th>Course Studied</th>
          <th>Year</th>
        </tr>
        <tr>
          <td>Post Doctorate</td>
          <td>Cambridge University</td>
          <td>Computer Engineering</td>
          <td>2017-2022</td>
        </tr>
        <tr>
          <td>Masters Degree</td>
          <td>Cambridge University</td>
          <td>Computer Science</td>
          <td>2015-2017</td>
        </tr>
        <tr>
          <td>Bachelor Degree</td>
          <td>Cambridge University</td>
          <td>Computer Science</td>
          <td>2010-2014</td>
        </tr>
        <tr>
          <td>College Degree</td>
          <td>Cambridge High School</td>
          <td>General Science</td>
          <td>2005-2008</td>
        </tr>
      </table>
        </Row>
      </div>
      <hr></hr>
      <div className='PD'>
        <Row>
          <h2>Work Experience</h2>
        </Row>
        <Row>
        <table>
        <tr>
          <th>Company Name</th>
          <th>Position Title</th>
          <th>Job Responsibilities</th>
          <th>Date Begin</th>
          <th>Date Ended</th>
        </tr>
        <tr>
          <td>Tesla Incorporation</td>
          <td>Chief Data Analyst</td>
          <td>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</td>
          <td>2017</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>Tesla Incorporation</td>
          <td>Chief Data Analyst</td>
          <td>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</td>
          <td>2017</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>Tesla Incorporation</td>
          <td>Chief Data Analyst</td>
          <td>Lorem Ipsum. Lorem Ipsum. Lorem Ipsum</td>
          <td>2017</td>
          <td>2017</td>
        </tr> 
      </table>
        </Row>
      </div>
      <hr></hr>  
    </div>
  );
}


export default App;
