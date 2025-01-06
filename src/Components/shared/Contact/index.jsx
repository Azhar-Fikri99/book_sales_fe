import Button from "../../ui/Button";

export default function Contact()
{
   
    return(
        <section className="text-gray-600 body-font relatiev">
            <div className="container px-5 py-4 mx-auto">
                {/* judul */}
                <div className="flex flex-col text-center w-full mb-12">
                    {/* text-gray-900 untuk ketebalan warna, biasa nya 800 atau 900 */}
                
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact US</h1>
                    {/* leading-relaxed  itu biar agak renggang
                        text-base untuk ukuran font
                        2/3 nanti kiri kana nya menjadi margin, layar kan dibagi 3 yaitu 1/3 2/3 dan 3/3 
                        mx-auto : margin nya auto jadi ketengah
                    */}
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base"> Hubungi Kami, kapan pun, dimana pun </p>
                </div>    

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    {/* flex di bagi 2, terus flex-warp dia otomatis ke bawah */}
                    <div className="flex flex-wrap -m-2">
                    {/* bentuk form nya */}
                    {/* ini form nya */}
                        <div className="p-2 w-1/2">
                            {/* .relative>label.leading-7.text-sm.text-gray-600{Name}+input:text.w-full.bg-gray-100.bg-opacity-50.rounded.border.border-grey-300 */}
                            <div className="relative">
                                <label htmlFor="" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded border border-grey-300 focus:border-indigo-500 focus-bg-white focus:ring-2 focus:ring-indigo-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>

                        <div className="p-2 w-1/2">
                            {/* .relative>label.leading-7.text-sm.text-gray-600{Name}+input:text.w-full.bg-gray-100.bg-opacity-50.rounded.border.border-grey-300 */}
                            <div className="relative">
                                <label htmlFor="" className="leading-7 text-sm text-gray-600">Email</label>
                                <input type="email" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded border border-grey-300 focus:border-indigo-500 focus-bg-white focus:ring-2 focus:ring-indigo-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                            </div>
                        </div>


                        <div className="p-2 w-full">
                            {/* .relative>label.leading-7.text-sm.text-gray-600{Name}+input:text.w-full.bg-gray-100.bg-opacity-50.rounded.border.border-grey-300 */}
                            <div className="relative">
                                <label htmlFor="" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea type="text" name="" id="" className="w-full bg-gray-100 bg-opacity-50 rounded border border-grey-300 focus:border-indigo-500 focus-bg-white focus:ring-2 focus:ring-indigo-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out h-32 resize-none leading=6">
                                </textarea>
                                
                            </div>
                        </div>

                        <div className="p-2 w-full">
                            {/* ini dari Component */}
                             {/* <Button /> */}
                            {/* ini kasih props */}
                            <Button txt="send" />
                            {/* <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo"> Send </button> */}
                        </div>

                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                            <a href="" className="text-indigo-500">info@booksale.com
                                    <p className="leading-normal my-5">
                                           Jakarta Selatan
                                       <br />
                                       Indonesia
                                    </p>
                            </a>
                        </div>
                    </div>
                    

                </div>
            </div>            
        </section>

    )
}