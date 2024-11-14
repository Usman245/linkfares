'use client';
import React, { useState } from 'react';
import { CiCircleQuestion } from 'react-icons/ci';
import { ReactCountryFlag } from "react-country-flag";
import { FiUser } from 'react-icons/fi';

export const Page = () => {
    const [openMenu, setOpenMenu] = useState('pd');
    const [isEditing, setIsEditing] = useState(false);
    const [language, setLanguage] = useState('English');
    const [isCurrencyEditing, setCurrencyEditing] = useState(false);
    const [currency, setCurrency] = useState('$'); // Default currency is USD

    const handleLanguageEditClick = () => {
        setIsEditing(true);
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setIsEditing(false);
    }


    // Currency options with names and symbols
    const currencyOptions = [
        { name: 'US Dollar', symbol: '$' },
        { name: 'Euro', symbol: '€' },
        { name: 'British Pound', symbol: '£' },
        { name: 'Japanese Yen', symbol: '¥' },
        { name: 'Canadian Dollar', symbol: 'C$' },
        { name: 'Australian Dollar', symbol: 'A$' },
        { name: 'Swiss Franc', symbol: 'CHF' },
        { name: 'Chinese Yuan', symbol: '¥' },
        { name: 'Indian Rupee', symbol: '₹' },
        { name: 'South Korean Won', symbol: '₩' },
    ];

    const handleCurrencyEditClick = () => {
        setCurrencyEditing(true);
    };

    const handleCurrencyChange = (event) => {
        const selectedCurrency = currencyOptions.find(option => option.name === event.target.value);
        setCurrency(selectedCurrency.symbol); // Update the currency symbol
        setCurrencyEditing(false); // Exit edit mode
    };

    const user = {
        firstName: 'Haddi', lastName: "Ahmad"
    }

    return (
        <div className="container">
            <div className="flex gap-8 my-10 w-full ">
                <div
                    className="flex flex-col w-[32%] h-max rounded-[10px] border border-[#F2F4F7]"
                    style={{
                        boxShadow: '0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814',
                    }}
                >
                    <div
                        className={`${openMenu === 'pd' ? 'bg-green-600 text-white' : 'bg-white text-[#101828]'
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu('pd')}
                    >
                        <FiUser className="w-5 h-5" /> Personal Details
                    </div>

                    <div
                        className={`${openMenu === 'pr' ? 'bg-green-600 text-white' : 'bg-white text-[#101828]'
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu('pr')}
                    >
                        <FiUser className="w-5 h-5" /> Preferences
                    </div>

                    <div
                        className={`${openMenu === 'ss' ? 'bg-green-600 text-white' : 'bg-white text-[#101828]'
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu('ss')}
                    >
                        <FiUser className="w-5 h-5" /> Security Settings
                    </div>

                    <div
                        className={`${openMenu === 'pm' ? 'bg-green-600 text-white' : 'bg-white text-[#101828]'
                            } flex gap-2 text-[20px] font-roboto font-normal w-full border-b border-gray-300 items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu('pm')}
                    >
                        <FiUser className="w-5 h-5" /> Payment Method
                    </div>

                    <div
                        className={`${openMenu === 'ps' ? 'bg-green-600 text-white' : 'bg-white text-[#101828]'
                            } flex gap-2 text-[20px] font-roboto font-normal w-full items-center py-4 px-4 cursor-pointer`}
                        onClick={() => setOpenMenu('ps')}
                    >
                        <FiUser className="w-5 h-5" /> Payment Setting
                    </div>
                </div>

                <div className='w-[68%] font-poppins'>
                    {openMenu === 'pd' && <div>
                        <h1 className='text-[32px] font-poppins font-bold'>
                            Personal details
                        </h1>
                        <p className='mt-1 text-[16px] font-poppins font-normal'>
                            Update your info and find how its used
                        </p>
                        <div className='mt-8 flex justify-between gap-4'>
                            <label className='text-base font-medium flex flex-col w-[50%]'>
                                First Name
                                <div className='w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 flex justify-between items-center'>
                                    <input type="text" className='w-1/2 border-none outline-none text-gray-500' value={user.firstName} />
                                    <CiCircleQuestion className='w-6 h-6 text-gray-700' />
                                </div>
                            </label>
                            <label className='text-base font-medium flex flex-col w-[50%]'>
                                Last Name
                                <div className='w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 flex justify-between items-center'>
                                    <input type="text" className='w-1/2 border-none outline-none text-gray-500' value={user.lastName} />
                                    <CiCircleQuestion className='w-6 h-6 text-gray-700' />
                                </div>
                            </label>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Choose a display name</div>
                            <div className='text-gray-500 text-base'>haddi@_us4500</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Phone No</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Add</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Nationality</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Add</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Date of Birth</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Add</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>City of Residency</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Add</button>
                        </div>
                    </div>}
                    {openMenu === 'pr' && <div>
                        <h1 className='text-[32px] font-poppins font-bold'>
                            Preferences
                        </h1>
                        <p className='mt-1 text-lg font-poppins font-normal'>
                            Change your language, currency and accessibility requirements.
                        </p>
                        <div className='mt-10 flex justify-between items-center'>
                            <div className='text-base font-medium '>Currency</div>
                            {isCurrencyEditing ? (
                                <select
                                    onChange={handleCurrencyChange}
                                    className="text-gray-500 text-lg border rounded px-2 py-1"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Currency</option>
                                    {currencyOptions.map((option) => (
                                        <option key={option.symbol} value={option.name}>
                                            {option.symbol} - {option.name}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <div className="text-gray-500 text-lg">{currency}</div>
                            )}

                            <button className="text-green-600 cursor-pointer text-base font-medium" onClick={handleCurrencyEditClick}>Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Language</div>
                            {isEditing ? (
                                <select
                                    value={language}
                                    onChange={handleLanguageChange}
                                    className="text-gray-500 text-lg border rounded px-2 py-1"
                                >
                                    <option value="English">
                                        <ReactCountryFlag countryCode="US" svg className="mr-2" />
                                        English
                                    </option>
                                    <option value="Spanish">
                                        <ReactCountryFlag countryCode="ES" svg className="mr-2" />
                                        Spanish
                                    </option>
                                    <option value="French">
                                        <ReactCountryFlag countryCode="FR" svg className="mr-2" />
                                        French
                                    </option>
                                    <option value="German">
                                        <ReactCountryFlag countryCode="DE" svg className="mr-2" />
                                        German
                                    </option>
                                    <option value="Chinese">
                                        <ReactCountryFlag countryCode="CN" svg className="mr-2" />
                                        Chinese
                                    </option>
                                    <option value="Japanese">
                                        <ReactCountryFlag countryCode="JP" svg className="mr-2" />
                                        Japanese
                                    </option>
                                </select>
                            ) : (
                                <div className="text-gray-500 text-lg flex items-center">
                                    {language === 'English' && (
                                        <>
                                            <ReactCountryFlag countryCode="US" svg className="mr-2" />
                                            English
                                        </>
                                    )}
                                    {language === 'Spanish' && (
                                        <>
                                            <ReactCountryFlag countryCode="ES" svg className="mr-2" />
                                            Spanish
                                        </>
                                    )}
                                    {language === 'French' && (
                                        <>
                                            <ReactCountryFlag countryCode="FR" svg className="mr-2" />
                                            French
                                        </>
                                    )}
                                    {language === 'German' && (
                                        <>
                                            <ReactCountryFlag countryCode="DE" svg className="mr-2" />
                                            German
                                        </>
                                    )}
                                    {language === 'Chinese' && (
                                        <>
                                            <ReactCountryFlag countryCode="CN" svg className="mr-2" />
                                            Chinese
                                        </>
                                    )}
                                    {language === 'Japanese' && (
                                        <>
                                            <ReactCountryFlag countryCode="JP" svg className="mr-2" />
                                            Japanese
                                        </>
                                    )}
                                </div>
                            )}

                            <button className="text-green-600 cursor-pointer text-base font-medium" onClick={handleLanguageEditClick}>Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                    </div>}
                    {openMenu === 'ss' && <div>
                        <h1 className='text-[32px] font-poppins font-bold'>
                            Preferences
                        </h1>
                        <p className='mt-1 text-lg font-poppins font-normal'>
                            Change your language, currency and accessibility requirements.
                        </p>
                        <div className='mt-10 flex justify-between items-center'>
                            <div className='text-base font-medium '>Password</div>
                            <div className='text-gray-500 text-base w-[30%]'>Reset your password regularly to keep your account secure</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Choose a display name</div>
                            <div className='text-gray-500 text-base'>haddi@_us4500</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Choose a display name</div>
                            <div className='text-gray-500 text-base'>haddi@_us4500</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        <div className='mt-6 flex justify-between items-center'>
                            <div className='text-base font-medium '>Choose a display name</div>
                            <div className='text-gray-500 text-base'>haddi@_us4500</div>
                            <button className="text-green-600 cursor-pointer text-base font-medium">Edit</button>
                        </div>
                        <hr className='text-gray-300 mt-8' />
                        </div>}
                </div>
            </div>
        </div>
    );
};

export default Page;
