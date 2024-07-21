import { FaFacebook, FaRegCopyright } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function MyFooter(props) {
  function instagram() {
    window.location.href = "https://www.instagram.com/epicode.official/";
  }

  function facebook() {
    window.location.href = "https://www.facebook.com/epicode/";
  }

  return (
    <>
      <div
        style={{
          position: props.bloccato,
          bottom: 0,
          fontSize: 50,
          margin: 25,
          cursor: "pointer",
        }}
      >
        <GrInstagram className="me-3" onClick={instagram} />
        <FaFacebook className="me-3" onClick={facebook} />
      </div>
      <p className="text-center">
        Copyright by <FaRegCopyright />
      </p>
    </>
  );
}

export default MyFooter;
