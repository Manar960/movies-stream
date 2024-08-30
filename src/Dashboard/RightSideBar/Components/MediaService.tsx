import icon1 from '../../../assets/Rectangle 17.png';
import icon2 from '../../../assets/Rectangle 18.png';
import icon3 from '../../../assets/Rectangle 19.png';
import icon4 from '../../../assets/Rectangle 20.png';
import icon5 from '../../../assets/Rectangle 21.png';
import icon6 from '../../../assets/Rectangle 22.png';
import React from 'react';

interface MediaServiceItemProps {
  icon: string;
  name: string;
}

const MediaServiceItem: React.FC<MediaServiceItemProps> = ({ icon, name }) => {
  return (
    <div className="m-services d-flex mb-2">
      <img src={icon} alt={`${name} Icon`} />
      <h4>{name}</h4>
    </div>
  );
};

const services: MediaServiceItemProps[] = [
  { icon: icon1, name: 'Apple Tv' },
  { icon: icon2, name: 'Disney Tv' },
  { icon: icon3, name: 'HBO Max' },
  { icon: icon4, name: 'Hulu' },
  { icon: icon5, name: 'Netflix' },
  { icon: icon6, name: 'Prime' },
];

const MediaService: React.FC = () => {
  return (
    <div className="mb-5">
      <h3 className="fs-5 pt-2">MediaService</h3>
      <div className="media pt-5">
        {services.map((service, index) => (
          <MediaServiceItem
            key={index}
            icon={service.icon}
            name={service.name}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaService;