const Loader = () => (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}>
      <div style={{
        background: "#fff",
        padding: "1rem 2rem",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)"
      }}>
        Cargando...
      </div>
    </div>
  );
  
  export default Loader;
  