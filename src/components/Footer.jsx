import React from "react";
import { navList } from "./Navbar";
import logo from '../assets/images/logo.png';

export default function Footer() {
  
  return (
    <footer className="flex flex-col border-t-2 border-t-gray-300 my-20 px-4 md:p-0 gap-8">
      <div className="grid sm:grid-flow-col grid-flow-row py-4">
        <ul className="footer_item site-map list-none text-blue-400 leading-loose">
          <h4 className="font-bold">Site Map</h4>
          {navList.map((nav) => {
            return (
              <li key={nav.txt}>
                <a href={nav.href}>{nav.txt}</a>
              </li>
            );
          })}
        </ul>
        <ul className="footer_item related-link text-blue-400 leading-loose">
          <h4 className="font-bold">Related Links</h4>
          <li>
            <a href="#">Diving</a>
          </li>
          <li>
            <a href="#">Sun and Beaches</a>
          </li>
          <li>
            <a href="#">Adventure Tour</a>
          </li>
          <li>
            <a href="#">Food and Hospitality</a>
          </li>
          <li>
            <a href="#">Events and Culture</a>
          </li>
          <li>
            <a href="#">Nature sight seeing</a>
          </li>
          <li>
            <a href="#">PH Travel guide</a>
          </li>
          <li>
            <a href="#">What to bring?</a>
          </li>
        </ul>
        <ul className="footer_item know-more text-blue-400 leading-loose">
          <h4 className="font-bold">Know more about us</h4>
          <li>
            <a href="#">Website Feedback</a>
          </li>
          <li>
            <a href="#">E-mail: philippinedestination.ph</a>
          </li>
          <li>
            <a href="#">Live Chat</a>
          </li>
          <li>
            <a href="#">Customer Sevices</a>
          </li>
          <li>
            <a href="#">Hotel Reservation </a>
          </li>
        </ul>
        <ul className="footer_item social text-blue-400 leading-loose">
          <h4 className="font-bold">Follow us on:</h4>
          <div className="flex  items-center">
            <a href="#" target="_blank" id="fb" className="w-10 h-10 grid">
              <svg
                className="fill-gray-500 hover:fill-blue-600 w-full h-full"
                viewBox="126.445 2.281 589 589"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <circle cx="420.945" cy="296.781" r="294.5"></circle>
                  <path
                    d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </a>

            <a href="#" id="twtr" className="w-12 h-12 grid">
              <svg
                className="fill-gray-500 hover:fill-rose-700 w-full h-full"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_iconCarrier">
                  <circle cx="24" cy="24" r="20"></circle>
                  <path
                    d="M24 14.1622C27.2041 14.1622 27.5837 14.1744 28.849 14.2321C30.019 14.2855 30.6544 14.481 31.0773 14.6453C31.6374 14.863 32.0371 15.123 32.457 15.5429C32.877 15.9629 33.137 16.3626 33.3547 16.9227C33.519 17.3456 33.7145 17.981 33.7679 19.1509C33.8256 20.4163 33.8378 20.7958 33.8378 23.9999C33.8378 27.2041 33.8256 27.5836 33.7679 28.849C33.7145 30.019 33.519 30.6543 33.3547 31.0772C33.137 31.6373 32.877 32.0371 32.4571 32.457C32.0371 32.8769 31.6374 33.1369 31.0773 33.3546C30.6544 33.519 30.019 33.7144 28.849 33.7678C27.5839 33.8255 27.2044 33.8378 24 33.8378C20.7956 33.8378 20.4162 33.8255 19.151 33.7678C17.981 33.7144 17.3456 33.519 16.9227 33.3546C16.3626 33.1369 15.9629 32.8769 15.543 32.457C15.1231 32.0371 14.863 31.6373 14.6453 31.0772C14.481 30.6543 14.2855 30.019 14.2321 28.849C14.1744 27.5836 14.1622 27.2041 14.1622 23.9999C14.1622 20.7958 14.1744 20.4163 14.2321 19.1509C14.2855 17.981 14.481 17.3456 14.6453 16.9227C14.863 16.3626 15.123 15.9629 15.543 15.543C15.9629 15.123 16.3626 14.863 16.9227 14.6453C17.3456 14.481 17.981 14.2855 19.151 14.2321C20.4163 14.1744 20.7959 14.1622 24 14.1622ZM24 12C20.741 12 20.3323 12.0138 19.0524 12.0722C17.7752 12.1305 16.9028 12.3333 16.1395 12.63C15.3504 12.9366 14.6812 13.3469 14.0141 14.0141C13.3469 14.6812 12.9366 15.3504 12.63 16.1395C12.3333 16.9028 12.1305 17.7751 12.0722 19.0524C12.0138 20.3323 12 20.741 12 23.9999C12 27.259 12.0138 27.6676 12.0722 28.9475C12.1305 30.2248 12.3333 31.0971 12.63 31.8604C12.9366 32.6495 13.3469 33.3187 14.0141 33.9859C14.6812 34.653 15.3504 35.0633 16.1395 35.3699C16.9028 35.6666 17.7752 35.8694 19.0524 35.9277C20.3323 35.9861 20.741 35.9999 24 35.9999C27.259 35.9999 27.6677 35.9861 28.9476 35.9277C30.2248 35.8694 31.0972 35.6666 31.8605 35.3699C32.6496 35.0633 33.3188 34.653 33.9859 33.9859C34.653 33.3187 35.0634 32.6495 35.37 31.8604C35.6667 31.0971 35.8695 30.2248 35.9278 28.9475C35.9862 27.6676 36 27.259 36 23.9999C36 20.741 35.9862 20.3323 35.9278 19.0524C35.8695 17.7751 35.6667 16.9028 35.37 16.1395C35.0634 15.3504 34.653 14.6812 33.9859 14.0141C33.3188 13.3469 32.6496 12.9366 31.8605 12.63C31.0972 12.3333 30.2248 12.1305 28.9476 12.0722C27.6677 12.0138 27.259 12 24 12Z"
                    fill="white"
                  ></path>
                  <path
                    d="M24.0059 17.8433C20.6026 17.8433 17.8438 20.6021 17.8438 24.0054C17.8438 27.4087 20.6026 30.1675 24.0059 30.1675C27.4092 30.1675 30.1681 27.4087 30.1681 24.0054C30.1681 20.6021 27.4092 17.8433 24.0059 17.8433ZM24.0059 28.0054C21.7968 28.0054 20.0059 26.2145 20.0059 24.0054C20.0059 21.7963 21.7968 20.0054 24.0059 20.0054C26.2151 20.0054 28.0059 21.7963 28.0059 24.0054C28.0059 26.2145 26.2151 28.0054 24.0059 28.0054Z"
                    fill="white"
                  ></path>
                  <path
                    d="M31.8507 17.5963C31.8507 18.3915 31.206 19.0363 30.4107 19.0363C29.6154 19.0363 28.9707 18.3915 28.9707 17.5963C28.9707 16.801 29.6154 16.1562 30.4107 16.1562C31.206 16.1562 31.8507 16.801 31.8507 17.5963Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </ul>
      </div>
      <p id="copyright" className="text-center flex flex-col content-center">
        {`© Copy right ${new Date().getFullYear()}, All rights reserved to`}
        <img
          alt="Philippine Destination"
          className="w-80 m-auto"
          src={logo}
        />
      </p>
    </footer>
  );
}
