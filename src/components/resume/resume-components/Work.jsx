import misericordiaLogo from "../../../assets/images/misericordia.jpg";
import loyolaLogo from "../../../assets/images/loyola2.jpg";
import myeongsungLogo from "../../../assets/images/myeongsung.png";

export default function Work() {
  return (
    <section className="m-5">
      <h1 className="text-5xl">Work</h1>
      <div className="flex shadow-lg p-10 rounded-xl my-10  bg-white">
        <div className="w-1/4">
          <img
            src={misericordiaLogo}
            alt="Misericordia Logo"
            className="h-32 w-32 object-cover mx-auto"
          />
        </div>
        <div className="flex-1 p-8 ">
          <h1 className="text-left text-2xl font-bold mb-4">
            Misericordia Heart of Mercy
          </h1>
          <h2 className="text-left text-2xl font-bold mb-4">
            Behavioral Health Technician | Qualified Intellectual Disabilities
            Professional
          </h2>
          <p className=" text-left text-gray-600">
            Implemented BCBA certified behavioral programs aimed at maximizing
            vocational, social, and communicative skills, and minimizing
            maladaptive behaviors. Worked in a team to create and implement
            personalized programming to help AEP residents transition into
            Misericordia. Attended and actively participated in progress
            meetings and resident staffings. Facilitated communication between
            areas. Provided training on behavior plans for new staff, modeled
            appropriate implementation, and provided feedback in naturalistic
            settings. Helped to design and carry out a previously nonexistent
            type of online programming to provide active treatment during the
            Covid-19 pandemic.
          </p>
        </div>
      </div>
      <div className="flex shadow-lg p-10 rounded-xl my-10  bg-white">
        <div className="w-1/4">
          <img
            src={myeongsungLogo}
            alt="Myeongsung Logo"
            className="h-32 w-32 object-cover mx-auto"
          />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-left text-2xl font-bold mb-4">
            Myungsung Korean Reunification Committee
          </h1>
          <h2 className="text-left text-2xl font-bold mb-4">
            English as a Second Language Teacher
          </h2>
          <p className=" text-left text-gray-600">
            Created and taught beginner to advanced English lessons for North
            Korean refugee students. Taught conversation and phonics lessons, as
            well as basic grammar and vocabulary.
          </p>
        </div>
      </div>
      <div className="flex shadow-lg p-10 rounded-xl my-10  bg-white">
        <div className="w-1/4">
          <img
            src={loyolaLogo}
            alt="Loyola Logo"
            className="h-32 w-32 object-cover mx-auto"
          />
        </div>
        <div className="flex-1 p-8">
          <h1 className="text-left text-2xl font-bold mb-4">
            Loyola Literacy Center
          </h1>
          <h2 className="text-left text-2xl font-bold mb-4">Lead Tutor</h2>
          <p className=" text-left text-gray-600">
            Tutored one on one with English as a Second Language learners,
            created and implemented individualized lesson plans that best met
            the learners needs, helped assess learners weekly progress with
            overseers, led orientation and training for new volunteer student
            tutors, responsible for setup and takedown of materials, tables, and
            refreshments.
          </p>
        </div>
      </div>
    </section>
  );
}
