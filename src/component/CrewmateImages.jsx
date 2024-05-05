import blue from "../assets/blue.png";
import green from "../assets/green.png";
import pink from "../assets/pink.png";
import purple from "../assets/purple.png";
import red from "../assets/red.png";

const CrewmateImages = () => {
    return (
        <div className='flex md:flex-row flex-col gap-0 m-0 md:pt-20 pt-2'>
            <img src={blue} className="md:w-[180px] sm:w-[100px]" />
            <img src={red} className="md:w-[160px] sm:w-[120px]" />
            <img src={green} className="md:w-[240px] sm:w-[160px]" />
            <img src={pink} className="md:w-[220px] sm:w-[160px]" />
            <img src={purple} className="md:w-[160px] sm:w-[100px]" />
        </div>
    )
};

export default CrewmateImages;