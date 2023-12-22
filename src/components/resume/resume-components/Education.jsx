import loyolaLogo from "../../../assets/images/loyola.png";
import northwesternLogo from "../../../assets/images/northwestern.png";

export default function Education() {
  return (
    <section className="m-5">
      <div>
        <h3 className="text-5xl py-1 flex justify-center">Education</h3>
      </div>
      <div className="lg:flex gap-10">
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-white">
          <img src={loyolaLogo} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">B.S. Psychology</h3>
          <h4>2017</h4>
          <p className="py-2">
            I graduated Magna Cum Laude from Loyola University Chicago in 2017
            with a B.S. in Psychology. Equipped with the knowledge from this
            degree, I have been able to provide behavioral support to adults
            with developmental disabilities and their families in need.
          </p>
        </div>
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10 bg-white">
          <img src={loyolaLogo} width={100} height={100} className="mx-auto" />
          <h3 className="text-lg font-medium pt-8 pb-2">B.A. English</h3>
          <h4>2017</h4>

          <p className="py-2">
            My other undergraduate degree was a B.A. of English with a focus in
            Creative Writing. Again graduating Magna Cum Laude, I have utilized
            these creative skills to provide industry standard
          </p>
        </div>
        <div className="flex-1 text-center shadow-lg p-10 rounded-xl my-10  bg-white">
          <img
            src={northwesternLogo}
            width={100}
            height={100}
            className="mx-auto"
          />
          <h3 className="text-lg font-medium pt-8 pb-2">
            Northwestern Bootcamp
          </h3>
          <h4> 2023</h4>
          <p className="py-2">
            I succesfully completed the Coding Bootcamp offered by Northwestern
            in 2023. Graduating with a 97% in the class, I hope to utilize the
            skills I have developed to provide a more accessible internet to
            everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
