import "./Footer.css";


const foot = {
  fontFamily: 'Georgia, serif',
  fontSize: '2.3rem',
  fontWeight: 'bold'
}


export const Footer = () => {
  return (
    <footer>
      <p style={{...foot }}>@Sarthii 2024</p>
    </footer>
  );
};
