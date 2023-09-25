"use client";
import Link from 'next/link';
import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from 'next/router';
import BottomGlitter from "../StyledText/BottomGlitter";
import axios from "axios";
import Button from '../button/Button';
import './Forms.module.css';
const selectableList = [
  { text: 'Code N Tackle', value: 1 },
  { text: 'Tech Fusion', value: 2 },
  { text: 'Riddle ARcade', value: 3 },
  { text: 'Film Fiesta', value: 4 },
];

const customStyles = {
  option: (provided) => ({
    ...provided,

    color: 'hsl(5, 100%, 60%)',
    background: 'black', // Set the desired text color
    
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    '& svg': {
      fill: 'black', // Set the color you want for the drop arrow
    },
  }),
};

export default function ContactForm() {
  const initialFormData = {
    name: "",
    email: "",
    phoneNo: "",
    collegeName: "",
    collegeRegistrationNumber: "",
    eventInterest: []
  };
  const router = useRouter();

  const [formData,setFormData] = useState(initialFormData)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showWarning, setShowWarning] = useState(false);
  const [Registered,SetRegistered] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleMultipleChange = (selectedOptions) => {
    if (selectedOptions.length <= 3) {

      setSelectedOptions(selectedOptions);
    } else {
      setShowWarning(true); // Show the warning popup
    }
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    SetRegistered(false)
    
    const selectedOptionTexts = selectedOptions.map((option) =>
      selectableList.find((item) => item.value === option.value)?.text
    );
    const newData = {
      ...formData,
      "eventInterest": selectedOptionTexts,
    }
    axios
      .post("/api/addProfile", newData) 
      .then((response) => {
        console.log(response.data)
        router.push(`/profile/${response.data.data._id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
      setFormData(initialFormData);
      setSelectedOptions([]);
  };


	return (
    <>
    <div className="flex flex-col items-center">
      <div className='flex flex-col items-center mt-8'>
              <div className="sm:mt-12 mt-16 px-12">
                <BottomGlitter text="Techno Think Event" />
              </div>
              <Link href="https://docs.google.com/forms/d/1Rd8EpOmK3aw91d74NnFG0soiV-46Wov8t3W_KbPb6v4/edit">
                <a className="rounded-full">
                  <Button className="bg-aneesh mt-8 ">
                    <span className="z-50 block">Register</span>
                  </Button>
                </a>
              </Link>
      </div>
      <div className="sm:mt-12 mt-16 px-12 ">
        <BottomGlitter text="Registration For Other Events" />
      </div>
      <div className="w-3/5 sm:w-5/6 lg:w-4/5 lg:p-8 xl:w-4/5 sm:p-4 p-16 sm:mt-12 mt-24 bg-aneesh rounded-lg" >
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col my-4 text-black">
        <label className="font-bold text-2xl sm:text-xl text-gray-800" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="p-4 sm:p-2 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            placeholder="Enter Your Name"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl text-gray-800" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            minLength={5}
            maxLength={150}
            required
            value={formData.email}
            onChange={handleInputChange}
            className="p-4 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            placeholder="Enter Your Email"
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl text-gray-800" htmlFor="phonenumber">
            Phone Number
          </label>
          <input
            required
            onChange={handleInputChange}
            minLength={10}
            maxLength={150}
            value={formData.phoneNo}
            name="phoneNo"
            placeholder="Phone number"
            className="p-4 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            id="phonenumber"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl text-gray-800" htmlFor="collegename">
            College Name
          </label>
          <input
            required
            onChange={handleInputChange}
            minLength={3}
            maxLength={200}
            value={formData.collegeName}
            name="collegeName"
            placeholder="College Name"
            className="p-4 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"

          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl text-gray-800" htmlFor="collegeRegisterNumber">
          College Register Number
          </label>
          <input
            value={formData.collegeRegistrationNumber}
            required
            onChange={handleInputChange}
            minLength={3}
            maxLength={200}
            name="collegeRegistrationNumber"
            placeholder="College Register Number"
            className="p-4 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            id="collegeRegisterNumber"
          />
        </div>
        <div className="w-full flex flex-col my-4 text-black">
          <label className="font-bold text-2xl text-gray-800" htmlFor="collegeRegisterNumber">
            Select Event
          </label>
          <Select
              placeholder = "Select maximum 3 event"
              value={selectedOptions}
              onChange={handleMultipleChange}
              options={selectableList.map((item) => ({
                value: item.value,
                label: item.text
              }))}
              isMulti
              maxMenuHeight={150} 
              styles ={customStyles}
              className="p-4 bg-primary text-aneesh text-xl rounded-bl-lg rounded-tr-lg"
            />
        </div>
        {
          Registered?
          <button
          type="submit"
          className="text-center px-4 py-2 w-40 bg-primary text-2xl text-aneesh font-medium mt-4 rounded-bl-lg rounded-tr-lg">
          Register
        </button>:
        <button
        type="submit"
        disabled="true"
        className="text-center px-4 py-2 w-40 bg-primary text-2xl text-aneesh font-medium mt-4 rounded-bl-lg rounded-tr-lg">
        Redirecting....
      </button>
        }
        <h3 className='text-2xl mt-8 text-primary font-semibold'>If any queries in registration, 
          <br/>
          contact - altruix2k23@gmail.com
          <br/>
          contact - +91 9486985820
        </h3>
      </form>
      </div>
      </div>
    </>
	);
}

