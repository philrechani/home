import { geoPath, geoEqualEarth, geoGraticule } from 'd3'


const projection = geoEqualEarth()
const path = geoPath(projection)

const viewBoxSize = {
    x: 0,
    y: 0,
    w: 1024,
    h: 768
}

const viewBoxScale = 1

const setViewbox = ({ x, y, w, h }, scale) => {
    return `${x} ${y} ${w * scale} ${h * scale}`
}

const showDetails = (countryName) => {
    console.log(countryName);
  };

  

export const Earth = ({ data: { countries, interiors } }) => {

    return (
        <div className='worldMap-container'>
            <svg className='worldMap-svg' version="1.1" width="100%" height="100%" viewBox={setViewbox(viewBoxSize, viewBoxScale)} preserveAspectRatio="xMidYMid meet">
                <g className='worldMap' /* transform="scale(2)" */>
                    <path className="sphere" d={path({ type: 'Sphere' })} />

                    {countries.features.map((feature, index) => {

                        return (
                            <path
                                className='countries'
                                d={path(feature)} 
                                onMouseEnter={() => showDetails(feature.properties.name)}/>
                        )
                    }

                    )}
                    <path className="interiors" d={path(interiors)} />
                    <path className='graticules' d={path(geoGraticule()())} />

                </g>
            </svg>
        </div>
    )
}

