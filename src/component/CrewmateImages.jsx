import blue from "../assets/blue.png";
import green from "../assets/green.png";
import pink from "../assets/pink.png";
import purple from "../assets/purple.png";
import red from "../assets/red.png";

const CrewmateImages = () => {
    return (
        <div className='flex flex-col sm:flex-row  gap-0 m-0 pt-20'>
            <img src={blue} className="w-[180px]" />
            <img src={red} className="w-[160px]" />
            <img src={green} className="w-[240px]" />
            <img src={pink} className="w-[220px]" />
            <img src={purple} className="w-[160px]" />
        </div>
    )
};

export default CrewmateImages;