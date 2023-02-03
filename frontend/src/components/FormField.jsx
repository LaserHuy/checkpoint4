import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, 
  handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-lg font-medium text-white"
        >
          {labelName}
        </label>
        {isSurpriseMe ? (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-inter mr-20 
            bg-transparent border text-white px-8 py-2 rounded-lg
            "
          >
            Surprise me
          </button>
        ) : null}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-[#4649ff] focus:border-
        [#4649ff] outline-none block w-full p-3"
      />
    </div>
  )
}

export default FormField