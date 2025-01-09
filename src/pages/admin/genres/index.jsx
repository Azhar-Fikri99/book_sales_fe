export default function Genres() {
  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                Name
              </th>
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Description
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black dark:text-white">Free Package</h5>
                <p className="text-sm">$0.00</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <a href=""><i className="fa-solid fa-plus"></i></a>
                  <a href=""><i className="fa-solid fa-pen-to-square"></i></a>
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>




            <tr className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                <h5 className="font-medium text-black dark:text-white">
                  Standard Package
                </h5>
                <p className="text-sm">$59.00</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <a href=""><i className="fa-solid fa-plus"></i></a>
                  <a href=""><i className="fa-solid fa-pen-to-square"></i></a>
                  <a href=""><i className="fa-solid fa-trash"></i></a>
                </div>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}