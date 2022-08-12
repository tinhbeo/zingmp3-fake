import { images } from 'static/data';
const SliderHome = () => {
    return (
        <div className="flex overflow-hidden pt-5 -ml-5 -mr-5">
            {images.map((image, index) => (
                <div key={index} className="w-1/3 flex-shrink-0 p-[15px]">
                    <img className="rounded-md" src={image} alt="" />
                </div>
            ))}
        </div>
    );
};

export default SliderHome;
