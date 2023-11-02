import { Fragment } from "react";


function Timepicker1() {
  return (
    <Fragment>
      <div className=" bg-black m-auto max-w-full max-h-screen">

        <div className=" fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-96 lg:w-96 w-11/12 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
          <h1 className="text-2xl font-semibold">Dialog Title</h1>
          <div className="py-5 border-t border-b border-gray-300">
            <p>Welcome to KindaCode.com. Hope you will find something useful. Have a nice day and happy coding</p>
          </div>
          <div className="flex justify-end">

            <button id="close" className="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md">
              Close
            </button>
          </div>
        </div>
      </div>

    </Fragment>
  );
}
export default Timepicker1;