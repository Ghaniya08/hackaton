"use client";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";

const CommentSection = () => {
  const [comment, setComment] = useState<string>(''); 
  const [comments, setComments] = useState<string[]>([]); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment('');
    }
  };

  return (
    <div className='justify-center mx-auto text-myverydarkpink'>
      <h2 className=" font-bold underline lg:text-2xl text-myverydarkpink mb-4">Share Your Feedback:</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          className=' border rounded-lg lg:w-[710px] w-[250px] after:border-myverydarkpink/30 hover:border-myverydarkpink/30  border-myverydarkpink/30 h-[50px] bg-mylitpink/20 border-solid inline-flex '
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment..."
        />
        <button
          type="submit"
          className="bg-myverydarkpink h-fit lg:w-[150px] ml-[170px] mt-[20px] lg:-mb-10 lg:ml-[561px] text-white px-4 py-2 rounded-xl "
        >
          Comment
        </button>
      </form>

      <div>
        {/* <h3 className=" font-semibold mb-2 text-yellow-300 text-3xl ">Comments:</h3> */}
        <ul className="space-y-2">
          <li className='bg-myverydarkpink/30 pb-6 p-2 rounded-lg shadow-sm lg:text-[17px] text-[15px]'>
          <h1 className='text-myverydarkpink font-bold lg:text-[17px]'>Pinned By Ghaniya Khan</h1>
          <h1 className='flex mt-2 lg:mb-4 text-myverydarkpink'><a href="https://github.com/Ghaniya08"><MdAccountCircle className='text-3xl mr-3' /></a> Ghaniya Khan <span className='ml-4'> November 12 2024</span></h1>
          Thank you for visiting my blog! As a web developer, this website is a part of my practice projects. I'd love to hear about your experience!
          Let me Know in the Comment below that How was your experience on my website? Was the content helpful? Any suggestions for improvement?
          Your feedback will help me grow and create better content! 
          <div className="lg:flex lg:gap-5">
          <h1 className="flex gap-2">Connect with me on LinkedIn<a href="https://pk.linkedin.com/in/ghaniya-khan-138919308" ><FaLinkedin className="text-[22px] font-bold"/></a></h1>
          <h1  className="flex gap-2"> Explore my product website<a href="https://e-commerce-sigma-tan.vercel.app/"><MdOutlineProductionQuantityLimits className="text-[22px] font-bold "/></a></h1>
          </div>
          {/* <div className=" gap-10 flex text-xl  ml-12">
          <BiSolidLike className="text-xl"/>
            <h1 className="flex text-[15px] scroll-pl-16">1.5k </h1>
            <BiSolidDislike />
          </div> */}
          </li>
          {comments.map((cmt, index) => (
            <li key={index} className="bg-myverydarkpink/30  p-2 rounded-lg shadow-sm">
              <h1 className='text-myverydarkpink font-bold underline'> You:</h1>
              {cmt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentSection;
