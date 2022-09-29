import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul>
      {props.meetups.map(meetup => 
        <MeetupItem 
        key={meetup.name}
        name={meetup.name}
        address={meetup.address}
        email={meetup.email} />
      )}
    </ul>
  );
}

export default MeetupList;
