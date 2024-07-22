"use client";
import React, { useState, useEffect } from "react";
import { GoDownload } from "react-icons/go";
import "@/styles/ongoing/brochure.css";

interface BrochureProps {
  type: 'infinity' | 'village';
}

function Brochure({ type }: BrochureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (firstName && !/^[a-zA-Z]+$/.test(firstName)) {
      setFirstNameError("First name should contain only letters");
    } else {
      setFirstNameError("");
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
      setLastNameError("Last name should contain only letters");
    } else {
      setLastNameError("");
    }
  }, [lastName]);

  useEffect(() => {
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    if (phoneNumber && !/^\d{10}$/.test(phoneNumber)) {
      setPhoneError("Invalid phone number");
    } else {
      setPhoneError("");
    }
  }, [phoneNumber]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setShowNotification(false);
  };

  const getDownloadLink = () => {
    return type === 'infinity' ? "/Infinity.pdf" : "/Village.pdf";
  };

  const isFormValid = () => {
    return firstName !== "" && lastName !== "" && email !== "" && phoneNumber !== "" &&
      firstNameError === "" && lastNameError === "" && emailError === "" && phoneError === "";
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid()) {
      try {
        const response = await fetch('/api/BrochureMail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, lastName, email, phoneNumber }),
        });

        const data = await response.json();
        if (data.success) {
          window.location.href = getDownloadLink();
        } else {
          console.error('Error sending email:', data.message);
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
    }
  };

  return (
    <div className="relative bg-black text-white flex flex-col items-center p-4" style={{ height: "200px" }}>
      <div className="p-4 absolute top-[20px] left-[20px] z-20 w-[181px] h-[140px] flex items-center">
        <div
          className="fontsample z-10"
          style={{
            width: "27px",
            height: "140px",
            background: "#BB903A 0% 0% no-repeat padding-box",
            opacity: "1",
          }}
        >
          Brochure
        </div>
      </div>
      <div className="flex flex-col items-center mt-24">
        <button
          className="absolute top-[50px] mt-5 bg-yellow-600 hover:bg-yellow-700 font-bold py-2 px-4 inline-flex items-center custom"
          onClick={openModal}
        >
          Download Brochure
          <GoDownload className="w-4 h-4 ml-2" fontSize={"20px"} />
        </button>
        <div className="text-gray-400 p-3 line-clamp-2 md:mt-2 md:line-clamp-1 text-center">
          <p className="ml-5 mt-3">For more details download the brochure</p>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay flex justify-center items-center">
          <div className="modal bg-white p-8 rounded-lg shadow-lg relative">
            <button className="close-button absolute top-2 right-2 text-gray-600" onClick={closeModal}>
              ×
            </button>
            <h2 className="modal-title text-2xl font-bold mb-4">Get the brochure</h2>
            <form className="modal-form space-y-4" onSubmit={handleFormSubmit}>
              <div className="modal-input-row flex ">
                <input
                  type="text"
                  placeholder="First Name"
                  className="modal-input-half p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                {firstNameError && <div className="text-red-600 text-sm">{firstNameError}</div>}
                <input
                  type="text"
                  placeholder="Last Name"
                  className="modal-input-half p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                {lastNameError && <div className="text-red-600 text-sm">{lastNameError}</div>}
              </div>
              <input
                type="email"
                placeholder="Email"
                className="modal-input p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {emailError && <div className="text-red-600 text-sm">{emailError}</div>}
              <input
                type="text"
                placeholder="Phone Number"
                className="modal-input p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-yellow-600"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              {phoneError && <div className="text-red-600 text-sm">{phoneError}</div>}
              <button
                type="submit"
                className={`modal-button w-full py-2 px-4 bg-yellow-600 text-white font-bold rounded transition duration-300 hover:bg-yellow-700 ${
                  !isFormValid() ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={!isFormValid()}
              >
                Download
              </button>
              {showNotification && (
                <div className="notification mt-2 text-red-600 text-center">
                  Please fill in all the details correctly to download the brochure.
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Brochure;
