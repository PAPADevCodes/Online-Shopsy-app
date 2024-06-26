

import imag1 from "../../assets/421274287_753953766786060_3217210216668698656_n.jpg"
import imag2 from "../../assets/421440787_241609228982645_7822536286315392712_n.jpg"
import imag3 from "../../assets/original-abe6f92cffda50ac19e46b980b2c6c47.jpg"
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: imag1,
        title: "Upto 50% off on all Women's Wear",
        description: "  Lorem ipsum dolor sit met consectetur adipisicing elit. Nesciunt, sapiente animi magni quaerat dignissimos corrupti beatae temporibus eum est debitis saepe rem a ad magnam harum blanditiis ut silt. Dolores."
    },
    {
        id: 2,
        img: imag2,
        title: "Upto 30% off on all Women's Wear",
        description: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sapiente animi magni quaerat dignissimos corrupti beatae temporibus eum est debitis saepe rem a ad magnam harum blanditiis ut sint. Dolores."
    },
    {
        id: 3,
        img: imag3,
        title: "Upto 20% off on all Women's Wear",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Iusto ipsa quo repellat maxime in obcaecati necessitatibus facilis odio exercitationem quibusdam maiores magnam, praesentium commodi aliquam ut reiciendis at vitae sapiente?"

    },
]
const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        Infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    }
    return (
        <div className='relative overflow-hidden min-h-[50px] sm:min-h-[550px] bg-gray-100 dark:bg-gray-950 dark:text-[#ffff]
    justify-center items-center duration-300 flex'>
            {/* background pattern */}
            <div className='h-[650px] w-[650px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>
            </div>
            {/* hero Section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}
                className=""
                >
                    {ImageList.map((data) => (

                        <div>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>

                                <div className='flex gap-4 flex-col justify-center pt-12 sm:pt-0 sm:text-left order-2 sm:order-1 relative z-10'>
                                    <h1 className='text-5xl sm:text-6xl
                        lg:text-7xl font-bold
                        '
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"

                                    >{data.title}</h1>
                                    <p className='text-[11px] w-[459px] max-sm:w-full'
                                        data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="100"
                                    >{data.description}</p>
                                    <div data-aos="fade-up"
                                        data-aos-duration="500"
                                        data-aos-delay="300"
                                    >
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-[#ffff] py-2 px-4 rounded-full'>Order Now</button>

                                    </div>
                                </div>
                                {/* Image section */}
                                <div className='order-1 sm:order-2'>
                                    <div className='relative z-10'
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                    >
                                        <img src={data.img} alt="" className='w-[300px] h-[250px] sm:h-[400px] sm:w-[450px] scale-125
                            object-cover mx-auto'/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
export default Hero