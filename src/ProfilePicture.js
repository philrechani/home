import myImage from './me.jpg'


export const ProfilePicture = () => {

    return (  
        <div className='circular-container'>
            <img src={myImage} alt='My Image' className='profile-picture'/>
        </div>     
    )
}