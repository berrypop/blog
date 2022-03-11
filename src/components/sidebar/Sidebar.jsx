import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img
          className='sidebarImage'
          src='https://media.istockphoto.com/photos/butterfly-gathering-pollen-from-a-pink-flower-picture-id637537048?k=20&m=637537048&s=612x612&w=0&h=4ROOYcjmKG3a8Y1moZogDdSQ11HE-EfMQKuZWEoDKWE='
          alt=''
        />
        <p className='sidebarText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illum,
          veritatis fugiat cumque velit adipisci necessitatibus
        </p>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>CATAGORIE</span>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>Life</li>
          <li className='sidebarListItem'>Music</li>
          <li className='sidebarListItem'>Style</li>
          <li className='sidebarListItem'>Sport</li>
          <li className='sidebarListItem'>Tech</li>
          <li className='sidebarListItem'>Cinema</li>
        </ul>
      </div>
      <div className='sidebarItem'>
        <span className='sidebarTitle'>Follow Us</span>
        <div className='sidebarSocial'>
          <i className='sidebarIcon fab fa-facebook-square'></i>
          <i className='sidebarIcon fab fa-twitter-square'></i>
          <i className='sidebarIcon fab fa-pinterest-square'></i>
          <i className='sidebarIcon fab fa-instagram-square'></i>
        </div>
      </div>
    </div>
  );
}
