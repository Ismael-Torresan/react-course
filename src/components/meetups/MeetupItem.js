import Card from "../ui/Card";

function MeetupItem(props) {
  return (
    <li>
      <Card>
        <div>
          <img
            src="https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=996"
            alt="no nada"
          />
        </div>
        <div>
          <h3>{props.name}</h3>
          <address>{props.address}</address>
          <p>{props.email}</p>
        </div>
        <div>
          <button>to favorites</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
