// App.js

import React, { useState, useEffect } from "react";
import "./App.css"; // Import the CSS file

// Mock data based on the provided structure
const mockData = [
  {
    "id": 1,
    "name": "Item 1",
    "description": "Description for Item 1",
    "image": "https://via.placeholder.com/150/FF5733/000000"
  },
  {
    "id": 2,
    "name": "Item 2",
    "description": "Description for Item 2",
    "image": "https://via.placeholder.com/150/3498db/000000"
  },
  {
    "id": 3,
    "name": "Item 3",
    "description": "Description for Item 3",
    "image": "https://via.placeholder.com/150/2ecc71/000000"
  },
  {
    "id": 4,
    "name": "Item 4",
    "description": "Description for Item 4",
    "image": "https://via.placeholder.com/150/e74c3c/000000"
  },
  {
    "id": 5,
    "name": "Item 5",
    "description": "Description for Item 5",
    "image": "https://via.placeholder.com/150/9b59b6/000000"
  },
  {
    "id": 6,
    "name": "Item 6",
    "description": "Description for Item 6",
    "image": "https://via.placeholder.com/150/f1c40f/000000"
  },
  {
    "id": 7,
    "name": "Item 7",
    "description": "Description for Item 7",
    "image": "https://via.placeholder.com/150/2c3e50/000000"
  },
  {
    "id": 8,
    "name": "Item 8",
    "description": "Description for Item 8",
    "image": "https://via.placeholder.com/150/34495e/000000"
  },
  {
    "id": 9,
    "name": "Item 9",
    "description": "Description for Item 9",
    "image": "https://via.placeholder.com/150/16a085/000000"
  },
  {
    "id": 10,
    "name": "Item 10",
    "description": "Description for Item 10",
    "image": "https://via.placeholder.com/150/d35400/000000"
  },
  {
    "id": 11,
    "name": "Item 11",
    "description": "Description for Item 11",
    "image": "https://via.placeholder.com/150/FF5733/000000"
  },
  {
    "id": 12,
    "name": "Item 12",
    "description": "Description for Item 12",
    "image": "https://via.placeholder.com/150/3498db/000000"
  },
  {
    "id": 13,
    "name": "Item 13",
    "description": "Description for Item 13",
    "image": "https://via.placeholder.com/150/2ecc71/000000"
  },
  {
    "id": 14,
    "name": "Item 14",
    "description": "Description for Item 14",
    "image": "https://via.placeholder.com/150/e74c3c/000000"
  },
  {
    "id": 15,
    "name": "Item 15",
    "description": "Description for Item 15",
    "image": "https://via.placeholder.com/150/9b59b6/000000"
  },
  {
    "id": 16,
    "name": "Item 16",
    "description": "Description for Item 16",
    "image": "https://via.placeholder.com/150/f1c40f/000000"
  },
  {
    "id": 17,
    "name": "Item 17",
    "description": "Description for Item 17",
    "image": "https://via.placeholder.com/150/2c3e50/000000"
  },
  {
    "id": 18,
    "name": "Item 18",
    "description": "Description for Item 18",
    "image": "https://via.placeholder.com/150/34495e/000000"
  },
  {
    "id": 19,
    "name": "Item 19",
    "description": "Description for Item 19",
    "image": "https://via.placeholder.com/150/16a085/000000"
  },
  {
    "id": 20,
    "name": "Item 20",
    "description": "Description for Item 20",
    "image": "https://via.placeholder.com/150/d35400/000000"
  },
  {
    "id": 21,
    "name": "Item 21",
    "description": "Description for Item 21",
    "image": "https://via.placeholder.com/150/FF5733/000000"
  },
  {
    "id": 22,
    "name": "Item 22",
    "description": "Description for Item 22",
    "image": "https://via.placeholder.com/150/3498db/000000"
  },
  {
    "id": 23,
    "name": "Item 23",
    "description": "Description for Item 23",
    "image": "https://via.placeholder.com/150/2ecc71/000000"
  },
  {
    "id": 24,
    "name": "Item 24",
    "description": "Description for Item 24",
    "image": "https://via.placeholder.com/150/e74c3c/000000"
  },
  {
    "id": 25,
    "name": "Item 25",
    "description": "Description for Item 25",
    "image": "https://via.placeholder.com/150/9b59b6/000000"
  }
];

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal

  const fetchData = (page, limit) => {
    setIsLoading(true);
    setError(null); // Clear any previous errors
    // Simulate fetching data with a delay to mimic API behavior
    setTimeout(() => {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const data = mockData.slice(startIndex, endIndex);
      setItems((prevItems) => [...prevItems, ...data]);
      setPage(page + 1);
      setIsLoading(false);
    }, 1000); // Simulated delay of 1 second
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
      !isLoading
    ) {
      fetchData(page, 10);
    }
  };

  useEffect(() => {
    fetchData(page, 10);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add an empty dependency array to ensure this effect runs only once

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true); // Open the modal when an item is clicked
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="container">
      <h1>Infinite Scrolling Demo</h1>
      <div className="item-list">
        {items.map((item) => (
          <div key={item.id} className="item" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div className="loading-spinner"></div>}
      {error && <div className="error-message">{error}</div>}
      {isModalOpen && selectedItem && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            <img src={selectedItem.image} alt={selectedItem.name} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
