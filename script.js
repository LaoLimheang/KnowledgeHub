let countdownInterval;

        function calculateDifference() {
            const inputDate = document.getElementById('inputDate').value;
            if (!inputDate) {
                document.getElementById('result').innerText = 'Please select a date.';
                document.getElementById('countdown').innerText = '';
                return;
            }

            const selectedDate = new Date(inputDate);
            const today = new Date();

            const diffTime = today - selectedDate;
            if (diffTime < 0) {
                document.getElementById('result').innerText = 'The selected date is in the future.';

                // Countdown to future date
                clearInterval(countdownInterval);
                countdownInterval = setInterval(() => {
                    const now = new Date();
                    const countdownTime = selectedDate - now;
                    const countdownDays = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
                    const countdownHours = Math.floor((countdownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const countdownMinutes = Math.floor((countdownTime % (1000 * 60 * 60)) / (1000 * 60));
                    const countdownSeconds = Math.floor((countdownTime % (1000 * 60)) / 1000);

                    document.getElementById('countdown').innerText = `Countdown: ${countdownDays} days, ${countdownHours} hours, ${countdownMinutes} minutes, ${countdownSeconds} seconds`;

                    if (countdownTime <= 0) {
                        clearInterval(countdownInterval);
                        document.getElementById('countdown').innerText = 'The countdown is over!';
                    }
                }, 1000);

                return;
            }

            const diffDate = new Date(diffTime);
            const years = diffDate.getUTCFullYear() - 1970;
            const days = Math.floor(diffTime / (1000 * 60 * 60 * 24)) - years * 365;

            document.getElementById('result').innerText = `${years} year(s) and ${days} day(s)`;
            document.getElementById('countdown').innerText = '';
        }

        function clearResults() {
            document.getElementById('inputDate').value = '';
            document.getElementById('result').innerText = '';
            document.getElementById('countdown').innerText = '';
            clearInterval(countdownInterval);
        }