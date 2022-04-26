import React from "react";

const table = () => {
  return (
      <div>
    <table className="table-fixed">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Title</th>
          <th className="w-1/4 px-4 py-2">Author</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
          <th className="w-1/4 px-4 py-2">Views</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border px-4 py-2">Intro to CSS</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
          <td className="border px-4 py-2">858</td>
        </tr>
        <tr className="bg-gray-100">
          <td className="border px-4 py-2">
            A Long and Winding Tour of the History of UI Frameworks and Tools
            and the Impact on Design
          </td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">112</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">Adam</td>

        </tr>
        <tr>
          <td className="border px-4 py-2">Intro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScriptIntro to JavaScript</td>
          <td className="border px-4 py-2">Chris</td>
          <td className="border px-4 py-2">Chris</td>
          <td className="border px-4 py-2">Chris</td>

          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>
          <td className="border px-4 py-2">1,280</td>

        </tr>
      </tbody>
    </table>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Product name
          </th>
          <th scope="col" className="px-6 py-3">
            Color
          </th>
          <th scope="col" className="px-6 py-3">
            Category
          </th>
          <th scope="col" className="px-6 py-3">
            Price
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white"
          >
            Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"Apple MacBook Pro 17"
          </th>
          <td className="px-6 py-4">Sliver</td>
          <td className="px-6 py-4">Laptop</td>
          <td className="px-6 py-4">$2999</td>
          <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white "
          >
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
            Microsoft Surface Pro
          </th>
          <td className="px-6 py-4">White</td>
          <td className="px-6 py-4">Laptop PC</td>
          <td className="px-6 py-4">$1999</td>
          <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white dark:bg-gray-800">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-normal"
          >
            Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2
          </th>
          <td className="px-6 py-4">Black</td>
          <td className="px-6 py-4">AccessoriesMagic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2Magic Mouse 2</td>
          <td className="px-6 py-4">$99</td>
          <td className="px-6 py-4 text-right">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>  
  );
};

export default table;
