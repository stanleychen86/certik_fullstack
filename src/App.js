import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import './App.css';
import dataa from '../src/data.json'
//import rightPart from '../src/rightPart.js'
//import bootstrap from 'bootstrap'
import Card from 'react-bootstrap/Card'
//import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';




var first_name = dataa.primitives[0].name;
var second_name = dataa.primitives[1].name;
var third_name = dataa.primitives[2].name;
var fourth_name = dataa.primitives[3].name;
var fifth_name = dataa.primitives[4].name;
var sixth_name = dataa.primitives[5].name;



const data = [
      {
        data: {
          staticAnalysis: ((dataa.primitives[0].score) / 100),
          onchainMonitoring: ((dataa.primitives[1].score) / 100),
          socialSentiment: ((dataa.primitives[2].score)/100),
          governenceAutonomy: ((dataa.primitives[3].score)/100),
          marketVolatility: ((dataa.primitives[4].score)/100),
          riskAssessment: ((dataa.primitives[5].score)/100),
        },
        meta: { color: 'blue' }
      }
    ];

const captions = {
      staticAnalysis: first_name,
      onchainMonitoring: second_name,
      socialSentiment: third_name,
      governenceAutonomy: fourth_name,
      marketVolatility: fifth_name,
      riskAssessment: sixth_name
};

var first_color = dataa.primitives[0].score;
var second_color = dataa.primitives[1].score;
var third_color = dataa.primitives[2].score;
var fourth_color = dataa.primitives[3].score;
var fifth_color = dataa.primitives[4].score;
var sixth_color = dataa.primitives[5].score;

var second_word;
var third_word;
var fifth_word;
var sixth_word;

if (first_color > 80){
  first_color = '#008000'
} else if (first_color > 60 && first_color <= 80) {
  first_color = '#FFFF00'
} else {
  first_color = 'ff0000'
}

if (second_color > 80){
  second_color = '#008000'
  second_word = 'Excellent'
} else if (second_color > 60 && second_color <= 80) {
  second_color = '#FFFF00'
  second_word = 'Good'
} else {
  second_color = 'ff0000'
  second_word = 'Average'
}

if (third_color > 80){
  third_color = '#008000'
  third_word = 'Excellent'
} else if (third_color > 60 && third_color <= 80) {
  third_color = '#FFFF00'
  third_word = 'Good'
} else {
  third_color = 'ff0000'
  third_word = 'Average'
}

if (fourth_color > 80){
  fourth_color = '#008000'
} else if (fourth_color > 60 && fourth_color <= 80) {
  fourth_color = '#FFFF00'
} else {
  fourth_color = 'ff0000'
}

if (fifth_color > 80){
  fifth_color = '#008000'
  fifth_word = 'Excellent'
} else if (fifth_color > 60 && fifth_color <= 80) {
  fifth_color = '#FFFF00'
  fifth_word = 'Good'
} else {
  fifth_color = 'ff0000'
  fifth_word = 'Average'
}

if (sixth_color > 80){
  sixth_color = '#008000'
  sixth_word = 'Excellent'
} else if (sixth_color > 60 && sixth_color <= 80) {
  sixth_color = '#FFFF00'
  sixth_word = 'Good'
} else {
  sixth_color = 'ff0000'
  sixth_word = 'Average'
}

function App() {
  return(
  <div className='rowC'>
    <RadarChart
        captions={captions}
        data={data}
        size={1000}
      />

<div>


<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{first_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
{dataa.primitives[0].issues}
</h1>
issues detected out of {dataa.primitives[0].checks} vulnerability and security checks
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[0].score))} text={`${((dataa.primitives[0].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: first_color,
    textColor: first_color,
    trailColor: '#d6d6d6',
    backgroundColor: first_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>


<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{second_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
{second_word}
</h1>
 based on real-time transactional tracking systems
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[1].score))} text={`${((dataa.primitives[1].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: second_color,
    textColor: second_color,
    trailColor: '#d6d6d6',
    backgroundColor: second_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>

<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{third_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
{third_word}
</h1>
 based on social monitoring and sentiment analysis
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[2].score))} text={`${((dataa.primitives[2].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: third_color,
    textColor: third_color,
    trailColor: '#d6d6d6',
    backgroundColor: third_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>

<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{fourth_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
1
</h1>
security-type certificate found on CertiK Chain
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[3].score))} text={`${((dataa.primitives[3].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: fourth_color,
    textColor: fourth_color,
    trailColor: '#d6d6d6',
    backgroundColor: fourth_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>

<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{fifth_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
{fifth_word}
</h1>
 based on indicators over trading volume/liquidity/depth
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[4].score))} text={`${((dataa.primitives[4].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: fifth_color,
    textColor: fifth_color,
    trailColor: '#d6d6d6',
    backgroundColor: fifth_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>

<Card style={{ width: '40rem' }}>
<Card.Body>
<div className="rowC">
<div>
<Card.Title>{sixth_name}</Card.Title>
<Card.Text>
<h1 class='c1'>
{sixth_word}
</h1>
 based on 15 safety and hazard evaluations
</Card.Text>
</div>

<div style={{ width: 80, height: 80 }} class = 'right'>
<CircularProgressbar value={((dataa.primitives[5].score))} text={`${((dataa.primitives[5].score) )}%`} styles={buildStyles({
    rotation: 0.25,
    strokeLinecap: 'butt',
    textSize: '16px',
    pathTransitionDuration: 0.5,
    pathColor: sixth_color,
    textColor: sixth_color,
    trailColor: '#d6d6d6',
    backgroundColor: sixth_color,
  })}/>
</div>

</div>
</Card.Body>
</Card>
</div>
</div>
  );


}

export default App;
