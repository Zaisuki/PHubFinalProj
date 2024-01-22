import '../../assets/scss/profile.scss';
import profileIcon from '../../assets/img/mygirl.jpg';

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-down1'>
                <img src={profileIcon} alt='profile' />
                <div className='name'>Zai Alicoben</div>
                <div className='status'>2nd Year</div>
                <div className='id'>03-2223-040667</div>
                <div className='acc'>glba.alicoben.up@phinmaed.com</div>
            </div>
        </div>
    );
};
export default Profile;
