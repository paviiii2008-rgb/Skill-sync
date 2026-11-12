
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background: #f8f7fc;
    color: #29243b;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 8%;
    background: white;
}

header h2 {
    color: #7456d8;
    font-size: 28px;
}

nav a {
    text-decoration: none;
    color: #333;
    margin: 12px;
}

button {
    background: #7456d8;
    color: white;
    border: none;
    padding: 12px 22px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #573bb5;
}

.hero {
    min-height: 400px;
    display: flex;
    align-items: center;
    padding: 60px 10%;
    background: linear-gradient(120deg, #e8e0ff, #f7f3ff);
}

.hero h1 {
    font-size: 48px;
    color: #6044bd;
    margin-bottom: 18px;
}

.hero p {
    font-size: 18px;
    margin-bottom: 25px;
}

.categories {
    padding: 60px 8%;
    text-align: center;
}

.categories h2,
.exchange h2 {
    font-size: 30px;
    margin-bottom: 30px;
}

.skill-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 22px;
}

.skill-card {
    background: white;
    padding: 30px 20px;
    border-radius: 15px;
    box-shadow: 0 3px 12px #ddd;
}

.skill-card h3 {
    margin-bottom: 15px;
    color: #7456d8;
}

.skill-card p {
    margin-bottom: 20px;
    line-height: 1.5;
}

.exchange {
    padding: 60px 20px;
    text-align: center;
    background: #eee9fc;
}

form {
    max-width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

input {
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
}

#result {
    margin-top: 20px;
    line-height: 1.8;
}

footer {
    background: #29213e;
    color: white;
    text-align: center;
    padding: 30px;
    line-height: 2;
}

@media (max-width: 700px) {
    header {
        flex-direction: column;
        gap: 15px;
    }

    nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .hero h1 {
        font-size: 35px;
    }
}
