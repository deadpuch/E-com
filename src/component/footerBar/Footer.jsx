import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footerContainer bg-black w-full h-auto text-white flex mt-auto">
      <div className="footergridContainer flex flex-col sm:grid container p-4 mx-auto  h-auto ">
        <div>
          <div>
            <img src="/image/VasoraWhite.svg" alt="" />
          </div>
          <p className="mt-9 pr-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>

        <div className="flex flex-col mt-6">
          <h2 className="text-secondary font-medium">QUICK LINKS</h2>
          <ul className="text-secondary font-light mt-6">
            <li>Shop</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>
        </div>

        
        
            <div  className="flex flex-col mt-6">
              <h2 className="text-secondary font-medium">CONTACT US</h2>
              <p className="text-secondary">
                42 -b-c Mahavir Bldg <br /> Navneet Showroom Bhandark Matunga
              </p>
            </div>
          

        
        
            <div className="flex flex-col mt-6">
              <div>
                <h2 className="text-secondary font-medium">EMAIL US</h2>
                <p className="text-secondary">vasora@gmail.com</p>
              </div>
           
          </div>

      </div>
    </footer>
  );
}

export default Footer;
