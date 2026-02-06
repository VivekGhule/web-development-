import React from "react";

const Card = ({ card }) => {
  const {
    name,
    title,
    company,
    chargePerHour,
    profilePicture,
    skills,
    description,
  } = card;

  return (
    <div
      className="w-[320px] bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300
 hover:-translate-y-2 flex flex-col ">
      {/* Price Badge */}
      <div className="flex justify-end">
        <span
          className=" bg-blue-50 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full " >
          ${chargePerHour}/hr
        </span>
      </div>

      {/* Avatar */}
      <div className="flex justify-center -mt-10 mb-3">
        <div
          className=" w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg" >
          <img
            className="w-full h-full object-cover object-top"
            src={profilePicture}
            alt={name} />
        </div>
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-slate-800 text-center">{name}</h2>

      {/* Title */}
      <p className="text-slate-500 text-center text-sm">{title}</p>

      {/* Company */}
      <p className="text-slate-400 text-center text-sm mb-3">{company}</p>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {skills.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className=" bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded-md font-medium " >
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-slate-600 text-center flex-grow">
        {description}
      </p>

      {/* Premium Button */}
      <button
        className=" mt-5 w-full bg-blue-600 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 active:translate-y-0 ">
        View Profile
      </button>
    </div>
  );
};

export default Card;
