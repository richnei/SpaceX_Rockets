/* eslint-disable jsx-a11y/anchor-is-valid */
export const Card = (props) => (
    <div className="col-sm-6">
            <div className="card" key={props.rocket.id}>
              <img src={props.rocket.flickr_images[1]} class="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{props.rocket.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" classname="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#popup${props.rocket.id}`}>Detalhes</a>
              </div>
            </div>
          </div>
)