import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cantact() {
  return (
    <main>
      <Banner />

      <div className="flex flex-col mx-10 gap-8 items-center justify-center bg-white">
        <div className="text-4xl mt-20 text-center text-font-colour">
          We are Looking for Volunteers{" "}
        </div>

        <div className="max-w-250 text-font-colour">
          Make a real difference in the lives of dogs who need it most by
          volunteering at our shelter.
          <br />
          <br />
          You'll get hands-on experience caring for animals, from daily walks
          and playtime to helping with feeding and socialization, all while
          being part of a compassionate community dedicated to giving every dog
          a second chance at finding their forever home.
          <br />
          <br />
          Fill out the form below to apply and be a hero to these wonderful
          animals. Please include any previous experience handling dogs.
        </div>

        <div className="flex items-center justify-center w-full py-20">
          <form className="flex flex-col w-full max-w-250 gap-3 p-4 border border-bg-emphasis rounded-lg bg-white drop-shadow-lg">
            <div>
              <div>Name</div>
              <input
                className="w-full bg-bg-form p-2 border border-gray-300 focus:outline-btn-colour rounded-md"
                type="text"
              />
            </div>

            <div>
              <div>Email</div>
              <input
                className="w-full bg-bg-form p-2 border border-gray-300 focus:outline-btn-colour rounded-md"
                type="text"
              />
            </div>

            <div>
              <div>Message</div>
              <textarea
                rows={4}
                className="w-full bg-bg-form p-2 border border-gray-300 focus:outline-btn-colour rounded-md"
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full justify-around">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="peer relative appearance-none w-4 h-4 border rounded-full border-btn-colour cursor-pointer  checked:bg-btn-colour"
                />
                <label className="p-2">I am looking to volunteer</label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="peer relative appearance-none w-4 h-4 border rounded-full border-btn-colour cursor-pointer  checked:bg-btn-colour"
                />
                <label className="p-2">I am looking to adopt</label>
              </div>

              <button className="flex items-center self-center sm:self-end gap-1 py-1 px-3 bg-btn-colour hover:bg-bg-emphasis text-white border rounded-sm">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
