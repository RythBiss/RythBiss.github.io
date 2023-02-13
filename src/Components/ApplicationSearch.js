import React, { useState, useEffect } from 'react'
import Card from './Card';
import ChevronButton from './ChevronButton';
import ImageBanner from './ImageBanner'
import HexArt from '../images/hex-art.svg'


export default function ApplicationSearch() {

  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [validPower, setValidPower] = useState([]);
  const [validMachines, setValidMachines] = useState([]);
  const [machineImage, setMachineImage] = useState(0);
  const [cyclePos, setCyclePos] = useState(0);



  const tags = [
    'General Grinding',
    'Urethanes',
    'Epoxy',
    'High Spots',
    'Rain Marks',
    'Mastic',
    'Thinset',
    'Paint',
    'Non-Slip',
    'Industrial Coatings',
    'Build Up',
    'Coatings',
    'Resin',
    'Surface Prep',
    'Glue'
  ]

  const machineObjects = {
    singleDisc: {
      name: 'SEC',
      power: ['electric'],
      range: 'small',
      tags: ['General Grinding', 'Urethanes', 'Epoxy', 'High Spots', 'Mastic', 'Thinset', 'Paint', 'Non-Slip', 'Glue', 'Rain Marks'],
      img: ['', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-single-disc-floor-grinder/SEC-NG-Machine-Slider.jpg', '']
    },
    dualDisc: {
      name: '2EC-NG',
      power: ['gas', 'electric'],
      range: 'large',
      tags: ['General Grinding', 'Urethanes', 'Epoxy', 'High Spots', 'Mastic', 'Thinset', 'Paint', 'Non-Slip', 'Glue', 'Rain Marks'],
      img: ['https://www.edcoinc.com/storage/product-slider/magna-trap-r-dual-disc-floor-grinder/2GC-NG-Machine-Slider.jpg', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-dual-disc-floor-grinder/2EC-NG-Machine-Slider.jpg', '']
    },
    heavyDualDisc: {
      name: '2D-HD',
      power: ['electric', 'propane'],
      range: 'large',
      tags: ['Industrial Coatings', 'High Spots', 'General Grinding'],
      img: ['', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-heavy-duty-floor-grinder-polisher/2D-HD-Electric-Machine-Slider.jpg', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-heavy-duty-floor-grinder-polisher/2D-HD-Propane-Machine-Slider.jpg']
    },
    edgeTurboGrinder: {
      name: 'TMC7',
      power: ['gas', 'electric'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep'],
      img: ['https://www.edcoinc.com/storage/product-slider/magna-trap-r-7-turbo-edge-grinder/TMC-7-Gas-Machine-Slider.jpg', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-7-turbo-edge-grinder/TMC-7-Electric-Machine-Slider.jpg', '']
    },
    lightTurboGrinder: {
      name: 'TL9',
      power: ['electric'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep'],
      img: ['', 'https://www.edcoinc.com/storage/product-slider/magna-trap-r-turbo-lite-grinder/TL-9-Machine-Slider.jpg', '']
    },
    turboGrinder: {
      name: 'TG-10',
      power: ['gas', 'electric', 'propane'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep'],
      img: ['https://www.edcoinc.com/storage/product-slider/magna-trap-10-turbo-grinder/TG-10-Gas-Machine-Slider.jpg', 'https://www.edcoinc.com/storage/product-slider/magna-trap-10-turbo-grinder/TG-10-Electric-Machine.jpg', 'https://www.edcoinc.com/storage/product-slider/magna-trap-10-turbo-grinder/TG-10-Propane-Machine-Slider.jpg']
    },
  }

  const magnaToolObjects = {
    blades: {
      name: 'Magna-Blades',
      finish: 'smooth',
      tags: ['Glue', 'Paint'],
      img: 'https://edcostore.com/wp-content/uploads/2017/04/12501LC_MagnaBlade.jpg'
    },
    doubleDots: {
      name: 'Double Dyma-Dots',
      finish: 'smooth',
      tags: ['Epoxy', 'Mastic', 'Thinset', 'Coatings', 'General Grinding', 'Urethanes', 'High Spots', 'Rain Marks', 'Build Up', 'Resin', 'Surface Prep'],
      img: 'https://edcostore.com/wp-content/uploads/2017/04/QC2B-MC-0030_DoubleDotGray.jpg'
    },
    segs: {
      name: 'Dyma-Segs',
      finish: 'textured',
      tags: ['Epoxy', 'Mastic', 'Thinset', 'Coatings', 'General Grinding', 'Urethanes', 'High Spots', 'Rain Marks', 'Build Up', 'Resin', 'Surface Prep', 'Non-Slip'],
      img: 'https://edcostore.com/wp-content/uploads/2017/04/QC2S-MC-0018-1.jpg'
    },
    PCD: {
      name: 'PCD with Backing Segment',
      finish: 'textured',
      tags: ['Industrial Coatings'],
      img: 'https://edcostore.com/wp-content/uploads/2017/04/QC-PCD1-LB_DymaPCD_Blue.jpg'
    }
  }



  const searchObjectForTags = (objectList, tag) => {
    if(tags.find(element => element === tag)){
      const entries = Object.entries(objectList);
      let matchingEntries = [];
  
      entries.forEach((element) => {
        const found = element[1].tags.find(element => element === tag);
  
        if(found){
          matchingEntries.push(element);
        }
      });
  
      return matchingEntries;
  
    }else{
  
      return null;
  
    }
  }
  
  const getValidMachines = (application, powerOption) => {
    const machines = Object.entries(machineObjects);
    let validMachinesArray = [];
  
    machines.forEach((element, i) => {
      const found = element[1].power.find(option => option === powerOption);
      const tagsFound = element[1].tags.find(app => app === application);
      
      if(found && tagsFound) validMachinesArray.push(element);
    });
    
    setValidMachines(validMachinesArray);
  }
  
  const progressCycle = (dir) => {
    if(cyclePos + dir > elementCycle.length-1){
      setCyclePos(0);
    }else if(cyclePos + dir < 0){
      setCyclePos(elementCycle.length-1);
    }else{
      setCyclePos(prev => prev += dir);
    }
  }



  useEffect(() => {
    getValidMachines(selectedApp, selectedPower)
    switch (selectedPower){
      case 'gas':
        setMachineImage(0);
        break;
      case 'electric':
        setMachineImage(1);
        break;
      case 'propane':
        setMachineImage(2);
        break;
    }
  }, [selectedPower])

  useEffect(() => {
    //this feels inconsistent with the other parts, see if you can make it fit the other parts of the code.
    if(selectedApp){
      const validPowerArray = [];
      searchObjectForTags(machineObjects, selectedApp).map(element => {
        element[1].power.map(element => {
          if(!validPowerArray.find(value => element === value)){
            validPowerArray.push(element);
          }
        })
      })
      setValidPower(validPowerArray);
    }

  }, [selectedFinish])



  const solutionElement = <>
  <h2 className='app-finder-box-text'>Solution:</h2>
  <section>
    <div className='app-finder-button-container'>
      {selectedMachine &&
          <>
          <Card text={selectedFinish[1].name} image={selectedFinish[1].img} />
          <Card text={selectedMachine[1].name} image={selectedMachine[1].img[machineImage]} />
          </>
      }
    </div>
  </section> 
</>

const appElement = <>
  <h2 className='app-finder-box-text'>Select Application</h2>
  <section>
    <div className='app-finder-button-container'>
    {tags.map((element, index) => {
        return <ChevronButton key={index} text={element} onClick={() => {
          setSelectedApp(element);
          progressCycle(1);
         }}/>
      })
    }
    </div>
  </section>
</>

const finishElement = <>
  <h2 className='app-finder-box-text'>Select Finish</h2>
  <section>
    <div className='app-finder-button-container'>
      {selectedApp && 
        searchObjectForTags(magnaToolObjects, selectedApp).map((element, index) => {
          return <ChevronButton onClick={() => {
            setSelectedFinish(element);
            progressCycle(1);
          }}  key={index}  text={element[1].finish}/>
        })
      }
    </div>
  </section>
</>

const powerElement = <>
  <h2 className='app-finder-box-text'>Select Power</h2>
  <section>
    <div className='app-finder-button-container'>
      {
        validPower.map((element, index) => {
          return <ChevronButton key={index} onClick={() => {
            setSelectedPower(element);
            progressCycle(1);
          }} text={element}/>
        })
      }
    </div>
  </section>
</>

const machineElement = <>
  <h2 className='app-finder-box-text'>Select Machine</h2>
  <section className='card-container'>
    <div className='app-finder-button-container'>
    {
      validMachines.map((element, index) => {
        return <Card key={index} onClick={() => {
          setSelectedMachine(element);
          progressCycle(1);
        }} text={element[1].name} image={element[1].img[machineImage]} />
      })
    }
    </div>
  </section>
</>

const elementCycle = [appElement, finishElement, powerElement, machineElement, solutionElement];

  return (
    <>
      <ImageBanner image='https://cf.specifyconcrete.org/img/pouring-concrete-over-rebar.jpg' smallText="Don't know where to start?" bigText="Use our application solver tool" />
      <div className='app-finder-page'>
        <div className='art-container'>
          <img className='hex-art' src={HexArt} alt='hex art'/>
          <img className='hex-art alt-position' src={HexArt} alt='hex art'/>
        </div>
        <div className='app-finder-container'>  
          <h2 className='app-finder-head-text'>Application Solver Tool</h2>
          <div className='progress-bar'>
            <div className={`${cyclePos > 0 ? 'progress-bar-filler' : 'progress-bar-empty'}`} />
            <div className={`${cyclePos > 1 ? 'progress-bar-filler' : 'progress-bar-empty'}`}/>
            <div className={`${cyclePos > 2 ? 'progress-bar-filler' : 'progress-bar-empty'}`}/>
            <div className={`${cyclePos > 3 ? 'progress-bar-filler' : 'progress-bar-empty'}`}/>
          </div>
          {elementCycle[cyclePos]}
          <div className='tool-nav-container '>
            {cyclePos > 0 && <button onClick={() => progressCycle(-1)} className='red-button'>Back</button>}
          </div>
        </div>
      </div>
    </>
  )
}