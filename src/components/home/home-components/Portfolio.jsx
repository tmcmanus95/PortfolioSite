import compoundle from "../../../assets/images/compoundlegradient.png";
import lexipal from "../../../assets/images/lexipalgradient.png";
import loremIpsong from "../../../assets/images/loremipsonggradient.png";
import bartLB from "../../../assets/images/bartlebygradient.png";
import wordWorms from "../../../assets/images/wordwormsgradient.png";
import binarySearchJourney from "../../../assets/images/binarysearchgradient.png";

export default function Porfolio() {
  return (
    <section className="m-5">
      <div>
        <h3 className="text-4xl text-center py-1">Portfolio</h3>
        <p className="text-md py-5 leading-8 text-gray-800"></p>
      </div>
      <div className="flex flex-col gap-10 py-10  lg:flex-row lg:flex-wrap">
        <div className="basis-1/3 flex-1">
          <a
            href="https://compoundle-0dc961311800.herokuapp.com/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={compoundle}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
              <h2 className="text-xl font-semibold mb-5">Compoundle</h2>
              <p className="text-sm mx-auto justify-center flex">
                Rearrange blocks to form chains of compound words and phrases.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100">
              <p className="text-sm mt-5">Node.js | SQL | Heroku </p>
            </div>
          </a>
        </div>
        <div className="basis-1/3 flex-1 border-solid">
          <a
            href="https://chicago-august-20231.github.io/Word-Frequency-Calculator/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={lexipal}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
              <h2 className="text-xl font-semibold text-black mb-5">LexiPal</h2>
              <p className="text-sm items-center mx-auto max-w-xl">
                Optimize ESL learning by visualizing the frequency of English
                word usage.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100">
              <p className="text-sm mt-5">JavaScript | Pico</p>
            </div>
          </a>
        </div>
        <div className="basis-1/3 flex-1 ">
          <a
            href="https://tmcmanus95.github.io/lorem-ipsong/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={loremIpsong}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent">
              <h2 className="text-xl font-semibold text-black mb-5">
                Lorem Ipsong{" "}
              </h2>
              <p className="text-sm">
                Generate placeholder text composed of commonly used words by
                genre.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4  bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100 ">
              <p className="text-sm mt-5">JavaScript | CSS</p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 flex-1">
          <a
            href="https://wordworms-fb3fd2d850b7.herokuapp.com/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={wordWorms}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent ">
              <h2 className="text-xl text-black font-semibold mb-5">
                Word Worms
              </h2>
              <p className="text-sm">
                Create words by selecing tiles and their neighbors.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100 ">
              <p className="text-sm mt-5">Node.js | Heroku</p>
            </div>
          </a>
        </div>

        <div className="basis-1/3 flex-1">
          <a
            href="https://tmcmanus95.github.io/binary-search-journey/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={binarySearchJourney}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent ">
              <h2 className="text-xl font-semibold mb-5">
                Binary Search Journey
              </h2>
              <p className="text-sm">Visualize the steps of a binary search.</p>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-end p-4  bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100 ">
              <p className="text-sm mt-5">JavaScript | CSS</p>
            </div>
          </a>
        </div>
        <div className="basis-1/3 flex-1">
          <a
            href="https://tmcmanus95.github.io/chat-bartlb/"
            target="_blank"
            className="group block overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <img
              src={bartLB}
              className="rounded-lg object-cover border-solid border-2 border-black"
              width={"100%"}
              height={"100%"}
              layout="responsive"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent text-white">
              <h2 className="text-xl font-semibold mb-5">Chat BartLB</h2>
              <p className="text-sm">
                Parody of Chat GPT based on "Bartleby, the Scrivener."
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4  bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100 text-white">
              <p className="text-sm mt-5">JavaScript | CSS</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
