import React, { useEffect } from 'react';

const Eyes = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
        const pupil = eye.querySelector('.pupil');
        const pupilX = Math.cos(angle) * 10;
        const pupilY = Math.sin(angle) * 10;
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="eye-container">
      <div className="eye">
        <div className="pupil"></div>
      </div>
      <div className="eye">
        <div className="pupil"></div>
      </div>
    </div>
  );
};

export default Eyes;