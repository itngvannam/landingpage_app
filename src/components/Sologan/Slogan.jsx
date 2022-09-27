import Cards from '../../assets/desktop/isocard.svg'
const Slogan = () => {
    return (
        <section className="text-[36px] my-14 font-extrabold  md:grid md:grid-cols-3 md: items-center md:text-[48px]"   >
            <div className="text-center md: col-span-2">
                <p>
                    Earn <span className="text-purple-300 "> More</span>
                </p>
                <p>
                    Pay Less
                </p>
                <button className="md: px-[12px] md:py-[8px] text-[20px] px-6 py-[6px] mt-[27px] rounded-full bg-purple-400 cursor-pointer hover:bg-purple-500 transition-all duration-300">Start</button>
            </div>
            <div className='    '>
                <img src={Cards} alt='Cards' />
            </div>

        </section>

    );
}
export default Slogan;