import React, { Component } from "react";
import cardBackgroundImage from '../assets/depositphotos_38252213-stock-photo-gold-leaf-on-buddha-sculpture.jpg';

class Tasks extends Component {
  render() {
    const tasksStyle = {
      backgroundImage: `url(${cardBackgroundImage})`,
      padding: '20px',
      boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.2), inset 0 0 10px rgba(0, 0, 0, 0.3)',
      color: 'white',
      fontWeight: '800',
      textShadow: '0 0 10px rgba(0, 0, 100, 0.5)',
      zIndex: 1,
    };

    const submitButtonStyles = {
      marginTop: '10px',
      padding: '5px 10px',
      backgroundColor: '#1b5060',
      color: 'white',
    };

    const inputBox = {
      width: '650px',
      padding: '5px',
      margin: '5px',
      textAlign: 'left',
    };

    return (
      <div className="tasks" style={tasksStyle}>
        <div className="header">
          <form>
            <input placeholder="Enter Task" style={inputBox} />
            <button type="submit" style={submitButtonStyles}>Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Tasks;
