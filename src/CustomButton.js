
const openLink = (link) =>{
    window.open(link,'_blank','noopener,noreferrer')
}
const scaler = (x, y) => {
    return `scale(${x, y})`
}

export const CustomButton = ({ text, link, imgpath = null, scaleX = 1, scaleY = 1 }) => {

    
    return (
        <form>
            <button className="button" onClick={() => openLink(link)}>
                <svg height={32} width={32}>
                    <g transform={scaler(scaleX, scaleY)}>
                        <path d={imgpath}></path>
                    </g>
                </svg>
                <div>{text}</div>

            </button>
        </form>
    )
}