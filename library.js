document.addEventListener("DOMContentLoaded", function () {
    loadBookmarks();
});

function loadBookmarks() {
    let libraryGrid = document.getElementById("library-grid");
    libraryGrid.innerHTML = ""; 

    let bookmarks = JSON.parse(localStorage.getItem("codingLibrary")) || [];

    if (bookmarks.length === 0) {
        libraryGrid.innerHTML = "<p style='color: #ff4c4c; text-align: center;'>No bookmarks saved.</p>";
        return;
    }

    bookmarks.forEach((bookmark, index) => {
        let card = document.createElement("div");
        card.classList.add("library-card");

        let title = document.createElement("h3");
        title.innerText = bookmark.title;
        title.style.fontWeight = "bold";

        let link = document.createElement("a");
        link.href = bookmark.link; 
        link.target = "_blank";
        link.innerText = "🔗 Open";

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "❌ Remove";
        deleteBtn.onclick = function () {
            removeBookmark(index);
        };

        card.appendChild(title);
        card.appendChild(link);
        card.appendChild(deleteBtn);

        libraryGrid.appendChild(card);
    });
}


function removeBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("codingLibrary")) || [];
    bookmarks.splice(index, 1);

    localStorage.setItem("codingLibrary", JSON.stringify(bookmarks));
    loadBookmarks(); 
}

function removeAllBookmarks() {
    if (confirm("Are you sure you want to delete all bookmarks? This cannot be undone!")) {
        localStorage.removeItem("codingLibrary"); 
        loadBookmarks(); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("remove-all").addEventListener("click", removeAllBookmarks);
});