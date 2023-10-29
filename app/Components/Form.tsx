import Image from "next/image"

 {/* Use formik! */}
const Form = () => {
  return (

            <div className='px-8 md:py-24 my-24 lg:mx-24 bg-gray-600 text-center text-white'>

              <div className="text-center">
                <div className="mx-auto">
                <Image
              alt="logo"
              src={'/Logos/MainIcon.svg'}
              width={75}
              height={75}
              className={'mx-auto block'}/>
                </div>

              </div>

                    <h3 className="text-3xl text-center">Subscribe to our newsletter</h3>
                    <p>Get monthly updates about Humanism to your inbox</p>
               
                    {/* <input type={'email'} placeholder={'enter your email'} className="md:w-96 bg-gray-100 p-2 rounded-md inline-block" /> */}
               
             <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIRCHbKzS4dRhnYp2xCXTJF9Ra-CADU2g0Iso8nq8em4VSiQ/viewform?usp=sf_link" target="_blank"><button className="rounded-md mx-2 mb-4 py-2 px-8 text-white rounded-md bg-gradient-to-r from-pink-600 to-yellow-400 mt-4 hover:bg-black ">Subscribe</button></a>
            </div>



  )
}




export default Form