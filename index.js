document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const courseName = document.querySelector('#name').value;
    const data = {"email": email, "courseName": courseName};
    const response = await fetch('https://sap-production.up.railway.app/isGraduated', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();

    document.querySelector('#result').textContent = result.status;


});
