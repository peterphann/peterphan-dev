import polygons from "../assets/polygons-blue.png";

function BackgroundOverlay() {

  return (
    <div className="fixed right-0 opacity-45 -z-50">
      <img className="min-h-screen object-fill select-none" draggable={false} src={polygons} alt="" />
    </div>
  )

}

export default BackgroundOverlay;