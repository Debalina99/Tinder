import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const Products = () => {
    return (
        <div className='h-screen bg-red-400'>
            <Navbar />

            <div className='flex flex-col items-center justify-center '>
                <p className='flex text-white items-center justify-center text-4xl font-bold' style={{ fontStyle: "italic", marginTop: "7rem" }}> Report a Safety Concern or Incident</p>
                <div className="flex mt-10">
                    <div className="bg-white text-gray-600 p-8 rounded shadow-md" style={{ width: "1100px", height: "420px", cursor: "pointer" }}>

                        <div className="flex flex-col ">
                            <div className='mb-2'>
                                <p className='font-bold'>Reporting Illegal Content (EEA)</p>
                                <p className='text-gray-500 ml-2'>In compliance with the Digital Services Act (DSA), Tinder offers a contact form designed to facilitate the reporting of illegal content under European Economic Area (EEA) law. </p>
                                <p className='text-gray-500 ml-2'>This form is intended for use by people located in the EEA or designated trusted flaggers. If you’re not in these categories, or you need to report a different issue on Tinder, please use our other reporting tools.</p>
                            </div>
                            <div className='mb-2'>
                                <p className='font-bold'>Appeal our decision</p>
                                <p className='text-gray-500 ml-2'>If you disagree with our decision on your report, you can appeal by responding to the decision email. You may only appeal once, within 6 months of the decision by Tinder to take (or not take) action on the report.</p>
                                <p className='text-gray-500 ml-2'>We appreciate your dedication to maintaining a safe and positive environment on Tinder.</p>
                            </div>
                            <div className='mb-2'>
                                <p className='font-bold'>How do I contact Tinder’s Data Protection Officer?</p>
                                <p className='text-gray-500 ml-2'>If you are a Tinder user located in the European Economic Area, Switzerland or the UK, 
                                    you may contact Tinder’s Data Protection Officer (“DPO”) directly by postal mail at the address listed in Section 12 of Tinder’s 
                                    Privacy Policy or by using our contact form here. Select “I have another question about my data” from the privacy drop down options 
                                    and include in the description field that you wish to contact the “Data Protection Officer” or “DPO”.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Products;