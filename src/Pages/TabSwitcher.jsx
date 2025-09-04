import { useState } from "react";


const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];

export default function TabSwitcher() {

    const [activeTab , SetactiveTab] = useState("home");

    function handelActiveTab(id) {
        if(id !== activeTab){
            SetactiveTab(id);
        }
    }
    
    
    return(
        <div className="h-screen flex justify-center items-center">
            <div className="w-3xl bg-blue-200 flex flex-col justify-center items-center shadow-2xl select-none text-[#1f3a3a] rounded-2xl py-8 px-10">
                <h1 className="text-5xl font-bold mb-7 text-[#134140]">Tab Switcher</h1>

                <div className="flex justify-center gap-6 mb-8">
                    {
                        tabs.map((tab) => (
                            <button 
                                className={` px-3 py-2 rounded-lg cursor-pointer shadow-2xs 
                                    ${activeTab === tab.id ? "bg-blue-300 text-blue-950 border-2 border-blue-950 shadow-2xl" : "bg-white text-blue-500 hover:bg-blue-300 hover:text-blue-950 "}`}

                                onClick={()=> handelActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))
                    }                    
                </div>

                <div className="bg-white border-2 border-transparent text-center rounded-lg min-h-28 py-10 px-7 w-150 text-2xl shadow-2xl text-[#1f3a3a] select-text ">
                    {tabs.find((tab) => tab.id === activeTab).content}
                </div>
            </div>
        </div>
    )
}