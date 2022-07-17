const simpleToDoListElement = document.getElementById("app-body");
const greenBtn = document.getElementById("green");
const purpleBtn = document.getElementById("purple");
const blueBtn = document.getElementById("blue");
const brownBtn = document.getElementById("brown");

greenBtn.addEventListener("click", changeThemeToGreen);
purpleBtn.addEventListener("click", changeThemeToPurple);
blueBtn.addEventListener("click", changeThemeToBlue);
brownBtn.addEventListener("click", changeThemeToBrown);

function changeThemeToGreen() {
    document.documentElement.style.setProperty("--main-color", "140");
}
function changeThemeToPurple() {
    document.documentElement.style.setProperty("--main-color", "280");
}
function changeThemeToBlue() {
    document.documentElement.style.setProperty("--main-color", "220");
}
function changeThemeToBrown() {
    document.documentElement.style.setProperty("--main-color", "20")
}

var app = new function () {


    this.el = document.getElementById('tasks');

    this.tasks = ['Delete me', 'Edit me'];

    this.Count = function (data) {
        var el = document.getElementById('counter');
        var name = 'tasks to do';

        if (data) {
            if (data > 1) {
                name = 'tasks';
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

    this.FetchAll = function () {
        var data = '';

        if (this.tasks.length > 0) {
            for (i = 0; i < this.tasks.length; i++) {
                data += '<section class="task-row">';
                data += '<div><p>' + this.tasks[i] + '</p></div>';
                data += '<div class="actions">';
                data += '<div class="edit"><button onclick="app.Edit(' + i + ')"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>';
                data += '<div class="delete"><button onclick="app.Delete(' + i + ')"><i class="fa-regular fa-trash-can fa-lg"></i></button></div>';
                data += '</div>';
                data += '</section>';
            }
        }

        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('add-name');
        // Get the value
        var country = el.value;

        if (country) {
            // Add the new value
            this.tasks.push(country.trim());
            // Reset input value
            el.value = '';
            // Dislay the new list
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var el = document.getElementById('edit-name');
        // Display value in the field
        el.value = this.tasks[item];
        // Display fields
        document.getElementById('spoiler').style.display = 'block';
        self = this;

        document.getElementById('saveEdit').onsubmit = function () {
            // Get value
            var country = el.value;

            if (country) {
                // Edit value
                self.tasks.splice(item, 1, country.trim());
                // Display the new list
                self.FetchAll();
                // Hide fields
                CloseInput();
            }
        }
    };

    this.Delete = function (item) {
        // Delete the current row
        this.tasks.splice(item, 1);
        // Display the new list
        this.FetchAll();
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('spoiler').style.display = 'none';
}
