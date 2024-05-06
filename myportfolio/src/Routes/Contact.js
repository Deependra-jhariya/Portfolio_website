import React from 'react'
const Contact = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.heading}>Contact Me</h2>
        <p style={styles.description}>
          Have a project in mind or just want to connect? Feel free to reach out to me. I'm always
          open to new opportunities and collaborations.
        </p>
        <div style={styles.contactInfo}>
          <p style={styles.infoItem}>
            📧 Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmzfWPLZXDrXxGdVtSVSBgpDfcTGpVMThJrfVKZsgXJDfrdqPLPXxSbBQrLxpfBCmbBXNx">deependrajhariya@gmail.com</a>
          </p>
          <p style={styles.infoItem}>
            🌐 Website: <a href="https://www.yourwebsite.com" target="_blank" rel="noopener noreferrer">www.yourwebsite.com</a>
          </p>
          <p style={styles.infoItem}>
            📱 LinkedIn: <a href="https://www.linkedin.com/in/deependrajhariya1234/" target="_blank" rel="noopener noreferrer">Your LinkedIn Profile</a>
          </p>
        </div>
      </div>

    </div>
  );
}
const styles = {
  container: {
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
    marginBottom: '30px',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoItem: {
    fontSize: '1.1em',
    color: '#333',
    marginBottom: '10px',
  },
  media_container: {
    // display: 'flex',
    // justifyContent: 'center',
    // marginTop: '20px',
  },
  icon: {
    color: '#333',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default Contact