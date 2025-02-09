const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#ec4899"];

let startIndex = 1; 
let currentQuery = "";
let currentSiteFilter = "";

async function searchGoogle(query, siteFilter, startIndex) {

    const API_KEY = "AIzaSyDlA14Ivz1bzObJ_2okn_-vKOGOppYmDjo";
    const CX = "b6a94737a98d14a15";

    let siteQuery = siteFilter ? ` ${siteFilter}` : "";
    let url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query + siteQuery)}&key=${API_KEY}&cx=${CX}&start=${startIndex}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}

async function generateLinks(isNewSearch) {
    let query = document.getElementById("query").value.trim();
    let siteFilter = document.getElementById("site-filter").value;
    let resultDiv = document.getElementById("results");
    let loading = document.getElementById("loading");
    let loadMoreBtn = document.getElementById("load-more");

    if (query === "") {
        alert("Please enter a coding question!");
        return;
    }

    if (isNewSearch) {
        startIndex = 1;
        currentQuery = query;
        currentSiteFilter = siteFilter;
        resultDiv.innerHTML = "";
        loadMoreBtn.classList.add("hidden"); 
    } else {
        startIndex += 10; 
    }

    loading.classList.remove("hidden");

    let results = await searchGoogle(currentQuery, currentSiteFilter, startIndex);
    loading.classList.add("hidden");

    if (results.length === 0 && startIndex === 1) {
        resultDiv.innerHTML = `<p style="color: red;">No results found.</p>`;
        return;
    }

    results.forEach((item, index) => {
        let card = document.createElement("div");
        card.classList.add("result-card", "fade-in");
        card.style.backgroundColor = colors[(startIndex + index) % colors.length];

        let title = document.createElement("h3");
        title.innerText = item.title;
        title.style.fontWeight = "bold";

        let link = document.createElement("a");
        link.href = item.link;
        link.target = "_blank";
        link.innerText = "🔗 View Question";

        let saveButton = document.createElement("button");
        saveButton.innerText = "📥 Save";
        saveButton.classList.add("saveBtn");
        saveButton.onclick = () => saveToLibrary(item.title, item.link);

        card.appendChild(title);
        card.appendChild(link);
        card.appendChild(saveButton);
        resultDiv.appendChild(card);
    });

    if (results.length > 0) {
        loadMoreBtn.classList.remove("hidden");
    } else {
        loadMoreBtn.classList.add("hidden");
    }
}


function saveToLibrary(title, link) {
    let savedItems = JSON.parse(localStorage.getItem("codingLibrary")) || [];
    
    if (!savedItems.some(item => item.link === link)) {
        savedItems.push({ title, link });
        localStorage.setItem("codingLibrary", JSON.stringify(savedItems));
        alert("✅ Question saved!");
    } else {
        alert("⚠ Already saved!");
    }
}


