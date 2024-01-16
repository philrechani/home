import { useState, useEffect } from 'react';
import { json, scaleBand, scaleLinear, max } from 'd3'
import { feature, mesh } from 'topojson';

const jsonURL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'


export const useEarthData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    

    json(jsonURL).then(data => {
      
      const {countries} = data.objects
   
      setData({
        countries: feature(data,countries),
        interiors: mesh(data,countries , (a,b) => {return a!==b })})
    })



  }, [])

  return data
}