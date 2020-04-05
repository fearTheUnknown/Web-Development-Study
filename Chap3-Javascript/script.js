
        var timePassed = 0;

        function resize(height, width, objID) {
            document.getElementById(objID).style.height = height + 'px';
            document.getElementById(objID).style.width = width + 'px';
        }

        function showObj(objID) {
            document.getElementById(objID).style.display = "block";
        }

        function hideObj(objID) {
            document.getElementById(objID).style.display = "none";
        }

        function generateRandomNumber(base) {
            var randomNumber = Math.round(Math.random() * base);
            return randomNumber;
        }

        function timer() {
            timePassed++;
        }

        function changeShape(objID) {
            var shapeSelector = generateRandomNumber(1920);
            var middle = Math.round(generateRandomNumber(1920) / 2);
            if (shapeSelector <= middle) {
                document.getElementById(objID).style.borderRadius = '50%';
            } else {
                document.getElementById(objID).style.borderRadius = '0%';
            }
        }

        function changePosition(objID, left, top) {
            document.getElementById(objID).style.left = left + 'px';
            document.getElementById(objID).style.top = top + 'px';
        }

        function changeColor(objID, r, g, b) {
            document.getElementById(objID).style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        }

        function updateTimeEclapsed() {
            document.getElementById("timeEclapsed").innerHTML = 'Time eclapsed: ' + timePassed + ' seconds';
        }


        function clickEventTrigger() {
            /* Generate a random size for the target element */
            var objSize = generateRandomNumber(200) + 10;

            /* Hide and display the target element after 500ms */
            hideObj("square1");
            setTimeout(function () { showObj("square1"); }, 500);

            /* Change color, Shape, Size and Position of the target element */
            changeColor("square1", generateRandomNumber(255), generateRandomNumber(255), generateRandomNumber(255));
            changeShape("square1");
            resize(objSize, objSize, "square1");
            changePosition("square1", generateRandomNumber(800), generateRandomNumber(600));

            /* 
            Update the time eclapse starting from when the page is loaded
            until the target element is clicked.
             */
            updateTimeEclapsed();

            timePassed = 0;
        }

        setInterval(timer, 1000);