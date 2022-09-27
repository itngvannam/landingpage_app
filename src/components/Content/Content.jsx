import { AiOutlineUser } from 'react-icons/ai';
import { BsCreditCardFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useSpring, animated } from 'react-spring';

const Content = () => {

    const customerAnim = useSpring({ customers: 218, from: { customers: 0 } });

    const cardIssuedAnim = useSpring({ cardIssuedAnims: 248, from: { cardIssuedAnims: 0 } });
    return (

        <section className="md:grid md:grid-cols-2 md: items-center">
            <div className="md:ml-[200px]  mx-auto bg-purple-400 ml-[65px] flex rounded-3xl	 flex-col items-center mr-[70px]">
                <div className='mt-[16px] flex items-start '>
                    <AiOutlineUser size={'30px'} className='mt-[20px] mr-3' />

                    <div className='text-[26px]'>
                        <animated.div>
                            {customerAnim.customers.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className='text-[16px] mb-[30px]'> Customers</p>
                    </div>
                </div>
                <div className=' ml-4 mt-[5px] flex items-start '>
                    <BsCreditCardFill size={'30px'} className='mt-[20px] mr-3' />
                    <div className='text-[26px]'>
                        <animated.div>
                            {cardIssuedAnim.cardIssuedAnims.to((val) => Math.floor(val))}
                        </animated.div>
                        <p className='text-[16px] mb-[30px]'> Cards Issued</p>
                    </div>

                </div>
            </div>
            <div className='md: items-center text-[13px] flex flex-col w-[100%] mt-[20px] font-semibold'>
                <p className=" flex gap-8 ml-[50px] mr-[30px] items-center mb-[20px]" >
                    <AiFillCheckCircle size={'40px'} color='#4ade80 ' />
                    <p className='text-[14px]'> Card reports sent to your phone every weeks</p>

                </p>
                <p className=' flex gap-8 ml-[50px] mr-[30px] items-center mb-[20px]'  >
                    <AiFillCheckCircle size={'40px'} color='#4ade80 ' />
                    <p className='text-[14px]'> Card reports sent to your phone every weeks</p>

                </p>
                <p className=' flex gap-8 ml-[50px] mr-[30px] items-center mb-[20px]' >
                    <AiFillCheckCircle size={'40px'} color='#4ade80 ' />
                    <p className='text-[14px]'> Card reports sent to your phone every weeks</p>

                </p>
            </div>

        </section>
    );

}
export default Content;