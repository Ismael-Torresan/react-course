import MeetupList from "../components/meetups/MeetupList";

const DummyData = [
  {
    name: "Nissim Schroeder",
    phone: "1-256-361-6627",
    email: "risus.quisque@icloud.ca",
    address: "Ap #972-2554 Et, Rd.",
  },
  {
    name: "Matthew Hobbs",
    phone: "(918) 418-4633",
    email: "id.libero@aol.com",
    address: "801-6198 Sed Rd.",
  },
  {
    name: "Macaulay Rojas",
    phone: "(696) 664-7593",
    email: "mi@protonmail.ca",
    address: "P.O. Box 946, 578 Est Road",
  },
  {
    name: "Dorian Pittman",
    phone: "(342) 878-2575",
    email: "nam.nulla@google.edu",
    address: "Ap #227-6378 Ut St.",
    imagem:
      "https://img.freepik.com/premium-photo/astronaut-outer-open-space-planet-earth-stars-provide-background-erforming-space-planet-earth-sunrise-sunset-our-home-iss-elements-this-image-furnished-by-nasa_150455-16829.jpg?w=996",
  },
  {
    name: "Deborah Wilkins",
    phone: "1-140-317-8618",
    email: "elit.erat.vitae@aol.org",
    address: "683-7680 Donec Rd.",
  },
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>AllMeetups</h1>
      <MeetupList meetups={DummyData} />
    </section>
  );
}

export default AllMeetupsPage;
