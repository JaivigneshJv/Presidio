import React from "react";

const Perks = ({ selected, onChange }) => {
  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }
  return (
    <>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="wifi" onChange={handleCbClick} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
          />
        </svg>
        <span>Wifi</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="tv" onChange={handleCbClick} />
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          id="tv"
        >
          <g
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g stroke="#000" strokeWidth="2" transform="translate(-921 -2129)">
              <g transform="translate(922 2130)">
                <rect width="20" height="15" y="5" rx="2"></rect>
                <path d="M15 0l-5 5-5-5"></path>
              </g>
            </g>
          </g>
        </svg>
        <span>TV</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="pets" onChange={handleCbClick} />
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 32 32"
          viewBox="0 0 32 32"
          id="pet"
        >
          <g>
            <path
              d="M16,26.176c1.881,0.002,3.667,0.853,5.526,0.169c1.477-0.544,2.637-1.865,2.897-3.646c0.233-1.596-0.444-3.076-1.589-4.346
		c-3.6-3.992-10.068-3.992-13.668,0c-1.145,1.27-1.821,2.749-1.589,4.346c0.259,1.781,1.42,3.103,2.897,3.646
		C12.333,27.029,14.119,26.179,16,26.176z"
            ></path>
            <ellipse
              cx="11.572"
              cy="8.877"
              rx="2.923"
              ry="3.507"
              transform="rotate(-11.008 11.571 8.878)"
            ></ellipse>
            <ellipse
              cx="4.562"
              cy="14.001"
              rx="2.541"
              ry="3.05"
              transform="rotate(-11.008 4.561 14.001)"
            ></ellipse>
            <ellipse
              cx="20.428"
              cy="8.877"
              rx="3.507"
              ry="2.923"
              transform="rotate(-78.995 20.428 8.877)"
            ></ellipse>
            <ellipse
              cx="27.438"
              cy="14.001"
              rx="3.05"
              ry="2.541"
              transform="rotate(-78.995 27.438 14.001)"
            ></ellipse>
          </g>
        </svg>
        <span>Pets</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="parking" onChange={handleCbClick} />
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="512"
          height="512"
          viewBox="0 0 512 512"
          id="car"
        >
          <path d="M508.8 390.9c-.6 4.1-1.6 8.1-3.1 11.2-2.7 5.5-5.3 6-15.5 5.5-13.2-.6-32.1 0-52.1.8 0 5.5.2 8.1.2 8.1 1.3 15.1 8.1 15.6 10.8 15.6h43c3.8 0 7.3 0 10-1.8 3.5-2.3 5-9 6.3-20.7.2-1.7.3-3.9.4-6.5v-.1c0-.8.1-1.8.1-2.9V399c0-2.7 0-5.7-.1-8.1zM3 390.9c.6 4.1 1.6 8.1 3.1 11.2 2.7 5.5 5.3 6 15.5 5.5 13.2-.6 32.1 0 52.1.8 0 5.5-.2 8.1-.2 8.1-1.3 15.1-8.1 15.6-10.8 15.6h-43c-3.8 0-7 0-10-1.8-3.6-2.1-5-9-6.3-20.7-.2-1.7-.3-3.9-.4-6.5v-.1c0-.8-.1-1.8-.1-2.9V399c.1-2.7.1-5.7.1-8.1z"></path>
          <path d="M512 296.6c0-30.7-4-60.7-5.6-64-1.2-2.4-8.9-8.7-26.4-20.6-17.7-12.1-17.3-10.3-20.5-18.2 2.9-.9 5.7-2.6 7.4-2.8 3.8-.4 4 3.2 11.9 3.2s25-2.1 28.5-5.6c3.5-3.5 4.6-4.7 4.6-7.8s-1.8-9.5-5.2-13.3-17.9-5.7-26.4-6.8-9.7 0-11.9 1.4c-3.5 2.2-3.7 22.3-3.7 22.3l-8.3.2c-5.4-13.3-12.9-40.1-24.6-61.2-12.8-23-26.2-30.2-31.8-32-5.5-1.7-10.5-2.9-48-6.7-38.3-4-68.8-4.5-96-4.5s-57.7.6-96 4.5c-37.5 3.9-42.5 5-48 6.7-5.5 1.7-19 9-31.8 32-11.7 21.1-19.2 47.9-24.6 61.2l-8.3-.2s-.1-20.1-3.7-22.3c-2.2-1.4-3.4-2.6-11.9-1.4s-23 3-26.4 6.8S.1 177.7.1 180.8s1.1 4.4 4.6 7.8c3.5 3.5 20.6 5.6 28.5 5.6s8.1-3.6 11.9-3.2c1.7.2 4.6 1.9 7.4 2.8-3.3 7.9-2.8 6.1-20.5 18.2-17.5 12-25.3 18.2-26.4 20.6-1.6 3.3-5.6 33.3-5.6 64s2.2 58.3 2.2 68.1c0 4.1 0 11.3.9 18.2.6 4.1 1.5 8.1 3.1 11.2 2.7 5.5 5.2 6 15.5 5.5 13.2-.6 32.3 0 52 .8 13.2.5 26.7 1 38.7 1.3 30 .6 21.2-4.4 34-4.2 12.8.2 63.3 2.3 109.5 2.3s96.8-2.1 109.5-2.3c12.8-.2 4 4.8 34 4.2 12-.2 25.5-.8 38.7-1.3 19.7-.7 38.9-1.4 52-.8 10.3.5 12.8 0 15.5-5.5 1.5-3.1 2.5-7.1 3.1-11.2 1-6.9.9-14.1.9-18.2.2-9.7 2.4-37.4 2.4-68.1zM86.2 145.2c4.8-11.2 19.2-33.7 26.2-37.7 1.7-1 16.6-5.7 53.9-8.2 34.3-2.3 72.2-3.2 89.8-3.2s55.5.9 89.8 3.2c37.2 2.5 52.3 7.1 53.9 8.2 9 6.2 21.4 26.5 26.2 37.7 4.8 11.2 11.2 33.2 10 36.2-1.2 3 1.2 4.5-15 3.2-16.1-1.2-117.2-2.5-164.8-2.5-47.5 0-148.6 1.3-164.8 2.5-16.2 1.2-13.8-.2-15-3.2-1.4-3 5-24.9 9.8-36.2zM123 270.4c-7.2 1.8-11.5 5.7-20.5 5.6-9 0-33.3-4.1-38.5-4.3-5.2-.2-9.8 3.5-12.5 4.2s-8-1.2-16-3.7-12.7-1.8-15.3-12.7c-2.7-10.8 0-26.3 0-26.3 17.3-.8 34 .8 65.3 9.6 31.3 8.8 48.7 25.7 48.7 25.7s-4 .1-11.2 1.9zm235.2 78.8c-14.3 1.9-74.2 2.4-102.2 2.4s-87.9-.6-102.2-2.4c-14.6-1.9-33.6-19.4-20.5-33.3 17.7-18.9 14.4-18.3 54.6-23.5 34.8-4.5 61.2-4.7 68.1-4.7 6.8 0 33.3.3 68.1 4.7 40.2 5.2 36.9 4.6 54.6 23.5 13.1 13.9-5.9 31.4-20.5 33.3zm133.6-89.6c-2.7 10.8-7.3 10.2-15.3 12.7s-13.3 4.3-16 3.7-7.3-4.3-12.5-4.2c-5.2.2-29.5 4.3-38.5 4.3s-13.3-3.8-20.5-5.6c-7.2-1.8-11.2-1.8-11.2-1.8s17.3-17 48.7-25.7c31.3-8.8 48-10.4 65.3-9.6 0-.2 2.7 15.3 0 26.2z"></path>
        </svg>
        <span>Parking</span>
      </label>
      <label className="border p-4 flex rounded-xl gap-2 items-center cursor-pointer">
        <input type="checkbox" name="entrance" onChange={handleCbClick} />
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 16 16"
          id="private-working-tab"
        >
          <path
            fill="#212121"
            d="M3.99994 2C2.89537 2 1.99994 2.89543 1.99994 4V12C1.99994 13.1046 2.89537 14 3.99994 14H11.9999C13.1045 14 13.9999 13.1046 13.9999 12V4C13.9999 2.89543 13.1045 2 11.9999 2H3.99994ZM2.99994 4C2.99994 3.44772 3.44765 3 3.99994 3H4.81578L2.99994 5.16403V4ZM2.99994 6.71975L6.12118 3H7.50135L2.99994 8.36457V6.71975ZM8.80675 3H10.1871L2.99994 11.5653V9.92029L8.80675 3ZM11.4925 3H11.9999C12.254 3 12.4859 3.09473 12.6623 3.2508L4.48175 13H3.99994C3.73882 13 3.50108 12.8999 3.32298 12.736L11.4925 3ZM12.9999 4.40414V6.04908L7.16742 13H5.78716L12.9999 4.40414ZM12.9999 7.6048V9.24974L9.85309 13H8.47283L12.9999 7.6048ZM12.9999 10.8055V12C12.9999 12.5523 12.5522 13 11.9999 13H11.1585L12.9999 10.8055Z"
          ></path>
        </svg>
        <span>Private Entrance</span>
      </label>
    </>
  );
};

export default Perks;
