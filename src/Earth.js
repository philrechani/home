import { geoPath, geoEqualEarth, geoGraticule } from 'd3'


const projection = geoEqualEarth()
const path = geoPath(projection)

export const Earth = ({ data: { countries, interiors }}) => {

    return (
        <div className='worldMap-container'>
            <svg className='worldMap-svg'>
                <g className='worldMap' /* transform="scale(2)" */>
                    <path className="sphere" d={path({ type: 'Sphere' })} />

                    {countries.features.map((feature, index) => {

                        return (
                            <path
                                className='countries'
                                d={path(feature)} />
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