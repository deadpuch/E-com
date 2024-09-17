import React from "react";

function Footer() {
  return (
    <section className="bg-black w-full h-auto text-white">
      <div className="container grid-rows-3 mx-auto  h-auto">
        <div>
          <div>
            <img src="/image/VasoraWhite.svg" alt="" />
          </div>
          <p className="mt-9">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>

        <div>

        <h2 className="text-secondary font-medium">QUICK LINKS</h2>
            <ul className="text-secondary font-light mt-6">
              <li>Shop</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
            </ul>
        </div>
        <div>

          <div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Footer;
