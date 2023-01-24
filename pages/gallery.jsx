export default function Gallery() {
  return (
    <div>
      <h3 className="text-center">Gallery</h3>
      <div className="row flex-spaces">
        {Array.from({ length: 6 }).map((_, idx) =>
        (
          <div key={idx} className="">
            <div className="card margin" style={{ width: "17rem" }}>
              <div className="card-body">
                <h4 className="card-title">My awesome Paper card!</h4>
              </div>
              <img className="image-bottom" src="https://unsplash.it/550/250" alt="Card example image" />
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
