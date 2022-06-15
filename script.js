let button = document.getElementById("get-text-btn");
let textArea = document.getElementById("my-text-area");
let loader = document.getElementById("loader");
button.addEventListener("click", function() {
    getData();
});
async function getData() {
    try {
        loader.style.display = "inline-block";
        let response = await fetch('https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt');
        if (response.status !== 200) {
            throw new Error("Error while reading file.");
        }
        let text = await response.text();
        var res = text.split("\n");

        class Student {
            constructor(name, adress, phone, course) {
                this.name = name;
                this.adress = adress;
                this.phone = phone;
                this.course = course;
            }


            getInfo() {
                return "Name: " + this.name + "<br>" +
                    "Adresss: " + this.adress + "<br>" +
                    "Phone: " + this.phone + "<br>" +
                    "Course: " + this.course + "<br>" + "<br>"
            }
        }

        for (i = 0; i <= (res.length - 3); i++) {
            let student = new Student(res[i], res[i + 1], res[i + 2], res[i + 3]);
            let studentInfo = student.getInfo();
            document.write(studentInfo);
            i = i + 3;
        }

    } catch (err) {
        textArea.innerHTML = 'Fetch problem: ' + err.message;
    } finally {
        loader.style.display = "none";
    }
}