import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Productcard.css';


function Productcard() {
  const [cardData, setCardData] = useState([]); 
  const [editingCard, setEditingCard] = useState(null); 
  const [newTitle, setNewTitle] = useState(''); 
  const [newImage, setNewImage] = useState(''); 
  const navigate = useNavigate();

  // Fetch all cards on component mount
  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = () => {
    axios
      .get('http://localhost:3500/api/auth/getproductlaunch')
      .then((response) => {
        setCardData(response.data.services || []);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        alert('Failed to fetch cards');
      });
  };

  // Navigate to card details page  
  const handleCardClick = (path) => {
    navigate(path);
  };

  // Delete a card
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3500/api/auth/deleteproductlaunch/${id}`)
      .then(() => {
        setCardData((prevData) => prevData.filter((card) => card._id !== id));
        alert('Card deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting card:', error);
        alert('Failed to delete card');
      });
  };

  // Start adding a new card
  const handleNew = () => {
    setEditingCard(null);
      setNewTitle('');
      setNewImage('');
  };

  // Add a new card (POST)
  const handleAdd = () => {
    if (!newTitle || !newImage) {
      alert('Please provide both a title and an image URL.');
      return;
    }

    axios
      .post('http://localhost:3500/api/auth/productlaunch', {
        title: newTitle,
        url: newImage,
      })
      .then((response) => {
        setCardData((prevData) => [...prevData, response.data.newproduct]);
        setEditingCard(null);
        setNewTitle('');
        setNewImage('');
        alert('Card added successfully');
      })
      .catch((error) => {
        console.error('Error adding card:', error);
        alert('Failed to add card');
      });
  };

  // Edit an existing card (PUT)
  const handleEdit = () => {
    if (!newTitle || !newImage) {
      alert('Please provide both a title and an image URL.');
      return;
    }

    axios
      .put(`http://localhost:3500/api/auth/updateproductlaunch/${editingCard._id}`, {
        title: newTitle,
        url: newImage,
      })
      .then(() => {
        setCardData((prevData) =>
          prevData.map((card) =>
            card._id === editingCard._id ? { ...card, title: newTitle, url: newImage } : card
          )
        );
        setEditingCard(null);
        setNewTitle('');
        setNewImage('');
        alert('Card updated successfully');
      })
      .catch((error) => {
        console.error('Error updating card:', error);
        alert('Failed to update card');
      });
  };

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <div key={card._id} className="card" style={{ cursor: 'pointer' }}>
          <img
            src={card.url}
            alt={card.title}
            className="card-image"
            onClick={() => handleCardClick(`/details/${card._id}`)}
          />
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <button
              style={{ backgroundColor: 'lightgreen', marginRight: '10px', borderColor: 'white' }}
              onClick={() => {
                setEditingCard(card);
                setNewTitle(card.title);
                setNewImage(card.url);
              }}
            >
              Update
            </button>
            <button
              style={{ backgroundColor: 'lightgreen', marginRight: '10px', borderColor: 'white' }}
              onClick={() => handleDelete(card._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="card" style={{ cursor: 'pointer',    alignContent:'center' }} onClick={() => {
                setEditingCard({_id:'0',title:'',url:''});
                setNewTitle('');
                setNewImage('');
              }}>
          <div className="card-content" >
              <h4>+</h4>
              <h4>Add Service</h4>
          </div>
        </div>
      {(editingCard || newTitle || newImage) && (
        <div className="edit-form">
          <h3>{editingCard._id!=='0' ? 'Edit Card' : 'New Card'}</h3>
          <label>
            Title:
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </label>
          
          <div className="cardbtn">
            <button
              style={{ backgroundColor: 'lightgreen', marginRight: '10px', borderColor: 'white' }}
              onClick={editingCard._id!=='0' ? handleEdit : handleAdd}
            >
              {editingCard._id!=='0' ? 'Update' : 'Add'}
            </button>
            <button
              style={{ backgroundColor: 'lightgreen', marginRight: '10px', borderColor: 'white' }}
              onClick={() => {
                setEditingCard(null);
                setNewTitle('');
                setNewImage('');
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Productcard;
