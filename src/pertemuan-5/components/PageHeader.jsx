export default function PageHeader() {
    return (
        <div id="pageheader-container" classname="flex items-center justify-between p-4">
            <div id="pageheader-left" classname="flex flex-col">
                <span id="page-title">
                    Dashboard
                </span>
                <div id="breadcrumb-links" classname="flex items-center font-medium space-x-2 mt-2">
                    <span id="breadcrumb-home" classname="text-gray-500">Dashboard</span>
                    <span id="breadcrumb-separator" classname="text-gray-500">/</span>
                    <span id="breadcrumb-current" classname="text-gray-500">Order List</span>
                </div>
            </div>
            <div id="action-button">
                <button id="add-button" classname="bg-hijau text-white px-4 py-2 rounded-lg">
		                Add Button
		            </button>
            </div>
        </div>
    );
}