import polygons from "../assets/polygons-blue.jpg";

function BackgroundOverlay() {

  return (
    <div className="fixed right-0 opacity-45">
      <img className="min-h-screen object-fill" draggable={false} src={polygons} alt="" />
    </div>
  )

}

export default BackgroundOverlay;