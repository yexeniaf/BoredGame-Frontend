export default function SaveGameButton(props) {
    const token = localStorage.getItem("token");
    return (
        <button
            className="w-full flex items-center justify-center px-8 py-3
            border border-transparent text-base font-medium rounded-md 
            text-indigo-700 bg-indigo-100 hover:bg-indigo-200 
            md:py-4 md:text-lg md:px-10"
            onClick={(token? props.saveGame : () => alert("You must be signed in in order to save a game."))}
        >
            Save Game
        </button>
    )
}
