import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function MyVerticallyCenteredModal1() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [hashtag, setHashtag] = useState('');
  const[isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      const details = { title, message, hashtag };

      setIsPending(true);

      fetch('http://localhost:5003/post',  {
          method: 'POST', 
          body: JSON.stringify(details)
      }).then(() => {
          console.log('new details Added');
          setIsPending(false);
         navigate('/');
      });
  }


  return (
    <div className='textmodalbackdrop'>
      <form onSubmit={handleSubmit}>
        <label> Name</label>
          <input 
            type="text"
            required
            name='title'
            defaultValue={title}
            placeholder="Enter title"
            onChange={(e) => setTitle(e.target.value)}
            />
            <br />
        <label>Email Address</label>
          <input 
            type="email"
            required
            defaultValue={message}
            name='message'
            placeholder="Enter message"
            onChange={(e) => setMessage(e.target.value)}
            />
            <br />
        <label>hashtag</label>
            <input 
            type="text"
            required
            defaultValue={hashtag}
            name='hashtag'
            placeholder="hashtag"
            onChange={(e) => setHashtag(e.target.value)}
            />
            <br />
        
        { !isPending && <button type="submit" class="btn btn-success btn-sm btn-block" style={{margin:"30px 0 0 0"}}>Create an Account</button>}
        { isPending && <button disabled>Creating Account . . .</button> }
    </form>      
</div>
  );
}


export default MyVerticallyCenteredModal1;

