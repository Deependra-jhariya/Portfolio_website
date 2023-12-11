import React from 'react'

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.description}>
          Hello! I'm Deependra, a passionate Mobile-Application developer with a keen interest in creating
          user-friendly and responsive websites and Mobile Application. I enjoy turning ideas into reality through
          clean and efficient code.
        </p>
        <p style={styles.description}>
          My skills include HTML, CSS, JavaScript, React-native,ReactJs and various frontend libraries and frameworks
          like React. I'm always eager to learn and stay updated with the latest technologies in
          the ever-evolving field of web development.
        </p>
      </div>
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: 'black',
    padding: '50px 0',
    textAlign: 'center',
  },
  content: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2.5em',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.2em',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default About