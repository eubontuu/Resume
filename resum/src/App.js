import logo from './logo.svg';
import facebook from './fb.png'
import tel from './tele.png'
import emal from './email.png'
import pic from './pp.JPG'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"></link>
  return (
    <div className="App">
      
    <div className="top">
      <div className="topright"> 
       
       <div className="diamond2"></div>
     
       <div className="square2"></div>
       <div className="square1"></div>
       <div className="diamond1">
        <div className="india">
          <img src={pic}className="picture"></img>
          </div>
       </div>
       <div className="line1"></div>
       
       <div className="line2"></div>


         <div className="topright1">
         <div className="name">นายวทัชช์ ปราศรัย</div>
            <div className="school">-โรงเรียนอัสสัมชัญอุบลราชธานี-</div>
          <div>

        <div className="topright2">
            <div className="contact">
            <img src={facebook} width={20} height={20}></img>
            Watuch Prasai
            </div>
            <div className="contact">
            <img src={tel} width={20} height={20}></img>
            061-726-0834
            </div>
            <div className="contact">
            <img src={emal} width={20} height={20}></img>
            Watatprasai@gmail.com
            </div>
          

          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="tri1"></div>
      <div className="bottom">

          <div className="left">
            <div className = "insideleft1">
              <div className = "header">
                <FontAwesomeIcon icon={faCaretRight} style={{marginRight:"19",color:"#9D1515"}}/>
                Skills

              </div>
              <div className="listskill">
              <ul>
              <li>Java Script</li>
              <li>HTML</li>
              <li>Css</li>
              <li>React</li>
              </ul>
              </div>
            </div>

            <div className = "insideleft2">
              <div className= "header">
              <FontAwesomeIcon icon={faCaretRight} style={{marginRight:"19",color:"#9D1515"}}/>
                Hobbies

              </div>
              <div className="list">

              </div>

            </div>
          </div>


          <div className="right">
            <div className="insideright1">
              <div className="top1">
              <FontAwesomeIcon icon={faCaretRight} style={{marginRight:"19",color:"#9D1515"}}/>
              Education
        
              </div>
              <div className="bot1">

              <dl>
              <dt>ประถมศึกษา 2012-2017</dt>
              <dd>- โรงเรียนบ้านเด็กวารินชำราบ</dd>
              <dt>มัธยมศึกษา 2017-2023</dt>
              <dd>- โรงเรียนอัสสัมชัญอุบลราชธานี</dd>
              <dd> GPAX : 3.70</dd>
              </dl>

              </div>
            </div>


            <div className="insideright2">
              <div className="top2">
              <FontAwesomeIcon icon={faCaretRight} style={{marginRight:"19",color:"#9D1515"}}/>
                Project

              </div>
              <div className="bot3">
              โครงงาน นวัตกรรมเหรียญดิจิตอล (EDT)
              ได้เสนอแนวคิดให้กับโรงเรียนเกี่ยวกับเทคโนโลยีในปัจจุบันและการเปลี่ยนแปลงที่สามารถนำไปพัฒนาโรงเรียนได้ โดยการเปลี่ยนการใช้เงินสดให้เป็นสกุลเงินออนไลเพื่อให้การบริหารจัดการ สามารภทำได้ง่านมากยิ่งขึ้น
              </div>
            </div>


            <div className="insideright3">
              <div className="top2"><FontAwesomeIcon icon={faCaretRight} style={{marginRight:"19",color:"#9D1515"}}/>Soft skills</div>
              <div className= "bot1">
              <ul>
              <li>ความสามารถในการจัดการอารมณ์</li>
              <li>การจัดการเวลา</li>
              <li>การทำงานร่วมกับผู้อื่น</li>
              <li>อารมณ์ขัน</li>
              </ul>
              </div>

            </div>

          </div>
      </div>
    </div>
  );
}

export default App;
