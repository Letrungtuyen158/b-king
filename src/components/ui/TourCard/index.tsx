import { TourInfo } from "./TourInfo";
import { DecorativeDivider } from "./DecorativeDivider";
import { PricingSection } from "./PricingSection";
import { Fragment } from "react";

interface TourCardProps {
  image?: string;
  title?: string;
  description?: string;
  starIconSrc?: string;
  centerIconSrc?: string;
  price?: string;
  duration?: string;
  routing?: string;
  tourStyle?: string;
  tourStart?: string;
  tourEnd?: string;
  tripDuration?: string;
}

export const TourCard: React.FC<TourCardProps> = ({
  image = "",
  title = "Heritage Tour Binh Chuan",
  description = "Routing: Ha Noi - Ha Long - Ha Noi\nTour Style: Nature, Culture & History Tour\nTour Start: In Ha Noi / Tour End: In Ha Noi\nTrip Duratuion: 2Days 1Night",
  price = "$50",
  duration = "2Days 1Night",
  routing,
  tourStyle,
  tourStart,
  tourEnd,
  tripDuration,
}) => {
  const formattedDescription = description.split("\n").map((line, index) => (
    <Fragment key={index}>
      {line}
      {index < description.split("\n").length - 1 && <br />}
    </Fragment>
  ));

  return (
    <div className='flex flex-col items-start group'>
      <article className='overflow-hidden p-4 bg-white rounded-lg shadow-[0px_0px_0px_2px_rgba(230,243,255,1.00)] outline outline-1 outline-offset-[-1px] outline-blue-100'>
        <div className='overflow-hidden'>
          <img
            src={image}
            className='object-cover group-hover:scale-110 transition-all duration-300 rounded aspect-[4/3] size-full'
            alt={title}
          />
        </div>
        <div className='flex flex-col mt-4'>
          <TourInfo
            title={title}
            description={description}
            routing={routing}
            tourStyle={tourStyle}
            tourStart={tourStart}
            tourEnd={tourEnd}
            tripDuration={tripDuration}
          />
          <DecorativeDivider />
          <PricingSection price={price} duration={duration} />
        </div>
      </article>
    </div>
  );
};

export default TourCard;
