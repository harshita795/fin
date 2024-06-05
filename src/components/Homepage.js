

export default function Homepage() {
  return (
    <div className='md:container md:min-h-screen'>

      {/* Navbar */}

      <nav className="flex md:items-center md:mx-36 md:my-6 my-12 ml-20">
        <img className="
        cursor-pointer
        hover:scale-110
        ease-out
        duration-300
        "
          src='/logo.svg' alt='logo' />
        <ul className="
        invisible
        md:visible
        md:font-clash-display
        md:font-bold
        md:list-none
        md:text-xl
        md:space-x-8
        md:m-auto
        ">
          <li className="
          list-none
          inline-block
          hover:scale-110
          ease-out
          duration-300
          "><a href='#' className="
          text-customRed
          font-bold
          ">Home</a></li>
          <li className="
          list-none
          blue
          inline-block
          hover:scale-110
          ease-out
          duration-300
          "><a href='#' className="
          font-medium
          ">About Us</a></li>
          <li className="
          list-none
          inline-block
          hover:scale-110
          ease-out
          duration-300
          "><a href='#' className="
          font-medium
          ">Pricing</a></li>
          <li className="
          list-none
          inline-block
          hover:scale-110
          ease-out
          duration-300
          "><a href='#' className="
          font-medium
          ">Features</a></li>
        </ul>
        <button className="
        bg-black
        text-white
        w-44
        h-16
        rounded
        hover:bg-gray-800
        ">Download</button>
      </nav>

      {/* Hero Section */}

      <section>
        <div className="
      md:flex
      md:ml-0
      ml-20
      ">
          <div className="
      md:mx-36
      md:my-20
      ">
            <h1 className="
        font-bold
        md:text-6xl
        text-4xl
        capitalize
        mb-2
        ">make the best<br />financial decisions</h1>
            <p className="
        md:text-lg
        font-medium
        ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br />faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <button className="
        bg-black
        text-white
        w-44
        h-16
        rounded
        hover:bg-gray-800
        ">Get Started<img src="/arrow.svg" alt="arrow" className="
        inline-block
        p-2
        animate-bounce
        " /></button>
            <div className="
        inline-block
        p-10
        font-medium
        "><img src="/play.svg" alt="play" className="
        inline-block
        p-2
        hover:scale-110
        ease-out
        duration-300
        "/>Watch Video</div>
            <img src="/Star.svg" alt="Star" className="
          w-12
          rotate-45
          ml-28
          absolute
          animate-ping
        " />
            <img src="/hero tape.svg" alt="hero tape absolute" className="
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
          " />
          </div >

          <div className="
        md:mx-4
        md:-my-12
        mt-20
        md:mt-0
        cursor-pointer
        ">
            <img src="/iPhone-1.svg" alt="iphone" className=" 
          absolute
          rotate-15
          z-20
          md:my-2
          md:-mx-16
          -my-20
          -mx-20
          hover:scale-110
          ease-out
          duration-300
          " />
            <img src="/iPhone-2.svg" alt="iphone" className=" 
          absolute
          rotate-15
          z-10
          md:my-20
          md:mx-14
          hover:scale-110
          ease-out
          duration-300
          " />
            <img src="/phone.svg" alt="ellipse" className="
          absolute
          rotate-15
          z-0
          md:my-0
          md:mx-10
          -mx-1
          -my-5
          hover:scale-110
          ease-out
          duration-300
          " />
          </div>
        </div>
      </section>


      {/* Features Section */}


      <section>
        <div className="
      md:flex
      md:space-x-32
      ml-20
      md:ml-0
      ">
          <div className="
          md:mx-10
          md:-my-24
          mt-80
          invisible
          md:visible
          ">
            <img src="/features phone.svg" alt="phone" className="
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            "/>
          </div>

          <div>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            text-customRed
            tracking-widest
            ">FEATURES</p>
            <h1 className="
            font-bold
            md:text-5xl
            text-4xl
            font-clash-display
            leading-tight
            mb-8
            ">Uifry Premium</h1>
            <h6 className="
            font-semibold
            md:text-lg
            text-normal
            font-clash-display
            leading-10
            mb-3
            "><img src="/feature-1.svg" alt="feature" className="
            inline-block
            mr-3
            animate-pulse
            "/>Budgeting Intervals</h6>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mb-5
            ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br />faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <h6 className="
            font-semibold
            md:text-lg
            text-normal
            font-clash-display
            leading-10
            mb-3
            "><img src="/feature-2.svg" alt="feature" className="
            inline-block
            mr-3
            animate-pulse
            "/>Budgeting Intervals</h6>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mb-5
            ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br />faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <h6 className="
            font-semibold
            md:text-lg
            text-normal
            font-clash-display
            leading-10
            mb-3
            "><img src="/feature-3.svg" alt="feature" className="
            inline-block
            mr-3
            animate-pulse
            "/>Budgeting Intervals</h6>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            ">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br />faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
          </div>
        </div>
      </section>


      {/* Advanatages Section */}


      <section>
        <div className="
      md:flex
      md:space-x-30
      ml-20
      md:ml-0
      mt-20
      md:mt-0
      ">

          <div className="
          md:mx-36
          md:my-44
          ">
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            text-customRed
            tracking-widest
            ">ADVANTAGES</p>
            <h1 className="
            font-bold
            md:text-5xl
            text-4xl
            font-clash-display
            leading-tight
            mb-8
            ">Why Choose Urifry?</h1>
            <h4 className="
            font-semibold
            md:text-3xl
            text-2xl
            "><img src="bell.svg" alt="bell" className="
            inline-block
            mr-3
            animate-ping
            "/>Clever Notifications</h4>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,<br />ultricies. In ultrices malesuada elit mauris etiam odio. Duis <br />tristique lacus, et blandit viverra nisl velit. Sed mattis <br />rhoncus, diam suspendisse sit nunc, gravida eu. Lectus <br />eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>



          <div>
            <img src="/advantage phone.svg" alt="phone" className="
          md:absolute
          hover:scale-110
          ease-out
          duration-300
          cursor-pointer
          " />
            <img src="/on Hold.svg" alt="phone" className="
          invisible
          md:visible  
          absolute
          mx-80
          my-72
          animate-pulse
          " />
          </div>


        </div>
      </section>


      {/* Customization Section */}


      <section>
        <div className="
      md:flex
      md:place-content-between
      ml-20
      md:ml-0
      ">
          <div className="
           md:mx-10
          ">
            <img src="/customize phone.svg" alt="phone" className="
            md:absolute
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            mt-5
            md:mt-0
            "/>
            <img src="/customize visa.svg" alt="visa" className="
            invisible
            md:visible
            absolute
            mx-64
            my-52
            animate-pulse
            " />
          </div>

          <div className="
          md:mx-28
          md:my-52
          ">
            <h4 className="
            font-semibold
            md:text-3xl
            text-2xl
            "><img src="fully customize.svg" alt="customize" className="
            inline-block
            mr-3
            animate-ping
            "/>Fully Customizable</h4>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">
              Arcu at dictum sapien, mollis. Vulputate sit id accumsan,<br />ultricies. In ultrices malesuada elit mauris etiam odio. Duis <br />tristique lacus, et blandit viverra nisl velit. Sed mattis <br />rhoncus, diam suspendisse sit nunc, gravida eu. Lectus <br />eget eget ac dolor neque lorem sapien, suspendisse aliquam.
            </p>
          </div>

        </div>
      </section>


      {/* Testimonials Section */}

      <section className="
      md:mx-10
      md:my-32
      ml-20
      mt-20
      ">
        <div className="
  text-center
        
        ">
          <p className="
          font-medium
          md:text-lg
          text-normal
          font-clash-display
          tracking-widest
          ">TESTIMONIAL</p>
          <h1 className="
            font-bold
            md:text-5xl
            text-4xl
            font-clash-display
            leading-tight
            mb-8
            ">What Our Users<br />Say About Us?</h1>
        </div>


        <div className="
        md:flex
        md:space-x-32
        ">


          <div>
            <img src="/testimonials.svg" alt="phone" className="
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            " />
          </div>

          <div className="
          md:my-44
          ">
            <p className="
            font-semibold
            md:text-3xl
            text-2xl
            capitalize
            ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            capitalize
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit <br />mauris etiam odio. Duis tristique lacus, et blandit <br />viverra nisl velit. Sed mattis rhoncus, diam <br />suspendisse sit nunc, gravida eu. Lectus eget eget <br />ac dolor neque lorem sapien, suspendisse aliquam.”</p>

            <div className="
          flex
          gap-2
          mt-5
          ">
              <img src="/testi-1.svg" alt="testimonial" className="
            inline-block
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            "/>
              <img src="/testi-2.svg" alt="testimonial" className="
            inline-block
            opacity-50
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            hover:opacity-100
            "/>
              <img src="/testi-3.svg" alt="testimonial" className="
            inline-block
            opacity-50
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            hover:opacity-100
            "/>
              <img src="/testi-4.svg" alt="testimonial" className="
            inline-block
            opacity-50
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            hover:opacity-100
            "/>
              <img src="/testi-5.svg" alt="testimonial" className="
            inline-block
            opacity-50
            hover:scale-110
            ease-out
            duration-300
            cursor-pointer
            hover:opacity-100
            "/>
            </div>
            <p className="
            font-semibold
            md:text-lg
            text-normal
            mt-5
            font-clash-display
            ">Nick Jonas</p>
          </div>
        </div>
      </section>


      {/* FAQ Section */}

      <section className="
      mb-32
      ml-20
      md:ml-0
      mt-20
      md:-mt-10
      ">
        <div className="
        md:mx-32
        ">
          <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            text-customRed
            tracking-widest
            ">FAQ</p>
          <h1 className="
            font-bold
            md:text-5xl
            text-4xl
            font-clash-display
            leading-tight
            mb-8
            ">Frequently Asked <br />Questions</h1>
        </div>

        <div className="
        flex
        place-content-center
        gap-10
        ">
          <div className="
          bg-customRed
          p-10
          rounded-lg
          text-white
          hover:animate-pulse
          cursor-pointer 
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className="
           bg-white
           p-10
           rounded-lg
           text-black 
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>

        <div className="
        flex
        place-content-center
        gap-10
        ">
          <div className="
          bg-white
          p-10
          rounded-lg
          text-black  
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className="
           bg-customRed
           p-10
           rounded-lg
           text-white 
           hover:animate-pulse
           cursor-pointer
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>

        <div className="
        flex
        place-content-center
        gap-10
        ">
          <div className="
          bg-customRed
          p-10
          rounded-lg
          text-white 
          hover:animate-pulse
          cursor-pointer
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
          <div className="
           bg-white
           p-10
           rounded-lg
           text-black 
          ">
            <p className="
           font-semibold
            md:text-3xl
            text-2xl
            capitalize
            font-clash-display
           ">the best financial accounting <br />app ever!</p>
            <p className="
            font-medium
            md:text-lg
            text-normal
            font-clash-display
            mt-5
            ">“Arcu at dictum sapien, mollis. Vulputate sit id <br />accumsan, ultricies. In ultrices malesuada elit mauris.</p>
          </div>
        </div>
      </section>


      {/* Advertisement Section */}

      <section className="
      mb-32
      ml-20
      md:ml-0
      ">
        <div className="
        flex
        place-content-center
        ">
          <img src="/ad.svg" alt="ad" className="
          hover:scale-110
          ease-out
          duration-300
          "/>
        </div>
      </section>


      {/* Footer Section */}

      <footer className="
      md:mx-32
      md:flex
      md:flex-row
      gap-24
      ml-20
      ">
        <div className="
        mb-10
        md:mb-0
        ">
          <img src="/logo.svg" alt="logo" className="
          hover:scale-110
          ease-out
          duration-300
          " />
          <p className="  
          font-semibold
          text-lg
          font-clash-display
          mt-5
          capitalize
          hover:scale-110
          ease-out
          duration-300
          "><img src="/email.svg" alt="email" className="
          inline-block
          mr-3
          "/>help@frybix.com</p>
          <p className="
          font-semibold
          text-lg
          font-clash-display
          mt-5
          capitalize
          hover:scale-110
          ease-out
          duration-300
          ">
            <img src="/telephone.svg" alt="phone" className="
            inline-block
            mr-3
            " />+1 234 456 678 89</p>
        </div>

        <div>
          <p className="
          font-semibold
          text-3xl
          mb-5
          ">Links</p>
          <ul>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Home</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">About Us</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Bookings</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Blogs</a></li>
          </ul>
        </div>

        <div>
          <p className="
          font-semibold
          text-3xl
          mb-5
          ">Legal</p>
          <ul>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Terms Of Use</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Privacy Policy</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="
          font-semibold
          text-3xl
          mb-5
          ">Product</p>
          <ul>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Take Tour</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Live Chat</a></li>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Reviews</a></li>
          </ul>
        </div>

        <div>
          <p className="
          font-semibold
          text-3xl
          mb-5
          ">Newsletter</p>
          <ul>
            <li className="
            mb-3
            "><a href="#" className="
            text-base
            font-medium
            ">Stay Up To Date</a></li>
            <input type="text" placeholder="Your email" className="
            bg-white
            text-black
            w-44
            h-16
            rounded
            outline-none
            "/>
            <button className="
        bg-black
        text-white
        w-44
        h-16
        rounded
        hover:bg-gray-800
        ">Subscribe</button>
          </ul>
        </div>
      </footer>

      <hr className="
      md:mx-32
      my-10
      border-2
      ml-20
      "/>

      <p className="
      text-lg
      font-medium
      mb-10
      text-center
      ml-20
      ">Copyright 2022 Uifry.Com All Rights Reserved</p>

















    </div >
  )
}
