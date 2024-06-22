import Frame from "../../rasmlar/Frame.png";
import Rectangle1 from "../../rasmlar/Rectangle (1).png";
import Rectangle2 from "../../rasmlar/Rectangle (2).png";
import Rectangle3 from "../../rasmlar/Rectangle (3).png";
import Rectangle4 from "../../rasmlar/Rectangle (4).png";
import Rectangle5 from "../../rasmlar/Rectangle (5).png";
import Rectangle6 from "../../rasmlar/Rectangle (6).png";
import Rectangle8 from "../../rasmlar/Rectangle (8).png";
import Rectangle9 from "../../rasmlar/Rectangle (9).png";
import Rectangle10 from "../../rasmlar/Rectangle (10).png";
import Rectangle11 from "../../rasmlar/Rectangle (11).png";
import Rectangle12 from "../../rasmlar/Rectangle (12).png";
import Rectangle13 from "../../rasmlar/Rectangle (13).png";
import Rectangle14 from "../../rasmlar/Rectangle (14).png";
import Rectangle15 from "../../rasmlar/Rectangle (15).png";
import Rectangle16 from "../../rasmlar/Rectangle (16).png";
import Rectangle17 from "../../rasmlar/Rectangle (17).png";
import Rectangle18 from "../../rasmlar/Rectangle (18).png";
import Rectangle19 from "../../rasmlar/Rectangle (19).png";
import Rectangle20 from "../../rasmlar/Rectangle (20).png";
import Rectangle21 from "../../rasmlar/Rectangle (21).png";
import Rectangle22 from "../../rasmlar/Rectangle (22).png";
import Rectangle23 from "../../rasmlar/Rectangle (23).png";
import Rectangle24 from "../../rasmlar/Rectangle (24).png";
import Rectangle25 from "../../rasmlar/Rectangle (25).png";
import Rectangle26 from "../../rasmlar/Rectangle (26).png";
import Rectangle27 from "../../rasmlar/Rectangle (27).png";
import Rectangle28 from "../../rasmlar/Rectangle (28).png";
import Rectangle29 from "../../rasmlar/Rectangle (29).png";
import Rectangle30 from "../../rasmlar/Rectangle (30).png";
import Rectangle31 from "../../rasmlar/Rectangle (31).png";
import Rectangle32 from "../../rasmlar/Rectangle (32).png";
import image1 from "../../rasmlar/image 1.png";
import "./index.css";

