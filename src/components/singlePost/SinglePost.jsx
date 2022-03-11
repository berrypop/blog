import './singlePost.css';

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?cs=srgb&dl=pexels-syed-qaarif-andrabi-6685428.jpg&fm=jpg'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet.
          <div className='singlePostEdit'>
            <i className='singlePostIcon far fa-edit'></i>
            <i className='singlePostIcon far fa-trash-alt'></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='singlePostAuthor'>
            Author: <b>Berry</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores,
          explicabo! Eum nam numquam impedit facilis hic nesciunt commodi
          architecto obcaecati quidem exercitationem, doloribus in laborum saepe
          quia aliquid quibusdam magnam iure quo magni? At optio facilis
          voluptates enim, voluptatem perspiciatis amet quasi illum officiis
          atque asperiores rerum cupiditate sequi nam voluptate explicabo quis?
          Sint quibusdam suscipit est, et porro tempora. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Asperiores, Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Asperiores, explicabo! Eum nam
          numquam impedit facilis hic nesciunt commodi architecto obcaecati
          quidem exercitationem, doloribus in laborum saepe quia aliquid
          quibusdam magnam iure quo magni? At optio facilis voluptates enim,
          voluptatem perspiciatis amet quasi illum officiis atque asperiores
          rerum cupiditate sequi nam voluptate explicabo quis? Sint quibusdam
          suscipit est, et porro tempora. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Asperiores,
        </p>
      </div>
    </div>
  );
}