


export default function Sidebar() {
    return (
        <div id="sidebar" classname="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" classname="flex flex-col">
                <div id="logo-title" classname="font-poppins text-[48px] text-gray-900"></div>
                <div id="logo-dot" classname="text-hijau"></div>
                <div id="logo-subtitle" classname="font-semibold text-gray-400"></div>
                <span>Sedap <b>.</b></span>
                <span>Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <div id="sidebar-menu" classname="mt-10">
                <ul id="menu-list" classname="space-y-3">
                    <li>
	                    <div 
                        id="menu-1"
                        to="/"
                         classname="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"/>
                        
                        <MdDashboard  className="mr-4 text-xl"/>
                        <span>Dashboard</span>
	                  </li>
                    <li>
	                    <div
                         id="menu-2"
                         to="/"
                        classname="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"/>
                        <MdDashboard  className="mr-4 text-xl"/>
                        <span>Orders</span>
	                  </li>
	                  <li>
	                    <div 
                        id="menu-3" 
                        to="/"
                        classname="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"/>
                        <MdDashboard  className="mr-4 text-xl"/>
                        <span>Customers</span>
	                  </li>
                </ul>
            </div>

            {/* Footer */}
            <div id="sidebar-footer" classname="	
mt-auto">
                <div id="footer-card" classname="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center">
                    <div id="footer-info" classname="flex-1 p-2"></div>
                    <div id="footer-text" classname="text-white text-sm">
                        <span>Please organize your menus through button below!</span>
                        <div id="add-menu-button" classname="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2">
                            <span>Add Menus</span>
                        </div>
                    </div>
                    <img id="footer-avatar" classname="w-20 rounded-full" src="https://avatar.iran.liara.run/public/28" />
                    <div id="footer-brand" classname="font-bold text-gray-400"></div>
                    <div id="footer-copyright" classname="font-light text-gray-400"></div>
                </div>
                <span>Sedap Restaurant Admin Dashboard</span>
                <p>&copy; 2025 All Right Reserved</p>
            </div>
        </div>
    );
}
