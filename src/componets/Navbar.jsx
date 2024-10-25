import React from 'react'
import { MdArrowRight } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { FaPinterest } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div>
        <img  className='ml-[70px] mt-[40px]' src="https://giftstore.netlify.app/assets/images/logo.png"></img>
        <div className='aaa'>
          <p>Home</p>
          <p>About Us</p>
          <p>Service</p>
          <p>Blog</p>
          <button className='bbb'>Gift Finder</button>
        </div>
      </div>
      <div className='  bg-[#F1F1F2] pb-[11%] mt-[-70px]'>
        <div className='ml-[400px]  '>
          <div className='ml-[-240px] text-[15px] mt-[100px]'>
            <h1 className='pt-[90px] text-[50px] font-bold'>Find a gift for<br /> your wife or <br />girlfriend</h1>
            <p className='mt-[30px] text-[20px]'>
              Struggling to find a gift for your wife or <br />
              girlfriend? No problem!<br />
            </p>
            <button className=' btn1 mt-[25px] bg-[#f7941E] ' >Gift Find Now</button>
          </div>
          <div className='ml-[30%] mt-[-470px]'>
            <img src="https://giftstore.netlify.app/assets/images/Background.png" width={"800px"} ></img>
          </div>
        </div>
        <div className='  ml-[px] '>
          <img src="https://giftstore.netlify.app/assets/images/Media.png" width={"685px"} ></img>
          <div className='ml-[62%] mt-[-465px]'>
            <h1 className='text-[50px] font-bold'>How we work</h1>
            <p className='text-[20px]'>
              we've actually already asked hundreds of <br />
              women what they want , and made a data<br />base with the results.All you have to do is<br /> take our short survey that only takes seco<br />nds, and our
              proprietary algorithm will ma<br />tch you with a few perfect gift options.
            </p>
            <button className=' btn1 mt-[25px] bg-[#f7941E] ' >LEARN MORE</button>
          </div>
        </div>
      </div>
      <div className="nnn" >
        <p className="rr font-bold" style={{ textAlign: "center", paddingTop: "20px", fontSize: "30px" }}>Gift for all Occasions</p>
        <p className='rr' style={{ textAlign: "center" }}>"Try web app to find the best gift for all Occasions"</p>
        <div className='cont2'>
          <div className='container1'>
            <img src="https://giftstore.netlify.app/assets/images/card4.png" />
            <p className='text-[20px] mt-[20px] ml-[20px]'>Birthday</p>
            <p className='pt-[70px] flex ml-[20px]'> See More <MdArrowRight className='mt-[6px]' /></p>
          </div>
          <div className='container1'>
            <img src="https://giftstore.netlify.app/assets/images/card3.png" />
            <p className='text-[20px] mt-[20px] ml-[20px]'>Anniversary</p>
            <p className='pt-[70px] flex  ml-[20px]'> See More <MdArrowRight className='mt-[6px]' /></p>
          </div>
          <div className='container1'>
            <img src="https://giftstore.netlify.app/assets/images/card2.png" />
            <p className='text-[20px] mt-[20px] ml-[20px]'>Valentine's Day</p>
            <p className='pt-[70px] flex  ml-[20px]'> See More <MdArrowRight className='mt-[6px]' /></p>
          </div>
          <div className='container1'>
            <img src="https://giftstore.netlify.app/assets/images/card1.png" width={"270px"} />
            <p className='text-[20px] mt-[20px] ml-[20px]'>Christmas</p>
            <p className='pt-[70px] flex ml-[20px] '> See More <MdArrowRight className='mt-[6px]' /></p>
          </div>
        </div>
      </div>
      <div className=' bg-[#F7941E] h-[230px] mt-[100px] text-[35px] '>
        <h3 className='pt-[70px] ml-[200px] font-bold'>Ready to get started?</h3>
        <p className='text-[36px] ml-[200px] mt-[-10px]'>
          Sign up or contact us
        </p>
        <div className='  ml-[800px] mt-[-70px] '>
          <button className='vvv' >Find Gift Now</button>
          <button className='vvv   ml-[10px]' >How it Works</button>
        </div>
      </div>
      <div className='text-center mt-[80px]'>
        <h3 className='text-[30px] font-bold'>Our Best Blogs Ever</h3>
        <p>"Try our blog to find the best tips and tricks to select your gift"</p>
      </div>
      <div className='bg-[#201f1f] w-[1150px] ml-[100px] h-[370px] mt-[70px]'>
        <img src="https://giftstore.netlify.app/assets/images/couple.png" width={"400px"}></img>

        <div className='ml-[500px] mt-[-300px] text-white'>
          <p>
            Mr.John Doe
          </p>
          <p className='text-[45px] '>The best way to <br /> wish  your wife</p>
          <p className='mt-[30px]'>Read More</p>
        </div>
      </div>
      <div className="ooo" style={{ display: "flex" }}>
        <div className="uuu" style={{ marginLeft: '230px' }}>
          <p className='text-[25px] font-bold'>Database to find the gifts for you  girlfriend</p>
          <p>
            Lorem ipsum dolor sit amet , consectetur<br /> elit,
            sed do eiusmod tempor incididunt ut labore et dolore..
            <h5 className='mt-[50px]'>Read More</h5>
          </p>
        </div>
        <div className="uuu" style={{ marginLeft: "20px" }}>
          <p className='text-[25px] font-bold'>How to Artificial Intelligence read your mind to find the best gift</p>
          <p>
            Lorem ipsum dolor sit amet , consectetur<br /> elit,
            sed do eiusmod tempor incididunt ut labore et dolore..
            <h5 className='mt-[45px]'>Read More</h5>
          </p>
        </div>
      </div>
      <div className='bg-[#FAFAFA] pb-[60px] '>
        <div className='flex ml-[375px] mt-[100px] pt-[100px]'>
          <p>Home</p>
          <p className='ml-[40px]'>About</p>
          <img className='ml-[150px]' src="https://giftstore.netlify.app/assets/images/footer-logo.png"></img>
          <p className='ml-[110px]'>Service</p>
          <p className='ml-[40px]'>Blog </p>
        </div>
        <hr className='ttt ' />
        <div className='rrr'>
          <FaFacebook />
          <AiFillTwitterCircle />
          <FaCameraRetro />
          <SiYoutubemusic />
          <FaPinterest />
        </div>
        <p className='ml-[43%] mt-[70px]'> ⓒ2010 - 2020 Privacy - Terms</p>
      </div>
    </div>
  )
}
export default Navbar



