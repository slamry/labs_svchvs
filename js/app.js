(() => {
    "use strict";
    const imagesBlock = document.querySelector("#imagesData");

    async function getBooks(search) {
        const url = "https://www.googleapis.com";
        const maxElements = 40;
        const key = "AIzaSyCcnmqOd0ULRdGGqWDLH4cQQkGcXdXWyWc";
        const server = `${url}/books/v1/volumes?`;
        const searchStringParam = search && search.length > 0 ? `q=${search}` : `q=""`;
        const params = `${searchStringParam}&key=${key}&maxResults=${maxElements}`;
        const response = await fetch(server + params, {
            method: "GET"
        });
        if (response.ok) {
            const responseResult = await response.json();
            console.log(responseResult);
            setData(responseResult);
        } else imagesBlock.innerHTML = `<div class="images-data-items">\n                                             <span class="images-data-items__message">Ошибка при получении данных</span>\n                                         </div>`;
    }

    function setData(data) {
        let html = `<div class="images-data-items">`;
        if (0 === data.items.length) {
            html += `<span class="images-data-items__message">Нет данных</span>`;
            html += "</div>";
            imagesBlock.innerHTML = html;
            return;
        }
        data.items.forEach((element => {
            const volumeInfo = element.volumeInfo;
            const imageId = extractUrlValue("id", volumeInfo.imageLinks?.thumbnail ?? "");
            html += `<article class="images-data__card card-image">
                        <div class="card-image__image">
                            <img src="https://books.google.com/books/publisher/content/images/frontcover/${imageId}?fife=w256-h256"
                                srcset="https://books.google.com/books/publisher/content/images/frontcover/${imageId}?fife=w512-h512 2x" 
                                aria-hidden="true"   
                                itemprop="image" 
                                loading="lazy">
                        </div>
                        <div class="card-image__body">
                            <div class="card-image__title">${volumeInfo.title ?? ""}</div>
                            <div class="card-image__category">${volumeInfo.categories && volumeInfo.categories.length > 0 
                                                                ? `Категория: ${volumeInfo.categories[0]}` 
                                                                : ""}
                            </div>
                            <div class="card-image__author">${volumeInfo.authors && volumeInfo.authors.length > 0 
                                                                ? `Авторы: ${volumeInfo.authors.join(", ")}` 
                                                                : ""}
                            </div>
                        </div>
                    </article>`;
        }));
        html += "</div>";
        imagesBlock.innerHTML = html;
    }

    function extractUrlValue(key, url) {
        if ("undefined" === typeof url) url = window.location.href;
        var match = url.match("[?&]" + key + "=([^&]+)");
        return match ? match[1] : null;
    }

    document.addEventListener("click", documentActions);
    function documentActions(e) {
        searchButtonClick(e);
        clearButtonClick(e);
    }

    function searchButtonClick(e) {
        if (e.target.closest(".form-images-search__button")) {
            const input = document.querySelector(".input__field");
            const searchString = input.value;
            getBooks(searchString);
            e.preventDefault();
        }
    }

    function clearButtonClick(e) {
        if (e.target.closest(".input__clear")) {
            const input = document.querySelector(".input__field");
            if (input.value && input.value.length > 0) {
                input.value = "";
                getBooks("");
                input.focus();
            }
            e.preventDefault();
        }
    }

    document.addEventListener("keypress", keypressActions);

    function keypressActions(e) {
        keypressEnterSearchInput(e);
    }

    function keypressEnterSearchInput(e) {
        if (e.target.closest(".input__field") && "Enter" === e.key) {
            const input = e.target;
            const searchString = input.value;
            getBooks(searchString);
            e.preventDefault();
        }
    }
    if (imagesBlock) getBooks("");
})();