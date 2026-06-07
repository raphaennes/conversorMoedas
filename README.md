* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f4f7f6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.converter-container {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
}

h2 {
    color: #333;
    margin-bottom: 20px;
}

.input-group {
    text-align: left;
    margin-bottom: 20px;
}

label {
    display: block;
    color: #666;
    margin-bottom: 8px;
    font-size: 14px;
}

input {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

input:focus {
    border-color: #2ecc71;
}

button {
    width: 100%;
    background-color: #2ecc71;
    color: white;
    border: none;
    padding: 14px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #27ae60;
}

.result-box {
    margin-top: 25px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border-left: 5px solid #2ecc71;
}

#resultText {
    font-size: 18px;
    color: #444;
    font-weight: 500;
}
