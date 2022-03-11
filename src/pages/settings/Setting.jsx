import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Setting() {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              className='settingPPImg'
              src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?cs=srgb&dl=pexels-artur-roman-1167355.jpg&fm=jpg'
              alt=''
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>

          <label>UserName</label>
          <input type='text' placeholder='Berry' />
          <label>Email</label>
          <input type='email' placeholder='berry.poppe@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
