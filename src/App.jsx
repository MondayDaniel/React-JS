
 import React from 'react'

function App() {

  return (
   <>
   <div className="App">
    <div className="bg-blue-500/50">
    {/* <!-- navbar --> */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#231d1a]/95 backdrop-blur-sm border-b">
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center h-20">
       <h1 className="text-2x1 sm:text-3x1 font-bold text-[#fefbf5] tracking-wide">
            G Luxury store
       </h1>
        <div className=" md:flex space-x-8">
            <ul className="md:flex space-x-8 text-[#fefbf5] transition-colors">
                  <li className=" hover:text-blue-500"><a href="#Home">Home</a></li>
                  <li className=" hover:text-blue-500"><a href="#Product">Product</a></li>
                 <li className=" hover:text-blue-500"> Cart</li> 
             </ul>
        </div>
      </div>
    </nav>

    {/* Header section */}
     <a name="Home"></a>
    <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center h-screen bg-blue-500">
            </div>
            <div className="relative z-10 bg text-center px-4 animate-fade-in">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#fefbf5] mb-6">
                  G Luxury store
                </h2>
                <p className="text-xl sm:text-2xl backdrop-blur-sm text-[#fefbf5] mb-8 max-w-2xl mx-auto">
                  The store for the best, advanced, and smart gadget
                </p>
                <button size="lg"
                  className="bg-blue-300 shadow-lg rounded-md hover:bg-blue-500/50 text-[#1f1f1f] text-lg px-8 py-3">
                   <a href="#Product">View Our product</a>
                </button>
            </div>
    </header>

    {/* <!-- cards --> */}
    <a name="Product"></a>
    <section className="gap-4 p-16 grid grid-cols-3">

     {/* <!-- card1 --> */}
      <div className="bg-red-50 shadow drop-shadow-md rounded-lg p-8 space-y-3">
        
            <div className="w-full h-[15rem]">
                <img 
                src="https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202408/19/00157063608517009_16__640x640.jpg"
                alt="" 
                className="rounded-md w-full h-full object-cover"/>
            </div>

             {/*<!-- main text -->*/}
            <div>
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <p>Samsung Galaxy A35 5G 
                        </p>
                        <p>2024</p>
                    </div>
                    <button className="bg-black h-6 w-6 hover:bg-black/50 text-white rounded-full
                     text-center"> +
                    </button>
                </div>
                <div>
                    <p className="text-white-600">samsung</p>
                    <h2>$424.26</h2>
                </div>
            </div>
            <hr className="text-whit"/>
             {/*<!-- color section -->*/}
            <div>
                <h2>colors</h2>
                <div className="flex gap-2">
                    <p className="w-7 h-7 rounded-full bg-red-500"></p>
                    <p className="w-7 h-7 rounded-full bg-black"></p>
                    <p className="w-7 bg-red-200 h-7 rounded-full"> </p>
                </div>
            </div>
      </div>

      { /* <!-- card2 --> */}
      <div className="bg-red-50 shadow drop-shadow-md rounded-lg p-8 space-y-3">
            
            <div className="w-full h-[15rem] ">
                <img 
                src="https://tse1.mm.bing.net/th/id/OIP.0fsxeI9i5uiEDeq2ozRhkgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Buds" 
                className="rounded-md w-full h-full object-cover"/>
            </div>

             {/*<!-- main text -->*/}
            <div>
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <p>Samsung Galaxy Buds Live 
                        </p>
                        <p>2020</p>
                    </div>
                    <div className="bg-black h-6 w-6 hover:bg-black/50 text-white rounded-full
                     text-center"> +
                    </div>
                </div>
                <div>
                    <p className="text-white-600">samsung</p>
                    <h2>$118.50</h2>
                </div>
            </div>
            <hr className="text-whit"/>
            {/* <!-- color section -->*/}
            <div>
                <h2>colors</h2>
                <div className="flex gap-2">
                    <p className="w-7 h-7 rounded-full bg-red-500"></p>
                    <p className="w-7 h-7 rounded-full bg-black"></p>
                    <p className="w-7 bg-[#8d6663] h-7 rounded-full"> </p>
                </div>
            </div>
       
      </div>

      {/* <!-- card3 --> */}
      <div className="bg-red-50 shadow drop-shadow-md rounded-lg p-8 space-y-3">
       
            <div className="w-full h-[15rem] ">
                <img 
                src="https://files.hjalp.ai/images/uilcg03as846bv.webp"
                alt="" 
                className="rounded-md w-full h-full object-cover"/>
            </div>

             {/*<!-- main text -->*/}
            <div>
                <div className="flex items-center justify-between gap-12">
                    <div>
                        <p> samsung Galaxy Z Flip6
                        </p>
                        <p>2024</p>
                    </div>
                    <div className="bg-black h-6 w-6 hover:bg-black/50 text-white rounded-full
                     text-center"> +
                    </div>
                </div>
                <div>
                    <p className="text-white-600">samsung</p>
                    <h2>$899.98</h2>
                </div>
            </div>
            <hr className="text-whit">
             {/*<!-- color section -->*/}</hr>
            <div>
                <h2>colors</h2>
                <div className="flex gap-2">
                    <p className="w-7 h-7 rounded-full bg-red-500"></p>
                    <p className="w-7 h-7 rounded-full bg-black"></p>
                    <p className="w-7 bg-blue-500/50 h-7 rounded-full"> </p>
                </div>
            </div>
      </div>
    </section>

        <footer className="bg-[#231d1a] text-[#fefbf5] py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
               <h3 className="text-3xl font-bold mb-4"> G Luxury store</h3>
                <p className="text-[#fefbf5]/80 mb-6">
                  The best option for your Gadgets
               </p>
               <p className="text-sm text-[#fefbf5]/60">
                  © 2025  G Luxury store. All rights reserved.
                </p>
           </div>
        </footer>
      </div>
    </div>
  
    
   </>    
  )
}

export default App
