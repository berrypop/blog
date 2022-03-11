import './post.css';

export default function Post() {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://media.istockphoto.com/photos/butterfly-gathering-pollen-from-a-pink-flower-picture-id637537048?k=20&m=637537048&s=612x612&w=0&h=4ROOYcjmKG3a8Y1moZogDdSQ11HE-EfMQKuZWEoDKWE='
        alt=''
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>Lorem ipsum dolor sit,</span>
        <hr />
        <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
        ad,ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,ipsum
        dolor sit amet consectetur adipisicing elit. Dignissimos,ipsum dolor sit
        amet consectetur adipisicing elit. Dignissimos,.
      </p>
    </div>
  );
}
