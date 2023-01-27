import React, { useState, useEffect } from 'react'

export default function ApplicationSearch() {

  const [selectedApp, setSelectedApp] = useState(null);
  const [selectedFinish, setSelectedFinish] = useState(null);
  const [selectedPower, setSelectedPower] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [validPower, setValidPower] = useState([]);
  const [validMachines, setValidMachines] = useState([]);

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
      tags: ['General Grinding', 'Urethanes', 'Epoxy', 'High Spots', 'Mastic', 'Thinset', 'Paint', 'Non-Slip', 'Glue', 'Rain Marks']
    },
    dualDisc: {
      name: '2EC-NG',
      power: ['gas', 'electric'],
      range: 'large',
      tags: ['General Grinding', 'Urethanes', 'Epoxy', 'High Spots', 'Mastic', 'Thinset', 'Paint', 'Non-Slip', 'Glue', 'Rain Marks']
    },
    heavyDualDisc: {
      name: '2D-HD',
      power: ['gas', 'electric', 'propane'],
      range: 'large',
      tags: ['Industrial Coatings', 'High Spots', 'General Grinding']
    },
    edgeTurboGrinder: {
      name: 'TMC7',
      power: ['gas', 'electric'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep']
    },
    lightTurboGrinder: {
      name: 'TL9',
      power: ['electric'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep']
    },
    turboGrinder: {
      name: 'TG-10',
      power: ['gas', 'electric', 'propane'],
      range: 'small',
      tags: ['High Spots', 'Build Up', 'Coatings', 'Resin', 'Surface Prep']
    },
  }

  const magnaToolObjects = {
    blades: {
      finish: 'smooth',
      tags: ['Glue', 'Paint']
    },
    doubleDots: {
      finish: 'smooth',
      tags: ['Epoxy', 'Mastic', 'Thinset', 'Coatings', 'General Grinding', 'Urethanes', 'High Spots', 'Rain Marks', 'Build Up', 'Resin', 'Surface Prep']
    },
    segs: {
      finish: 'textured',
      tags: ['Epoxy', 'Mastic', 'Thinset', 'Coatings', 'General Grinding', 'Urethanes', 'High Spots', 'Rain Marks', 'Build Up', 'Resin', 'Surface Prep', 'Non-Slip']
    },
    PCD: {
      finish: 'textured',
      tags: ['Industrial Coatings']
    }
  }

  useEffect(() => {
    getValidMachines(selectedApp, selectedPower)
  }, [selectedPower])

  useEffect(() => {

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

  useEffect(() => {
    console.log(selectedApp)
    console.log(selectedFinish)
    console.log(selectedMachine)
  }, [selectedMachine])

  return (
    <>
      <h1>Applicatoin Search</h1>
      <section>
        <h2>Select Application</h2>
        {tags.map((element, index) => {
            return <button key={index} onClick={() => { setSelectedApp(element) }}>{element}</button>
          })
        }
      </section>
      {selectedApp ? 
        <section>
          <h2>Select Finish</h2>
          {
            searchObjectForTags(magnaToolObjects, selectedApp).map((element, index) => {
              return <button onClick={() => { setSelectedFinish(element) }} key={index}>{element[1].finish}</button>
            })
          }
        </section>
        :
        <></>
      }
      {selectedFinish ? 
        <section>
          <h2>Select Power</h2>
          {
            validPower.map((element, index) => {
              return <button key={index} onClick={() => {setSelectedPower(element)}}>{element}</button>
            })
          }
        </section>
        :
        <></>
      }
      {selectedPower ? 
        <section>
          <h2>Select Machine</h2>
          {
            validMachines.map((element, index) => {
              return <button key={index} onClick={() => setSelectedMachine(element)}>{element[1].name}</button>
            })
          }
        </section>
        :
        <></>
      }
      {selectedMachine ? 
        <h2>Solution:</h2>
        :
        <></>
      }
    </>
  )
}