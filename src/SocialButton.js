
const openLink = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer')
}
const scaler = (x, y) => {
    return `scale(${x, y})`
}

export const SocialButton = ({ text,  outlink = null, imgpath = null, scaleX = 1, scaleY = 1, height=0, width=0}) => {


    return (
        <form>
            <button className="social-button" onClick={() => openLink(outlink)}>
                <svg height={height} width={width}>
                    <g transform={scaler(scaleX, scaleY)}>
                        <path d={imgpath}></path>
                    </g>
                </svg>
                <div>{text}</div>

            </button>
        </form>
    )
}