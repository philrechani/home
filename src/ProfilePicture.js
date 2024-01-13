import myImage from './me.jpg'


export const ProfilePicture = () => {

    return (  
        <div class='circular-container'>
            <img src={myImage} alt='My Image' className='profile-picture'/>
        </div>     
    )
}