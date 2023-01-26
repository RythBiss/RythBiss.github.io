import React from 'react'

export default function ApplicationSearch() {

  const tags = [
    'generalSmoothing',
    'urethanes',
    'epoxy',
    'highSpots',
    'rainMarks',
    'mastic',
    'thinset',
    'paint',
    'nonSlip',
    'industrialCoatings',
    'edges',
    'buildUp',
    'coatings',
    'resin',
    'surfacePrep',
    'glue'
  ]

  const machineObjects ={
    singleDisc: {
      name: 'SEC',
      power: ['gas'],
      range: 'small',
      tags: ['generalSmoothing', 'urethanes', 'epoxy', 'highSpots', 'mastic', 'thinset', 'paint', 'nonSlip', 'glue']
    },
    dualDisc: {
      name: '2EC-NG',
      power: ['gas', 'electric'],
      range: 'large',
      tags: ['generalSmoothing', 'urethanes', 'epoxy', 'highSpots', 'mastic', 'thinset', 'paint', 'nonSlip', 'glue']
    },
    heavyDualDisc: {
      name: '2D-HD',
      power: ['gas', 'electric'],
      range: 'large',
      tags: ['industrialCoverings', 'highSpots']
    },
    edgeTurboGrinder: {
      name: 'TMC7',
      power: ['gas', 'electric'],
      range: 'small',
      tags: ['highSpots', 'edges', 'buildUp', 'coatings', 'resin', 'surfacePrep']
    },
    lightTurboGrinder: {
      name: 'TL9',
      power: ['electric'],
      range: 'small',
      tags: ['highSpots', 'edges', 'buildUp', 'coatings', 'resin', 'surfacePrep']
    },
    turboGrinder: {
      name: 'TG-10',
      power: ['gas', 'electric', 'propane'],
      range: 'small',
      tags: ['highSpots', 'buildUp', 'coatings', 'resin', 'surfacePrep']
    },
  }

  const magnaTrapTools = {
    blades: {
      finish: 'smooth',
      tags: ['glue', 'paint']
    },
    doubleDots: {
      finish: 'smooth',
      tags: ['epoxy', 'mastic', 'thinset', 'coatings', 'generalSmoothing', 'urethanes', 'highSpots', 'rainMarks', 'buildUp', 'resin', 'surfacePrep']
    },
    segs: {
      finish: 'textured',
      tags: ['epoxy', 'mastic', 'thinset', 'coatings', 'generalSmoothing', 'urethanes', 'highSpots', 'rainMarks', 'buildUp', 'resin', 'surfacePrep', 'nonSlip']
    },
    PCD: {
      finish: 'textured',
      tags: ['industrialCoverings']
    }
  }

  return (
    <>
      <h1>Applicatoin Search</h1>
        {tags.map(element => {
          return <button>{element}</button>
        })
      }
    </>
  )
}