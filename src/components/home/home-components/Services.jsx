import fullStack from "../../../assets/images/fullstack.jpg";
import backEnd from "../../../assets/images/backend.png";
import frontEnd from "../../../assets/images/frontend.jpg";

export default function Services() {
  return (
    <section className="m-5">
      <div>
        <h3 className="text-4xl py-1 flex justify-center">Services I Offer</h3>
      </div>
      <div className="lg:flex gap-10">
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-white">
          <img src={fullStack} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Full Stack Web Applications
          </h3>
          <p className="py-2">
            Creating start to finish web applications tailored to your specific
            needs
          </p>
          <h4 className="py-4 text-teal-600">Languages | Frameworks</h4>
          <p className="text-gray-800 py-1">Node.js</p>
          <p className="text-gray-800 py-1">React</p>
          <p className="text-gray-800 py-1">JavaScript</p>
        </div>
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10  bg-white">
          <img src={backEnd} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Back End Development
          </h3>
          <p className="py-2">
            Database creation and management for a wide variety of cases
          </p>
          <h4 className="py-4 text-teal-600">Languages | Databases</h4>
          <p className="text-gray-800 py-1">SQL</p>
          <p className="text-gray-800 py-1">MongoDB</p>
          <p className="text-gray-800 py-1">PostGreSQL</p>
        </div>
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10  bg-white">
          <img src={frontEnd} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Accessible Front End Design
          </h3>
          <p className="py-2">
            Designing webpages that bring to life your vision while remaining
            accessible to everyone.
          </p>
          <h4 className="py-4 text-teal-600">Languages | Libraries</h4>
          <p className="text-gray-800 py-1">CSS</p>
          <p className="text-gray-800 py-1">Tailwind</p>
          <p className="text-gray-800 py-1">Pico</p>
        </div>
      </div>
    </section>
  );
}
