import { useState } from 'react';

const DraggableDiv = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    // Check if the event target is the parent element itself (not a child element)

    setIsDragging(true);
    setStartPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    setPosition({
      x: event.clientX - startPosition.x,
      y: event.clientY - startPosition.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '100px',
        height: '100px',
        backgroundColor: 'lightblue',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      Drag me!
      <div style={{ width: '50px', height: '50px', backgroundColor: 'red' }}>
        {/* A child element inside the draggable div */}
      </div>
    </div>
  );
};

export default DraggableDiv;
