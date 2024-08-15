export default function AppMenu() {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-3 mx-auto" >
                <div className="flex items-center">
                        <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                            <li>
                                <a href="/" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/createCards" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                    Create New Cards
                                </a>
                            </li>
                            <li>
                                <a href="/cards/MyCards" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                    Cards
                                </a>
                            </li>
                            <li>
                                <a href="/mySculptureListC" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500">
                                    sculptureList
                                </a>
                            </li>
                        </ul>
                </div>
            </div>
        </nav>

    )
}