export const One = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-white  bg-cover bg-center"
      style={{ backgroundImage: `url(${Frame})`, height: "70vh" }}
    >
      <h1 className="text-4xl font-bold m-10">The Desk Shelf System</h1>
      <div className="w-full text-center">
        <p>Available in Walnut or Maple</p>
      </div>
      <p className="mt-5 text-sm text-[#807c7c]">LEARN MORE</p>
    </section>
  );
};
export const Two = () => {
  return (
    <section className="mt-6 text-center">
      <h2 className="text-4xl mt-10 m-5">Design Inspires</h2>
      <div className="w-full text-center text-sm text-[#7e7e80]">
        <p>Build your dream workspace, so you can get your best work done.</p>
      </div>
      <p className="mt-5 text-sm">GET STARTED</p>
      <div className="flex justify-center mt-10 gap-14">
        <div className="py-5">
          <img className="w-full" src={Rectangle1} alt="" />
          <div className="mt-8">
            <p className="text-2xl font-bold mb-2">Desk Pads</p>
            <p>learn more</p>
          </div>
        </div>
        <div className="py-5">
          <img className="w-full" src={Rectangle2} alt="" />
          <div className="mt-8">
            <p className="text-2xl font-bold mb-2">Laptop Stands</p>
            <p>learn more</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export const Three = () => {
  return (
    <section className="mt-6 text-center">
      <h2 className="text-4xl mt-10 m-5">Featured Products</h2>
      <div className="w-full text-center text-sm text-[#7e7e80]">
        <p>See What's Trending Right Now</p>
      </div>
      <div className="flex justify-center mt-10">
        <div className="rounded-box"></div>
        <div className="rounded-box"></div>
        <div className="rounded-box"></div>
      </div>
      <div className="flex justify-center gap-5">
        <div className="py-5">
          <img className="w-full" src={Rectangle3} alt="" />
          <div className="mt-8 text-start text-[#7c7c7c]">
            <p className="text-sm mb-2">Walnut MagSafe Stand</p>
            <p>$120</p>
          </div>
        </div>
        <div className="py-5">
          <img className="w-full" src={Rectangle4} alt="" />
          <div className="mt-8 text-start text-[#7c7c7c]">
            <p className="text-sm mb-2">Walnut Laptop Riser</p>
            <p>$150</p>
          </div>
        </div>
        <div className="py-5">
          <img className="w-full" src={Rectangle5} alt="" />
          <div className="mt-8 text-start text-[#7c7c7c]">
            <p className="text-sm mb-2">Walnut iPad Stand</p>
            <p>$80</p>
          </div>
        </div>
        <div className="py-5">
          <img className="w-full" src={Rectangle6} alt="" />
          <div className="mt-8 text-start text-[#7c7c7c]">
            <p className="text-sm mb-2">Walnut Monitor Stand</p>
            <p>$100</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Four = () => {
  return (
    <section className="background-section mt-14 flex-col ">
      <h2 className="text-6xl font-bold mt-10 my-5 w-full">
        Home Office Inspiration
      </h2>
      <div className="w-full text-center">
        <p>
          Working from home can be a challenge—see some creative solutions to
          get it just right.
        </p>
      </div>
      <p className="mt-5 text-sm text-[#c6c4c4]">LEARN MORE</p>
    </section>
  );
};
export const Five = () => {
  return (
    <section className="flex justify-center p-2 flex-col text-center items-center ">
      <h2 className="font-bold text-3xl mt-16">Made The Hard Way</h2>
      <div className="mt-7">
        <p className="w-full text-center text-[#878889]">
          Our signature craftsmanship has been honed over a decade of
          manufacturing innovation here in <br /> Portland, Oregon. We combine
          the skills of our small in-house team with the collective strength of{" "}
          <br />
          collaborators throughout the US to deliver quality products worth
          investing in.
        </p>
      </div>
      <div className="mt-5">
        <img src={image1} alt="" />
      </div>
    </section>
  );
};
export const Six = () => {
  return (
    <section className="flex justify-center p-2 flex-col text-center items-center ">
      <h2 className="font-bold text-3xl mt-10">Make Work Meaningful</h2>
      <div className="mt-7">
        <p className="w-full text-center text-[#878889]">
          We're here because we believe that your work deserves the best. A team
          that loves working together <br /> is the magic that makes it all
          happen.
        </p>
      </div>
      <div className="mt-10 flex gap-5 flex-wrap Photos justify-center">
        <img src={Rectangle8} alt="" />
        <img src={Rectangle9} alt="" />
        <img src={Rectangle10} alt="" />
        <img src={Rectangle11} alt="" />
        <img src={Rectangle12} alt="" />
        <img src={Rectangle13} alt="" />
        <img src={Rectangle14} alt="" />
        <img src={Rectangle15} alt="" />
        <img src={Rectangle16} alt="" />
        <img src={Rectangle17} alt="" />
        <img src={Rectangle18} alt="" />
        <img src={Rectangle19} alt="" />
        <img src={Rectangle20} alt="" />
        <img src={Rectangle21} alt="" />
        <img src={Rectangle22} alt="" />
        <img src={Rectangle23} alt="" />
        <img src={Rectangle24} alt="" />
        <img src={Rectangle25} alt="" />
        <img src={Rectangle26} alt="" />
        <img src={Rectangle27} alt="" />
        <img src={Rectangle28} alt="" />
        <img src={Rectangle29} alt="" />
        <img src={Rectangle30} alt="" />
        <img src={Rectangle31} alt="" />
      </div>
    </section>
  );
};
export const Seven = () => {
  return (
    <section className="flex justify-center px-8 flex-col text-center items-center ">
      <h2 className="font-bold text-3xl mt-10">We Hope You'll Join Us</h2>
      <div className="mt-7">
        <p className="w-full text-center text-[#878889]">
          READ MORE ABOUT OUR STORY
        </p>
      </div>
      <div
        className="mt-10 text-white"
        style={{
          background: " rgb(154, 168, 177)",
          width: "100% ",
          padding: "100px 0px",
        }}
      >
        <div className="flex justify-center mb-5">
          <img src={Rectangle32} alt="" />
        </div>
        <h3 className="text-4xl mb-6">Design Inspires</h3>
        <p>Build your dream workspace, so you can get your best work done.</p>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <div
      className="flex mt-5 px-10 py-10 gap-5 relative"
      style={{ background: "rgb(249, 249, 249) " }}
    >
      <div>
        <ul className="list-none ">
          <li>
            <a href=""> Shop</a>
          </li>
          <li>
            <a href=""> About</a>
          </li>
          <li>
            <a href=""> Journal</a>
          </li>
          <li>
            <a href=""> Support</a>
          </li>
          <li>
            <a href=""> COVID-19 Info</a>
          </li>
          <li>
            <a href=""> Order Status</a>
          </li>
          <li>
            <a href=""> Corporate Sales</a>
          </li>
        </ul>
      </div>
      <div className="absolute right-8 top-0 bg-black text-white px-5 py-2 ">
        GO
        <br />
        UP
      </div>
      <div className="w-80">
        <h2 className="font-bold">Newsletter Signup</h2>
        <p className="text-sm text-[#6a6a6abb] mt-5">
          Sign up to our Newsletter to hear about new product releases, learn
          about our design process, and everything else going on behind the
          scenes at Grovemade.
        </p>
      </div>
    </div>
  );
};
