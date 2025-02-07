import React from 'react';
import BlogCard from '../../components/BlogCard';

function Section1() {
  return (
    <>
    <section className='blog-section1 text-centers'>

    <div className='title-section text-center  pt-5 pb-5 align-center'>
        <h1 className=''> The Best Food Blogs</h1>
    </div>
    </section>
    <hr className=' mt-5'/>

<section2 className="blog-section2 mt-5"> 
<BlogCard/>
</section2>

<hr/>
<section className='comment-section'>
<form className='pb-5'>
    <label htmlFor='comment' className='form-label fw-bold pt-5 ps-5 pe-4'>Comment </label>
    <input type='text' className=' ps-5 pe-4'></input>
    <div className='mt-3'>
    <button type='submit' className='btn btn-primary p-2 '>Send Comment</button>
    </div>
</form>
</section>
    </>


  )
}

export default Section1