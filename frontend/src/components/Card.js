import React from 'react';
import { useNavigate } from 'react-router-dom';
import'./Card.css';

const cardData = [
  {
    image: "https://th.bing.com/th/id/OIP.UOOfzDdCC_RNNHn4xY-7PwHaIl?rs=1&pid=ImgDetMain",
    title: "Wedding Decor",
    path: "/WeddingDecor"
  },
  {
    image: "https://i0.wp.com/runiq.in/wp-content/uploads/2022/01/A-Beautiful-Swan-Lake-Christening.jpeg?ssl=1",
    title: "Naming Ceremony",
    path: "/NamingCeremony"
  },
  {
    image: "https://i.pinimg.com/originals/45/a1/4d/45a14de282f5b18961465a854963b7e8.png",
    title: "Birthday Parties",
    path: "/BirthdayParties"
  },
  {
    image: "https://mavenprodcontent.blob.core.windows.net/media/LNSpecialEvents/Blog/August%202018/Overhead-floor-space-corp-event.jpg",
    title: "Product Launch",
    path: "/ProductLaunch"
  },
];

function Card() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className='card-container'>
      {cardData.map((card, index) => (
        <div
          key={index}
          className='card'
          onClick={() => handleCardClick(card.path)}
          style={{ cursor: 'pointer' }}
        >
          <img src={card.image} alt={card.title} className='card-image' />
          <div className="card-content">
            <h3 className='card-title'>{card.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
